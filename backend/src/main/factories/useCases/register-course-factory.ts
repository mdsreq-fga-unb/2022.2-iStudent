import { UserManagementUseCase } from "../../../database/useCases/userManagementUseCase/user-management.use.case";
import { CourseRegistration } from "../../../domain/useCases/userManagement/courseRegistration";
import { CourseRegistrarionPrismaRepository } from "../../../infra/database/prisma/repositories/course-management-registration-repository";

export const makePrismaRegistrationCourse = (): CourseRegistration => {
    const courseRegistrationPrismaRepository = new CourseRegistrarionPrismaRepository()
    return new UserManagementUseCase(courseRegistrationPrismaRepository)
}