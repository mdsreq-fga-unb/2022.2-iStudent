export interface EditCourseModel {
    id: number,
    description: string;
    price: number;
    contents: string[];
    courseRating: number;
    teacherId: number;
    teacherName: string;
    teacherTotalStudents: number;
    teacherTotalHours: number;
}

export interface NewCourseModel {
    id: number;
    name: string;
    description: string;
    price: number;
    contents: string[];
    courseRating: number;
    teacherId: number;
    teacherName: string;
    teacherTotalStudents: number;
    teacherTotalHours: number;
}

export interface EditCourse {
    editCourse (id: number, course: EditCourseModel): Promise<NewCourseModel>
}