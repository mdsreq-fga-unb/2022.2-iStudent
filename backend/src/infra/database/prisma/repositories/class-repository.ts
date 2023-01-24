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
        accepted: true,
      },
    });

    return classes as any;
  }

  async acceptOrDenyByTeacherId(id: number, accepted: boolean): Promise<void> {
    await prisma.class.update({
      where: {
        id,
      },
      data: {
        accepted,
      },
    });
  }

  async findAllNotificationsByStudentId(id: number): Promise<Class[]> {
    const classes = await prisma.class.findMany({
      where: {
        studentId: id,
        NOT: {
          accepted: null,
        },
      },
      select: {
        id: true,
        days: true,
        studentId: true,
        time: true,
        createdAt: true,
        type: true,
        teacherId: true,
        accepted: true,
      },
    });

    const result = await Promise.all(
      classes.map(async aula => {
        const teacher = await prisma.user.findFirst({
          where: {
            id: aula.teacherId,
          },
          select: {
            name: true,
            subject: true,
          },
        });
        if (!teacher) return aula;
        return {
          ...aula,
          teacher,
        };
      }),
    );

    return result as any;
  }
}
