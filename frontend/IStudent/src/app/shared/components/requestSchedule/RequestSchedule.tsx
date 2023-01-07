import { Container } from "./styles";

export const RequestSchedule = () => {
  return (
    <Container>
      <div className="content">
        <h5>Kleber Gomes De Morais</h5>
        <div className="button-area">
          <button className="accept">Aceitar</button>
          <button className="refuse">Recusar</button>
          <button className="detail">Detalhes</button>
        </div>
      </div>
    </Container>
  );
};
