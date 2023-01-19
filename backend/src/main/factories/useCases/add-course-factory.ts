import { AddCourseUseCaseRepository } from "../../../database/useCases/add-course.use-case";
import { AddCourse } from "../../../domain/useCases/courseManagement/addCourse";
import { CoursePrismaRepository } from "../../../infra/database/prisma/repositories/course-repository";

export const makeAddCoursePrisma = (): AddCourse => {
    const addCOursePrismaRepository = new CoursePrismaRepository();
    return new AddCourseUseCaseRepository(addCOursePrismaRepository);
}