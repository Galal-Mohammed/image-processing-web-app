import fs from 'fs';
import path from 'path';
import request from 'supertest';
import { app } from '../app';

describe('POST /upload', () => {
  const originalPath = path.join(__dirname, '..', 'images', 'original', 'test.jpg');
  const tempPath = path.join(__dirname, 'temp-test.jpg');

  beforeAll(() => {
    fs.copyFileSync(originalPath, tempPath);
  });

  afterAll(() => {
    fs.unlinkSync(tempPath);
  });

  it('Should successfully upload an image and return status 200', async () => {
    const response = await request(app).post('/upload').attach('image', tempPath);
    expect(response.status).toBe(200);
  });

  it('Should return error when no image is uploaded', async () => {
    const response = await request(app).post('/upload');
    expect(response.status).toBe(400);
  });
});
