import { Courses } from './styles';
import { useNavigate } from 'react-router-dom';

type CourseCardProps = {
  name: string;
  teacher: string;
  currentPrice: number;
};

export const CoursesCard = (props: CourseCardProps) => {
  const navigate = useNavigate();

  const handleCourseDetailPage = () => {
    navigate(`/detalhes-curso/${props.name}`);
  };

  return (
    <Courses onClick={handleCourseDetailPage}>
      <div className="course-card">
        <div className="course-img">
          <img src="" alt="" />
        </div>
        <div className="course-name">
          <span>{props.name}</span>
        </div>
        <div className="course-teacher">{props.teacher}</div>

        <div className="course-price">
          <span className="current-price">
            {props.currentPrice?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </div>
    </Courses>
  );
};
