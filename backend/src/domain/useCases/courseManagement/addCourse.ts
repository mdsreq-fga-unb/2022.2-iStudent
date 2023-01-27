import { CourseModel } from '../../models/course';

export interface AddCourseModel {
  name: string;
  description: string;
  price: number;
  contents: string[];
  teacherId: number;
  totalHours: number;
}

export interface AddCourse {
  addCourse(course: AddCourseModel): Promise<CourseModel>;
}
