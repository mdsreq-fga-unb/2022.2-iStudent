import { Router } from 'express';
import { adaptRoute } from '../main/adapters/express/express-route.adapter';
import { makeSignUpTeacherController } from '../main/factories/signup-teacher-controller-factory';
import userRoutes from './user.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to IStudent',
  });
});

routes.use('/user', userRoutes);
routes.post('/signup/teacher', adaptRoute(makeSignUpTeacherController()))

export default routes;
