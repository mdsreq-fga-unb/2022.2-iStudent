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
            <input type="text" />
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
