import { HeaderUser, RequestSchedule } from '../../shared/components';
import useClasses from '../../shared/hooks/useClasses';
import { Container, Body } from './styles';

export const TeacherSchedule = () => {
  const { classes } = useClasses();
  return (
    <Container>
      <HeaderUser />
      <Body>
        <h3>Seus pedidos de agendamento</h3>
        <hr />
        <div className="request-list">
          <ul>
            {classes.map(aula => (
              <li key={aula.id}>
                <RequestSchedule
                  name={aula.student.name}
                  time={aula.days[0]}
                  type={aula.type}
                  accepted={aula.accepted}
                  id={aula.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </Body>
    </Container>
  );
};
