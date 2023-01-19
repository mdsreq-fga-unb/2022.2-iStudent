export interface CourseModel {
    id: string;
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