import express from 'express';
import { createCategory, getCategories } from '../controllers/CategoryController';


const router = express.Router();

router.post("/categories", createCategory);
router.get("/categories", getCategories);


export default router;