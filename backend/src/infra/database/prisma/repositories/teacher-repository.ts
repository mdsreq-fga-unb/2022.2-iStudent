import prisma from '../../../../database';
import { TeacherRepository } from '../../../../database/repositories/users';
import { AccountTeacherModel } from '../../../../domain/models/account';
import { addTeacherAccountModel } from '../../../../domain/useCases/addTeacherAccount';

export class PrismaTeacherRepository implements TeacherRepository {
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

  async findOne(email: string): Promise<AccountTeacherModel | null> {
    return await prisma.user.findFirst({
      where: {
        email: email
      }
    })
  }
}
