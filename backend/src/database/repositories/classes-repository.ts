import { Class } from '@prisma/client';
export interface ClassesRepository {
  findAllByTeacherId(id: number): Promise<Class[]>;
  acceptOrDenyByTeacherId(id: number, accepted: boolean): Promise<void>;
  findAllNotificationsByStudentId(id: number): Promise<Class[]>;
}
