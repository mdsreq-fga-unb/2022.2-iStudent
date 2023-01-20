import { CourseModel } from "../../../../domain/models/course";

export interface GetCourseRepository {
    get(name: string): Promise<CourseModel>
}