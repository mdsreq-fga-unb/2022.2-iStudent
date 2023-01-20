export interface DeleteCourse {
    deleteCourse(id: number): Promise<void>;
}