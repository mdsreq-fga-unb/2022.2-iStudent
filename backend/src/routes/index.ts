import { Router } from 'express';
import { adaptRoute } from '../main/adapters/express/express-route.adapter';
import { makeDeleteAccountController } from '../main/factories/deleteAccount/delete-account-factory';
import { makeEditAccountController } from '../main/factories/editAccount/edit-account-factory';
import { makeLoginController } from '../main/factories/login-controller-factory';
import { makeMeController } from '../main/factories/me/me-controller-factory';
import { makeSignUpController } from '../main/factories/signup/signup-controller-factory';
import { makeAddSubjectontroller } from '../main/factories/subjects/add-subject-factory';
import { makeAllTeachersController } from '../main/factories/teachers/all-teachers-factory';
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
routes.delete('/me', auth(), adaptRoute(makeDeleteAccountController()));

routes.get('/uptade-account', adaptRoute(makeEditAccountController()));

routes.get('/teachers', adaptRoute(makeAllTeachersController()));
routes.post('/teachers/subject', auth(), adaptRoute(makeAddSubjectontroller()));

export default routes;
