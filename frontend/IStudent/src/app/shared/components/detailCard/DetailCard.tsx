import { Container } from "./styles";

export const DetailCard = () => {
  return (
    <Container>
      <div className="discipline">
        <h4>Disciplina:</h4>
        <span>Matemática</span>
      </div>
      <hr />
      <div className="week-day">
        <h4>Dia da Semana:</h4>
        <span>Segunda-feira</span>
      </div>
      <hr />
      <div className="hour">
        <h4>Horário:</h4>
        <span>14:00 às 15:00</span>
      </div>
    </Container>
  );
};
