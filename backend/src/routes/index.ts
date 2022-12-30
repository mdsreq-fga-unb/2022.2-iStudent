import { Router } from 'express';
import { adaptRoute } from '../main/adapters/express/express-route.adapter';
import { makeLoginTeacherController } from '../main/factories/login-teacher-controller-factory';
import { makeSignUpStudentController } from '../main/factories/signup-student/signup-student-controller-factory';
import { makeSignUpTeacherController } from '../main/factories/signup-teacher-controller-factory';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to IStudent',
  });
});

routes.post('/signup/teacher', adaptRoute(makeSignUpTeacherController()));
routes.post('/signup/student', adaptRoute(makeSignUpStudentController()))

routes.post('/login/teacher', adaptRoute(makeLoginTeacherController()));

export default routes;
