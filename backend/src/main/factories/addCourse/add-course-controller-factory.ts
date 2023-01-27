import { CourseManagementController } from "../../../controllers/courseManagement/addCourse/course-management-controller"
import { Controller } from "../../../controllers/protocols";
import { makeAddCoursePrisma } from "../useCases/add-course-factory"
import { makeAddCourseValidation } from "./add-course-validation-factory";

export const makeAddCourseController = (): Controller => {
    const controller = new CourseManagementController(makeAddCoursePrisma(), makeAddCourseValidation())
    return controller;
}