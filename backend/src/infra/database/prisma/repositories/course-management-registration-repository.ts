import { UserManagementRepository } from '../../../../database/repositories/userManagement/user-management-repository';
import { CourseRegistrationModel } from '../../../../domain/models/courseRegistration';
import { AddCourseRegistrationModel } from '../../../../domain/useCases/userManagement/courseRegistration';
import prisma from '../../../../database';

export class CourseRegistrarionPrismaRepository
  implements UserManagementRepository
{
  async registerInCourse(
    data: AddCourseRegistrationModel,
  ): Promise<CourseRegistrationModel> {
    const saveRegister = await prisma.register.create({
      data: {
        courseId: data.courseId,
        userId: data.userId,
      },
    });

    return saveRegister;
  }
}
