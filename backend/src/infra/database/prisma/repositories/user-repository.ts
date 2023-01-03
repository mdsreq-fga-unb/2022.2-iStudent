import prisma from '../../../../database';
import { UserRepository } from '../../../../database/repositories/users';
import { AccountTeacherModel } from '../../../../domain/models/account';
import { addTeacherAccountModel } from '../../../../domain/useCases/addTeacherAccount';

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
        role: 'TEACHER'
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
        role: 'STUDENT'
      },
    });
    return;
  }

  async findOne(email: string): Promise<AccountTeacherModel | null> {
    return await prisma.user.findFirst({
      where: {
        email: email
      }
    })
  }
}
