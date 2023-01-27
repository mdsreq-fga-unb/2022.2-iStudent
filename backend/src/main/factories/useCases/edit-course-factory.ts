import { EditCourseUseCaseRepository } from "../../../database/useCases/CourseManagement/EditCourse/edit-course.use-case.repostory";
import { EditCourse } from "../../../domain/useCases/editCourse/editCourse";
import { CoursePrismaRepository } from "../../../infra/database/prisma/repositories/course-repository";

export const makeEditCoursePrisma = (): EditCourse => {
    const editCoursePrismaRepository = new CoursePrismaRepository();
    return new EditCourseUseCaseRepository(editCoursePrismaRepository);
}