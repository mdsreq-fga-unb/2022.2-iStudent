import prisma from '../../../../database';
import { Class } from '@prisma/client';
import { ClassesRepository } from '../../../../database/repositories/classes-repository';

export class ClassesPrismaRepository implements ClassesRepository {
  async findAllByTeacherId(id: number): Promise<Class[]> {
    const classes = await prisma.class.findMany({
      where: {
        teacherId: id,
      },
      select: {
        student: {
          select: {
            name: true,
          },
        },
        id: true,
        days: true,
        studentId: true,
        time: true,
        createdAt: true,
        type: true,
        teacherId: true,
      },
    });

    return classes as any;
  }
}
