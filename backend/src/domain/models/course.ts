export interface CourseModel {
  id: number;
  name: string;
  description: string;
  price: number;
  contents: string[];
  teacherId: number;
  totalStudents: number;
  totalHours: number;
}
