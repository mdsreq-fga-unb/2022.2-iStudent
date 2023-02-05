import { Course } from '../../../types/course';
import { api } from '../api/api';

interface Props {
  name: string;
}

export default async function getCourse({ name }: Props) {
  try {
    const { data } = await api.get('teacher/course', {
      params: {
        name,
      },
    });
    const course = data.course as Course;
    if (!course) return {} as Course;
    return course;
  } catch (error) {
    alert('Erro ao pegar curso, tente novamente!');
  }
}
