import { DeleteCourseUseCaseRepository } from "../../../database/useCases/CourseManagement/deleteCourse/delete-course.use-case.repository";
import { DeleteCourse } from "../../../domain/useCases/deleteCourse/deleteCourse";
import { CoursePrismaRepository } from "../../../infra/database/prisma/repositories/course-repository";

export const makeDeleteCoursePrisma = (): DeleteCourse => {
    const deleteCoursePrismaRepository = new CoursePrismaRepository();
    return new DeleteCourseUseCaseRepository(deleteCoursePrismaRepository);
}