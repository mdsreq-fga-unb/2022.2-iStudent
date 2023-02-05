import { Course } from '../../../types/course';
import { api } from '../api/api';

export default async function deleteCourse(courseId: number) {
  try {
    await api.delete('teacher/course', {
      data: {
        id: courseId,
      },
    });
  } catch (error) {
    alert('Erro ao deletar curso, tente novamente!');
  }
}
