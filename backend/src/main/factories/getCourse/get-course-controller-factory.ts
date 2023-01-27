import { GetCourseController } from "../../../controllers/courseManagement/getCourse/get-course-controller"
import { Controller } from "../../../controllers/protocols";
import { makeGetCoursePrismaRepository } from "../useCases/get-course-factory";
import { makeGetCourseValidation } from "./get-course-validation-factory";

export const makeGetCourseController = (): Controller => {
    const controller = new GetCourseController(makeGetCoursePrismaRepository(), makeGetCourseValidation());
    return controller;
}