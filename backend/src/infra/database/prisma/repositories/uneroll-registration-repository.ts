import { UnenrollRegistrationRepository } from '../../../../database/repositories/userManagement/unemroll-registration-repository';
import prisma from '../../../../database';

export class PrismaUnenrollRegistration
  implements UnenrollRegistrationRepository
{
  async unenroll(id: number): Promise<void> {
    await prisma.register.delete({
      where: {
        id,
      },
    });
  }
}
