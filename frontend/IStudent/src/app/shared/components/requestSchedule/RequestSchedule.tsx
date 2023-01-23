import { Container } from './styles';
import Tippy from '@tippyjs/react';
import { DetailCard } from '../index';
import acceptOrDenyClass from '../../services/teachers/acceptOrDenyClass';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

interface Props {
  id: number;
  name: string;
  type: string;
  time: string;
  accepted: boolean | null;
}

export const RequestSchedule = ({ name, time, type, accepted, id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState(accepted);

  async function handleClass(accept: boolean) {
    try {
      setIsLoading(true);
      await acceptOrDenyClass(accept, id);
      setIsLoading(false);
      alert(`Aula ${accept ? 'aceita' : 'recusada'} com sucesso!`);
      setIsAccepted(accept);
    } catch (error) {
      setIsLoading(false);
      alert('Erro ao salvar classe, tente novamente!');
    }
  }
  return (
    <Container>
      <div className="content">
        <h5>{name}</h5>
        <div className="button-area">
          {isAccepted === null ? (
            <>
              {isLoading ? (
                <CircularProgress color="inherit" size={30} />
              ) : (
                <>
                  <button className="accept" onClick={() => handleClass(true)}>
                    Aceitar
                  </button>
                  <button className="refuse" onClick={() => handleClass(false)}>
                    Recusar
                  </button>
                </>
              )}
            </>
          ) : isAccepted ? (
            <div className="accepted">Aceito</div>
          ) : (
            <div className="refused">Recusado</div>
          )}
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
