import { CourseModel } from "../../models/course";

export interface AddCourseModel {
    name: string;
    description: string;
    price: number;
    contents: string[];
    courseRating: number;
    teacherId: string;
    teacherName: string;
    teacherTotalStudents: number;
    teacherTotalHours: number;
}

export interface AddCourse {
    addCourse(course: AddCourseModel): Promise<CourseModel>;
}