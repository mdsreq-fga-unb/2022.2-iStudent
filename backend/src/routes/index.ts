import { Router } from 'express';
import { adaptRoute } from '../main/adapters/express/express-route.adapter';
import { makeLoginController } from '../main/factories/login-controller-factory';
import { makeMeController } from '../main/factories/me/me-controller-factory';
import { makeSignUpController } from '../main/factories/signup/signup-controller-factory';
import auth from '../main/middlewares/auth';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to IStudent',
  });
});

routes.post('/signup', adaptRoute(makeSignUpController()));
routes.post('/login', adaptRoute(makeLoginController()));

routes.get('/me', auth(), adaptRoute(makeMeController()));

export default routes;
