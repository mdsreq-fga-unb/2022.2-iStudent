import { LoginTeacherController } from '../../controllers/login/teacher/login-teacher-controller';
import { Controller } from '../../controllers/protocols';
import { PrismaTeacherRepository } from '../../infra/database/prisma/repositories/teacher-repository';

export const makeLoginTeacherController = (): Controller => {
  const controller = new LoginTeacherController(
    new PrismaTeacherRepository(),
  );
  return controller;
};
