import { DeleteCourseController } from "../../../controllers/courseManagement/deleteCourse/delete-course-controller"
import { Controller } from "../../../controllers/protocols";
import { makeDeleteCoursePrisma } from "../useCases/delete-course-factory";

export const makeDeleteCourseController = (): Controller => {
    const controller = new DeleteCourseController(makeDeleteCoursePrisma());
    return controller;
}