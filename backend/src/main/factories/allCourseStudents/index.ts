import { AllStudentCoursesController } from '../../../controllers/courseManagement/allCoursesStudents';
import { Controller } from '../../../controllers/protocols';

export const makeAllStudentCoursesController = (): Controller => {
  const controller = new AllStudentCoursesController();
  return controller;
};
