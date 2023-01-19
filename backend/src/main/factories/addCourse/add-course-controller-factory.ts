import { CourseManagementController } from "../../../controllers/courseManagement/course-management-controller"
import { Controller } from "../../../controllers/protocols";
import { makeAddCoursePrisma } from "../useCases/add-course-factory"

export const makeAddCourseController = (): Controller => {
    const controller = new CourseManagementController(makeAddCoursePrisma())
    return controller;
}