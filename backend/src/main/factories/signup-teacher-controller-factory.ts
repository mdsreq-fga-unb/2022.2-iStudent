import { Controller } from '../../controllers/protocols';
import { SignUpTeacherController } from '../../controllers/signup/teacher/signup-teacher-controller';
import { PrismaTeacherRepository } from '../../infra/database/prisma/repositories/teacher-repository';
import { makeSignUpTeacherValidation } from './signup-teacher-validation-factory';

export const makeSignUpTeacherController = (): Controller => {
  const controller = new SignUpTeacherController(
    new PrismaTeacherRepository(),
    makeSignUpTeacherValidation(),
  );
  return controller;
};
