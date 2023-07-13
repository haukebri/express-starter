import express from 'express';
import { loginController } from '../controllers/auth/login';
import { registerController } from '../controllers/auth/register';

const auth = express.Router();

// auth routes
auth.post('/login', loginController);
auth.post('/register', registerController);

export default auth;