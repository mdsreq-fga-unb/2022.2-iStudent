import prisma from '../../../../database';
import { UserRepository } from '../../../../database/repositories/users';
import { AccountTeacherModel } from '../../../../domain/models/account';
import { addTeacherAccountModel } from '../../../../domain/useCases/addTeacherAccount';
import { editStudentAccountModel } from '../../../../domain/useCases/editAccount/editStudentAccount';

export class PrismaUserRepository implements UserRepository {
  async addTeacher(
    account: addTeacherAccountModel,
  ): Promise<AccountTeacherModel> {
    // REVER ISSO
    await prisma.user.create({
      data: {
        email: account.email,
        password: account.password,
        biography: account.biography,
        name: account.name,
        role: 'TEACHER',
      },
    });
    return;
  }

  async addStudent(
    account: addTeacherAccountModel,
  ): Promise<AccountTeacherModel> {
    // REVER ISSO
    await prisma.user.create({
      data: {
        email: account.email,
        password: account.password,
        biography: account.biography,
        name: account.name,
        role: 'STUDENT',
      },
    });
    return;
  }

  async findOne(email: string): Promise<AccountTeacherModel | null> {
    return await prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        subject: true,
      },
    });
  }

  async updateOne(id: number, account: editStudentAccountModel): Promise<void> {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: account.name,
        email: account.email,
        password: account.password,
        biography: account.biography,
      },
    });
  }

  async deleteOne(id: number): Promise<void> {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }

  async AllTeachers(): Promise<AccountTeacherModel[]> {
    const teachers = await prisma.user.findMany({
      where: {
        role: 'TEACHER',
      },
      include: {
        subject: true,
      },
    });

    return teachers.map(teacher => {
      delete teacher.password;
      return teacher;
    });
  }
}
