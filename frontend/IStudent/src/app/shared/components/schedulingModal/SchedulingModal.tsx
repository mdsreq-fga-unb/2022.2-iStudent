import { useState } from 'react';
import requestClass from '../../services/student/requestClass';
import { Container, Button } from './styles';
import {Button as ButtonLoad} from '../Button'

type Event = {
  event: () => void;
  teacherId: number;
};

export interface Aula {
  type: 'REMOTA' | 'PRESENCIAL';
  days: string[];
  startHour: string;
  teacherId: number;
}

export const SchedulingModal = (props: Event) => {
  const [aula, setAula] = useState<Aula>({
    startHour: '12:00',
    type: 'REMOTA',
    teacherId: props.teacherId,
    days: ['Segunda-Feira'],
  });

  const handleClassSubmit = async () => {
    try {
      await requestClass(aula);
      alert('Aula requisitada com sucesso!');
    } catch (error) {
      alert(error);
    } finally {
      props.event();
    }
  };
  return (
    <Container>
      <div className="close-modal" onClick={props.event}>
        <button>X</button>
      </div>
      <div className="class">
        <h3>Tipo de Aula</h3>
        <div className="class-button">
          <button
            onClick={() =>
              setAula({
                ...aula,
                type: 'REMOTA',
              })
            }
          >
            Remota
          </button>
          <button
            onClick={() =>
              setAula({
                ...aula,
                type: 'PRESENCIAL',
              })
            }
          >
            Presencial
          </button>
        </div>
      </div>
      <div className="hour">
        <h3>Horário</h3>
        <div className="input-hour">
          <div className="week-day">
            <span>Dia da semana</span>
            <select
              required
              onClick={e =>
                setAula({
                  ...aula,
                  days: [e.currentTarget.value],
                })
              }
            >
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
            <input type="time" required/>
          </div>
          <div className="final-hour">
            <span>Até</span>
            <input type="time" required/>
          </div>
        </div>
      </div>
      <Button>
        <ButtonLoad onClick={handleClassSubmit}>Solicitar aula</ButtonLoad>
      </Button>
    </Container>
  );
};
