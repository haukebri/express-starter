import express from 'express';
import { loginController } from '../controllers/auth/login';

const auth = express.Router();

// auth routes
auth.post('/login', loginController);

export default auth;