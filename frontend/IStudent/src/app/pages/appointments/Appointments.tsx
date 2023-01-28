import {} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Container, Header, TeacherCardArea } from './styles';
import { TeacherCard } from '../../shared/components';

export const Appointments = () => {
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
          Estes são seus<br /> professores agendados:
        </div>
      </Header>
      <TeacherCardArea>
      <ul>
        <li>
          <TeacherCard
            name="Lucas Caldas"
            courseName="Matemática"
            valueHour={50}
            rating={5}
          />
        </li>
        <li>
          <TeacherCard
            name="Lucas Caldas"
            courseName="Matemática"
            valueHour={50}
            rating={5}
          />
        </li>
        <li>
          <TeacherCard
            name="Lucas Caldas"
            courseName="Matemática"
            valueHour={50}
            rating={5}
          />
        </li>
        <li>
          <TeacherCard
            name="Lucas Caldas"
            courseName="Matemática"
            valueHour={50}
            rating={5}
          />
        </li>
        <li>
          <TeacherCard
            name="Lucas Caldas"
            courseName="Matemática"
            valueHour={50}
            rating={5}
          />
        </li>
      </ul>
      </TeacherCardArea>
    </Container>  
  )
}