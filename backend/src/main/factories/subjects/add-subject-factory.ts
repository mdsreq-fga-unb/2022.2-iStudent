import { Controller } from '../../../controllers/protocols';
import { AddSubjectController } from '../../../controllers/subjects/create-subject-controller';
import { PrismaSubjectRepository } from '../../../infra/database/prisma/repositories/subject-repository';

export const makeAddSubjectontroller = (): Controller => {
  const controller = new AddSubjectController(new PrismaSubjectRepository());
  return controller;
};
