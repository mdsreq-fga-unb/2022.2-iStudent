import {Container} from './styles'

type Event = {
  event: () => void;
};

export const ClassModal = (props: Event) => {
  return (
    <Container>
      <div className="close-modal" onClick={props.event}>
        <button>X</button>
      </div>
      <div className='name'>
        <input type="text" placeholder='Nome da Aula'/>
      </div>
      <div className='description'>
        <textarea placeholder='Descrição da Aula'/>
      </div>
      <div className='image-space'>
        <span>Imagem Destacada</span>
        <input type="file" />
      </div>
      <div className='url-area'>
        <input type="url" placeholder='URL do vídeo'/>
      </div>
      <div className='button-area'>
        <button>Atualizar Aula</button>
      </div>
    </Container>
  )
}