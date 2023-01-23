import useNotifications from '../../hooks/useNotifications';
import { Container } from './styles';

export const NotificationTooltip = () => {
  const { classes } = useNotifications();
  return (
    <Container>
      <div>
        <h3>Notificações</h3>
        <hr />
      </div>
      <div className="list-area">
        <ul>
          {classes.map(aula => (
            <li>
              <div>
                <span>{`${aula.teacher.name} ${
                  aula.accepted ? 'aceitou' : 'recusou'
                } o seu pedido de aula ${aula.teacher.subject.name} ${
                  aula.type
                }!`}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
