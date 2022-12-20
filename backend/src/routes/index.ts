import { Router } from 'express';
import userRoutes from './user.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to IStudent',
  });
});

routes.use('/user', userRoutes);

export default routes;
