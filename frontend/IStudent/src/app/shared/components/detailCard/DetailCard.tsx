import { Container } from './styles';
interface Props {
  type: string;
  time: string;
}

export const DetailCard = ({ time, type }: Props) => {
  return (
    <Container>
      <div className="discipline">
        <h4>Disciplina:</h4>
        <span>Matemática</span>
      </div>
      <hr />
      <div className="week-day">
        <h4>Dia da Semana:</h4>
        <span>{time}</span>
      </div>
      <hr />
      <div className="hour">
        <h4>Tipo:</h4>
        <span>{type}</span>
      </div>
    </Container>
  );
};
