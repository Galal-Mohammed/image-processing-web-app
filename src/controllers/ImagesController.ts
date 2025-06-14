import { Request, Response, Router } from 'express';
import config from '../config';
import { resizeImage } from '../utils/resizeImage';
import { fileExist } from '../utils/fileExist';
import { generateFileName } from '../utils/generateFileName';
import fs from 'fs';

export const ImagesController: Router = Router();

// GET list of available original images
ImagesController.get('/', (req: Request, res: Response): void => {
  const imageFiles = fs.readdirSync(config.ORIGINAL_IMAGES_FOLDER);
  res.status(200).json(imageFiles);
});

// GET resized image or original image
ImagesController.get('/:imageName', async (req: Request, res: Response): Promise<void> => {
  const { imageName } = req.params;
  const imagePath = `${config.ORIGINAL_IMAGES_FOLDER}/${imageName}`;

  // Check if original image exists
  if (!fileExist(imagePath)) {
    res.status(404).send('Image failed to process: base file does not exist.');
    return;
  }

  // Get and validate width and height
  const width = req.query.w ? Number(req.query.w) : null;
  const height = req.query.h ? Number(req.query.h) : null;

  if (
    (req.query.w && (width === null || isNaN(width) || width <= 0)) ||
    (req.query.h && (height === null || isNaN(height) || height <= 0))
  ) {
    res.status(400).send('Width and height must be positive numbers.');
    return;
  }

  // If no width or height provided, send original image
  if (width === null && height === null) {
    res.status(200).sendFile(imagePath);
    return;
  }

  // Proceed to resize and send resized image
  const imageNameWithoutExtension = imageName.split('.')[0];
  const resizedImageName = generateFileName(imageNameWithoutExtension, width, height);
  const resizedImagePath = `${config.THUMBNAIL_IMAGES_FOLDER}/${resizedImageName}`;

  if (!fileExist(resizedImagePath)) {
    await resizeImage(imageNameWithoutExtension, width, height);
  }

  res.status(200).sendFile(resizedImagePath);
});
