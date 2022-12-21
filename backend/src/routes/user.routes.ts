import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.get('/', userController.getUser);

export default userRoutes;
