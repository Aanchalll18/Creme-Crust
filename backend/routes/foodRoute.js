import express from 'express';
import { addFood } from '../controllers/foodControllers.js';
import multer from 'multer';

const foodRouter = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });


foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
