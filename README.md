# Image Processing Web Application

This project is a full-stack web application that enables users to **upload** and **resize JPG/JPEG images**. It features a **backend API** built with **Express.js** and a **frontend interface** using **HTML, CSS, and JavaScript**.

---

## 🚀 Features

- Browse a gallery of available images  
- Resize images by specifying custom dimensions  
- Upload JPG or JPEG images  
- API endpoints for image manipulation and retrieval  
- Simple, responsive frontend to interact with the backend

---

## 🛠️ Getting Started

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Galal-Mohammed/image-processing-web-app.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd image-processing-web-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Access the app:**

   - Visit `http://localhost:8000` in your browser
   - Or simply open the `index.html` file inside the `/public` folder

---

## 💻 Frontend Usage (`/public` Folder)

### Viewing Images
- The home page displays a gallery of existing images.
- Click on any image to select it for resizing.

### Resizing Images
- Choose an image from the dropdown list.
- Enter the target width and height.
- Click **"Resize"** to create a resized version.
- The URL of the resized image will be displayed below the form.

### Uploading Images
- Click **"Choose File"** and select a `.jpg` or `.jpeg` image.
- Press **"Upload"** to send the image to the server.
- The uploaded image will appear in the gallery and become resizable.

---

## 📡 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /images` | List all available images |
| `GET /images/:imageName` | Retrieve an image (optionally resized) |
| &nbsp;&nbsp;&nbsp;&nbsp;Query Parameters | `w` = width (optional), `h` = height (optional) |
| Example | `http://localhost:8000/images/fjord.jpg?w=200&h=800` |
| `POST /upload` | Upload a new image file |

---

## 📁 Project Structure

```
├── src/
│   ├── controllers/
│   │   ├── ImagesController.ts
│   │   ├── IndexController.ts
│   │   └── UploadController.ts
│   ├── images/
│   │   ├── original/
│   │   └── thumbnails/
│   ├── tests/
│   │   ├── helpers/
│   │   ├── *.test.ts
│   ├── utils/
│   │   ├── fileExist.ts
│   │   ├── generateFileName.ts
│   │   └── resizeImage.ts
│   ├── app.ts
│   ├── config.ts
│   ├── index.ts
│   └── routes.ts
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── package.json
└── README.md
```

### Folder Explanation

- `src/` - Contains backend source files
  - `controllers/` - Request handlers for the API
  - `images/` - Image storage (original and resized)
  - `utils/` - Shared helper functions
  - `tests/` - Unit tests for backend logic
  - `app.ts` - Main Express app
  - `routes.ts` - API route definitions
- `public/` - Contains all frontend code (HTML, CSS, JS)
- `package.json` - Lists dependencies and scripts
- `README.md` - Documentation

---

## 📝 License

This project is released under the **MIT License**.  
Feel free to use, modify, and share with attribution.