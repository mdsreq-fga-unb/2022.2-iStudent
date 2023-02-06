import { Course } from '../../../types/course';
import { api } from '../api/api';

interface Props {
  myCourses: boolean | undefined;
}

export default async function allCourses({ myCourses }: Props) {
  try {
    if (typeof myCourses === 'boolean' && myCourses === false) {
      const { data } = await api.get('student/courses');
      const courses = data.courses.map(
        (course: any) => course.course,
      ) as Course[];
      console.log('CURSOS: ', courses);
      return courses;
    }
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
