import { GetCourseUseCaseRepository } from "../../../database/useCases/CourseManagement/getCourse/get-course.use-case.repository";
import { GetCourse } from "../../../domain/useCases/getCourse/getCourse";
import { CoursePrismaRepository } from "../../../infra/database/prisma/repositories/course-repository";

export const makeGetCoursePrismaRepository = (): GetCourse => {
    const getCoursePrismaRepository = new CoursePrismaRepository();
    return new GetCourseUseCaseRepository(getCoursePrismaRepository);
}