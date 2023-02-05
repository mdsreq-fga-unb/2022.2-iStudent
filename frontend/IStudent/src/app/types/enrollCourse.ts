export interface EnrollCourse {
  status: 'MATRICULADO' | 'NAO_MATRICULADO';
}

export interface CourseRegistration extends EnrollCourse {
  id: number;
  courseId: number;
  userId: number;
}
