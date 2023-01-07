import { HeaderUser, RequestSchedule } from "../../shared/components";
import { Container, Body } from "./styles";

export const TeacherSchedule = () => {
  return (
    <Container>
      <HeaderUser />
      <Body>
        <h3>Seus pedidos de agendamento</h3>
        <hr />
        <div className="request-list">
          <ul>
            <li>
              <RequestSchedule />
            </li>
            <li>
              <RequestSchedule />
            </li>
            <li>
              <RequestSchedule />
            </li>
          </ul>
        </div>
      </Body>
    </Container>
  );
};
