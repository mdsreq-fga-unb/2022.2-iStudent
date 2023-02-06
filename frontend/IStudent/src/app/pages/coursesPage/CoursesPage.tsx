import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Container, Header, CourseCardArea } from './styles';
import { CoursesCard } from '../../shared/components';
import useCourses from '../../shared/hooks/useCourses';
import { useUser } from '../../contexts/User';

export const CoursesPage = ({ allCourses }: { allCourses?: boolean }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  let isTeacherOrStudent = user
    ? user.role === 'TEACHER'
      ? true
      : false
    : undefined;

  if (allCourses) isTeacherOrStudent = undefined;
  const { courses } = useCourses(isTeacherOrStudent);

  const handleClickHome = () => {
    navigate('/pagina-inicial');
  };

  return (
    <Container>
      <Header>
        <div className="top">
          <ArrowBackIcon
            fontSize="large"
            className="arrow"
            onClick={handleClickHome}
          />
          <div className="product-name" onClick={handleClickHome}>
            iStudent
          </div>
        </div>
        {!isTeacherOrStudent ? (
          <div className="title">
            Estes são os <br /> cursos disponíveis:
          </div>
        ) : (
          <div className="title">
            Estes são os <br /> seus cursos:
          </div>
        )}
      </Header>
      <CourseCardArea>
        <ul>
          {courses.map(course => (
            <li>
              <CoursesCard
                name={course.name}
                teacher={course.teacher?.name}
                currentPrice={course.price}
              />
            </li>
          ))}
        </ul>
      </CourseCardArea>
    </Container>
  );
};
