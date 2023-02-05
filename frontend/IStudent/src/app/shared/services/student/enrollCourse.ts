import { EnrollCourse } from '../../../types/enrollCourse';
import { api } from '../api/api';

export default async function enrollCourse(registration: EnrollCourse) {
  try {
    await api.post('/course', registration);
  } catch (error) {
    alert('Erro ao matricular no curso, tente novamente!');
  }
}
