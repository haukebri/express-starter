import express from 'express';
import { loginController } from '../controllers/user/login';

const user = express.Router();

// User routes
user.post('/login', loginController);

export default user;