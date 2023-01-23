import { ClassesByTeacherRequestController } from '../../../controllers/class/classes-by-teacher-controller';
import { Controller } from '../../../controllers/protocols';
import { ClassesPrismaRepository } from '../../../infra/database/prisma/repositories/class-repository';

export const makeClassesByTeacherController = (): Controller => {
  const controller = new ClassesByTeacherRequestController(
    new ClassesPrismaRepository(),
  );
  return controller;
};
