import { useNavigate } from 'react-router-dom';
import { Container, Header, Input, Cards } from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AvTeacherCard } from '../../shared/components';
import useTeachers from '../../shared/hooks/useTeachers';
import { useState } from 'react';

export const AvailableTeacher = () => {
  const navigate = useNavigate();
  const { teachers, setTeachers } = useTeachers();

  const [subjectFilter, setSubjectFilter] = useState('');

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
          Estes são os <br /> professores disponíveis:
        </div>
      </Header>
      <Input>
        <div>
          <span>Matéria</span>
          <input type="text" onChange={e => setSubjectFilter(e.target.value)} />
        </div>
        {/* <div>
          <span>Dia da Semana</span>
          <select>
            <option value="Segunda-feira">Segunda-feira</option>
            <option value="Terça-feira">Terça-feira</option>
            <option value="Quarta-feira">Quarta-feira</option>
            <option value="Quinta-feira">Quinta-feira</option>
            <option value="Sexta-feira">Sexta-feira</option>
            <option value="Sabado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </div>
        <div>
          <span>Horário</span>
          <input type="time" />
        </div> */}
      </Input>
      <Cards>
        {teachers
          .filter(teacher =>
            subjectFilter
              ? teacher.subject?.name.includes(subjectFilter)
              : true,
          )
          .map(teacher => (
            <AvTeacherCard
              name={teacher.name}
              course={
                teacher.subject?.name ? teacher.subject.name : 'Sem materia'
              }
              bio={teacher.biography}
              id={parseInt(teacher.id, 10)}
            />
          ))}
      </Cards>
    </Container>
  );
};