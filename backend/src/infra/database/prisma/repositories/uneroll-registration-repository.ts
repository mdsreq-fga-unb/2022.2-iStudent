import { UnenrollRegistrationRepository } from '../../../../database/repositories/userManagement/unemroll-registration-repository';
import prisma from '../../../../database';

export class PrismaUnenrollRegistration
  implements UnenrollRegistrationRepository
{
  async isEnrolled(userId: number, courseId: number): Promise<boolean> {
    const isEnrolled = await prisma.register.findUnique({
      where: {
        id: userId + courseId,
      },
    });

    return !!isEnrolled;
  }
  async unenroll(userId: number, courseId: number): Promise<void> {
    if (await this.isEnrolled(userId, courseId)) {
      await prisma.register.delete({
        where: {
          id: userId + courseId,
        },
      });
    }
  }
}
