import { Container, Button } from "./styles";

type Event = {
  event: () => void;
};

export const SchedulingModal = (props: Event) => {
  return (
    <Container>
      <div className="close-modal" onClick={props.event}>
        <button>X</button>
      </div>
      <div className="class">
        <h3>Tipo de Aula</h3>
        <div className="class-button">
          <button>Remota</button>
          <button>Presencial</button>
        </div>
      </div>
      <div className="hour">
        <h3>Horário</h3>
        <div className="input-hour">
          <div className="week-day">
            <span>Dia da semana</span>
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
          <div className="initial-hour">
            <span>Das</span>
            <input type="time" />
          </div>
          <div className="final-hour">
            <span>Até</span>
            <input type="time" />
          </div>
        </div>
      </div>
      <Button>
        <button>Solicitar aula</button>
      </Button>
    </Container>
  );
};
