import { Container } from './styles';
import { Button } from '../Button';

type Event = {
  eventClose: () => void;
  eventConfirm: () => void;
};

export const ConfirmationModal = (props: Event) => {
  return (
    <Container>
      <div className="close-modal" onClick={props.eventClose}>
        <button>X</button>
      </div>
      <div className='text'>
        <p>Tem certeza que deseja excluir sua conta?</p>
      </div>
      <div className='button-area'>
        <Button className='cancel-button' onClick={props.eventClose}>Cancelar</Button>
        <Button className='confirm-button' onClick={props.eventConfirm}>Confirmar</Button>
      </div>
    </Container>
  )
}