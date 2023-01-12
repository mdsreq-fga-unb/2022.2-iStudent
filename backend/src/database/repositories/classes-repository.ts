import { Class } from '@prisma/client';
export interface ClassesRepository {
  findAllByTeacherId(id: number): Promise<Class[]>;
}
