import { Router } from 'express';
import { adaptRoute } from '../main/adapters/express/express-route.adapter';
import { makeAddCourseController } from '../main/factories/addCourse/add-course-controller-factory';
import { makeClassesByTeacherController } from '../main/factories/class/get-class-by-teacher-factory';
import { makeClassRequestController } from '../main/factories/classRequest/classRequest-controller-factory';
import { makeDeleteAccountController } from '../main/factories/deleteAccount/delete-account-factory';
import { makeEditAccountController } from '../main/factories/editAccount/edit-account-factory';
import { makeEditCourseController } from '../main/factories/editCourse/edit-course-controller-factory';
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

routes.put('/uptade-account', adaptRoute(makeEditAccountController()));

routes.get('/teachers', adaptRoute(makeAllTeachersController()));
routes.post('/teachers/subject', auth(), adaptRoute(makeAddSubjectontroller()));
routes.get(
  '/teacher/classes',
  auth(),
  adaptRoute(makeClassesByTeacherController()),
);

routes.post('/class', auth(), adaptRoute(makeClassRequestController()));

routes.post('/teacher/create-course', adaptRoute(makeAddCourseController()));
routes.put('/teacher/edit-course', adaptRoute(makeEditCourseController()))

export default routes;
