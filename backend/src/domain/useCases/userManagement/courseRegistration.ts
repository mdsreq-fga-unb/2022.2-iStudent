import { CourseRegistrationModel } from "../../models/courseRegistration";

export type AddCourseRegistrationModel = Omit<CourseRegistrationModel, "id">;

export interface CourseRegistration {
    registerInCourse(data: AddCourseRegistrationModel): Promise<CourseRegistrationModel>
}