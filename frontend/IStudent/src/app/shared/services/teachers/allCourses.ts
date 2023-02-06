import { Course } from '../../../types/course';
import { api } from '../api/api';

interface Props {
  myCourses: boolean | undefined;
}

export default async function allCourses({ myCourses }: Props) {
  try {
    const { data } = await api.get('teacher/courses', {
      params: {
        myCourses,
      },
    });
    const courses = data.courses as Course[];
    if (!courses) return [] as Course[];
    return courses;
  } catch (error) {
    alert('Erro ao pegar cursos, tente novamente!');
  }
}
