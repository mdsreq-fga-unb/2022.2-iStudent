import {} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Container, Header, CourseCardArea } from './styles';
import { CoursesCard } from '../../shared/components';

export const CoursesPage = () => {
  const navigate = useNavigate();

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
        <div className="title">
          Estes são os <br /> cursos disponíveis:
        </div>
      </Header>
      <CourseCardArea>
        <ul>
          <li>
            <CoursesCard
              name="Calculo 1"
              teacher="Lucas Caldas"
              raiting={4.6}
              currentPrice={29.9}
              originalPrice={289.0}
            />
          </li>
          <li>
            <CoursesCard
              name="Calculo 1"
              teacher="Lucas Caldas"
              raiting={4.6}
              currentPrice={29.9}
              originalPrice={289.0}
            />
          </li>
          <li>
            <CoursesCard
              name="Calculo 1"
              teacher="Lucas Caldas"
              raiting={4.9}
              currentPrice={29.9}
              originalPrice={289.0}
            />
          </li>
          <li>
            <CoursesCard
              name="Calculo 1"
              teacher="Lucas Caldas"
              raiting={4.4}
              currentPrice={29.9}
              originalPrice={289.0}
            />
          </li>
          <li>
            <CoursesCard
              name="Calculo 1"
              teacher="Lucas Caldas"
              raiting={4.0}
              currentPrice={29.9}
              originalPrice={289.0}
            />
          </li>
        </ul>
      </CourseCardArea>
    </Container>  
  )
}