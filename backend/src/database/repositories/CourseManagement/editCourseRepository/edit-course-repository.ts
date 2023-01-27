import { EditCourseModel, NewCourseModel } from "../../../../domain/useCases/editCourse/editCourse";

export interface EditCourseRepository {
    editCourse(id: number, course: EditCourseModel): Promise<NewCourseModel>
}