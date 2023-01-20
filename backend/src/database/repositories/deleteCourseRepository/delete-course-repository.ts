export interface DeleteCourseRepository {
    deleteCourse(id: number): Promise<void>
}