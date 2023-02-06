import { EnrollCourse } from '../../../types/enrollCourse';
import { api } from '../api/api';

export default async function enrollCourse(data: {
  userId: number;
  courseId: number;
}) {
  try {
    await api.post('/course', data);
  } catch (error) {
    alert('Erro ao matricular no curso, tente novamente!');
  }
}
