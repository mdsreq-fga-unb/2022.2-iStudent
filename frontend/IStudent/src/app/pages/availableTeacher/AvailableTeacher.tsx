import { useNavigate } from 'react-router-dom';
import { Container, Header, Input, Cards } from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AvTeacherCard, Loading } from '../../shared/components';
import useTeachers from '../../shared/hooks/useTeachers';
import { useEffect, useState } from 'react';

export const AvailableTeacher = () => {
  const navigate = useNavigate();
  const { teachers } = useTeachers();
  const [loading, setLoading] = useState(true);

  const [subjectFilter, setSubjectFilter] = useState('');

  const handleClickHome = () => {
    navigate('/pagina-inicial');
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectFilter(e.target.value);
  }

  useEffect(() => {
    if(teachers.length === 0) {
      loading
    } else {
      setLoading(false)
    }
  } , [teachers])

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
          <input type="text" onChange={onChangeInput} />
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
              ? teacher.subject?.name.toLocaleLowerCase().includes(subjectFilter)
              : true,
          )
          .map(teacher => (
            <AvTeacherCard
              key={teacher.id}
              name={teacher.name}
              course={
                teacher.subject?.name ? teacher.subject.name : 'Sem materia'
              }
              bio={teacher.biography}
              id={parseInt(teacher.id, 10)}
            />
          ))}
          {loading && <Loading />}
      </Cards>
    </Container>
  );
};
