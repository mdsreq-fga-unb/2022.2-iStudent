import { ClassesByTeacherRequestController } from '../../../controllers/class/classes-by-teacher-controller';
import { AddClassRequestController } from '../../../controllers/classRequest/add-class-request-controller';
import { Controller } from '../../../controllers/protocols';
import { ClassesPrismaRepository } from '../../../infra/database/prisma/repositories/class-repository';
import { makePrismaClassRequest } from '../useCases/add-class-request-factory';

export const makeClassesByTeacherController = (): Controller => {
  const controller = new ClassesByTeacherRequestController(
    new ClassesPrismaRepository(),
  );
  return controller;
};
