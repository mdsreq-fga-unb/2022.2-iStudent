export interface CourseModel {
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