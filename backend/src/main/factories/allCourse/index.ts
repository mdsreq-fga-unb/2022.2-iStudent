import { AllCourseController } from '../../../controllers/courseManagement/allCourses';
import { Controller } from '../../../controllers/protocols';

export const makeAllCourseController = (): Controller => {
  const controller = new AllCourseController();
  return controller;
};
