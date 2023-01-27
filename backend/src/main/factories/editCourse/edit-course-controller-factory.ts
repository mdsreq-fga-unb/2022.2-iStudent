import { EditCourseController } from "../../../controllers/courseManagement/editCourse/edit-course-controller";
import { Controller } from "../../../controllers/protocols";
import { makeEditCoursePrisma } from "../useCases/edit-course-factory";
import { makeEditCourseValidation } from "./edit-course-validation-factory";

export const makeEditCourseController = (): Controller => {
    const controller = new EditCourseController(makeEditCoursePrisma(), makeEditCourseValidation())
    return controller;
}