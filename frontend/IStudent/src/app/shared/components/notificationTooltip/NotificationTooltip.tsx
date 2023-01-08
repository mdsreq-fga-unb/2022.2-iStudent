import { Container } from "./styles";

export const NotificationTooltip = () => {
  return (
    <Container>
      <div>
        <h3>Notificações</h3>
        <hr />
      </div>
      <div className="list-area">
        <ul>
          <li>
            <div>
              <span>Kleber aceitou o seu pedido de aula!</span>
            </div>
          </li>
          <li>
            <div>
              <span>Kleber aceitou o seu pedido de aula!</span>
            </div>
          </li>
          <li>
            <div>
              <span>Kleber aceitou o seu pedido de aula!</span>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};
