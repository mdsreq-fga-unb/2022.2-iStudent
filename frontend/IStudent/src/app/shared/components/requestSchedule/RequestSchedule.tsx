import { Container } from './styles';
import Tippy from '@tippyjs/react';
import { DetailCard } from '../index';
import { Button } from '../index'

interface Props {
  name: string;
  type: string;
  time: string;
}

export const RequestSchedule = ({ name, time, type }: Props) => {
  return (
    <Container>
      <div className="content">
        <h5>{name}</h5>
        <div className="button-area">
          <Button className="accept">Aceitar</Button>
          <Button className="refuse">Recusar</Button>
          <Tippy
            content={<DetailCard time={time} type={type} />}
            interactive={true}
            delay={1}
            duration={1}
            placement="right"
          >
            <button className="detail">Detalhes</button>
          </Tippy>
        </div>
      </div>
    </Container>
  );
};
