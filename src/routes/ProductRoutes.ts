import express from 'express';
import { createProduct, getProducts, updateProduct } from '../controllers/ProductController';

const router = express.Router();

router.post ("/products", createProduct);
router.get ("/products", getProducts);
router.put ("/products/:id", updateProduct);

export default router;