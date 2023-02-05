import { useEffect, useState } from 'react';
import { Course } from '../../types/course';
import allCourses from '../services/teachers/allCourses';

const useCourses = (myCourses?: boolean) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    allCourses({ myCourses }).then(courses => setCourses(courses as Course[]));
  }, []);

  return {
    courses,
    setCourses,
  };
};

export default useCourses;
