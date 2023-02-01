import { CourseRegistrationModel } from "../../../domain/models/courseRegistration";
import { AddCourseRegistrationModel } from "../../../domain/useCases/userManagement/courseRegistration";

export interface UserManagementRepository {
    registerInCourse(data: AddCourseRegistrationModel): Promise<CourseRegistrationModel>
}