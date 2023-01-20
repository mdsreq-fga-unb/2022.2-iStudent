import { CourseModel } from "../../models/course";

export interface GetCourse {
    get(name: string): Promise<CourseModel>
}