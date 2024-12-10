import express from 'express';
import { createUser } from '../controllers/UserController';


const router = express.Router();

router.post("/user", createUser);

export default router;