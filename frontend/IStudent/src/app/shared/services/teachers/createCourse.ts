import { AddCourse } from '../../../types/course';
import { api } from '../api/api';

export default async function createCourse(course: AddCourse) {
  try {
    await api.post('teacher/course', course);
  } catch (error) {
    alert('Erro ao salvar curso, tente novamente!');
  }
}
