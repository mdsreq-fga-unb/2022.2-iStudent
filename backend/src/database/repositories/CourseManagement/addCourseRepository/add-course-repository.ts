import { CourseModel } from "../../../../domain/models/course";
import { AddCourseModel } from "../../../../domain/useCases/courseManagement/addCourse";

export interface AddCourseRepository {
    addCourse(course: AddCourseModel): Promise<CourseModel>;
}