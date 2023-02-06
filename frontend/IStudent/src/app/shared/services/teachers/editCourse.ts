import { Course } from '../../../types/course';
import { api } from '../api/api';

export default async function editCourse(course: Course) {
  try {
    await api.put('teacher/course', course);
  } catch (error) {
    alert('Erro ao editar curso, tente novamente!');
  }
}
