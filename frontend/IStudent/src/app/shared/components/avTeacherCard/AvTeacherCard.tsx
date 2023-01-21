import { Container, Header, Body, Button } from './styles';
import { useState } from 'react';
import Modal from 'react-modal';
import { SchedulingModal } from '../schedulingModal/SchedulingModal';
import { useUser } from '../../../contexts/User';
import { useNavigate } from 'react-router-dom';
import { Button as ButtonP} from '../index'

type CardProps = {
  name: string;
  course: string;
  bio: string;
  id: number;
};

const customStyles: Object = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  content: {
    position: 'absolute',
    inset: '40px',
    border: '1px solid',
    backgroundColor: '#fff',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    maxHeight: '430px',
    maxWidth: '500px',
    margin: 'auto',
    fontFamily: 'Poppins',
  },
};

Modal.setAppElement('#root');

export const AvTeacherCard = (props: CardProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [teacherId, setTeacherId] = useState(0);

  const navigate = useNavigate();
  const { user } = useUser();

  const handleLoginPage = () => {
    navigate('/login');
  };

  const openModal = () => {
    setIsOpen(true);
    setTeacherId(props.id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Header>
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="teacher-name">
          <h3>{props.name}</h3>
          <span>{props.course}</span>
        </div>
      </Header>
      <Body>
        <div>
          <h5>{props.bio}</h5>
        </div>
      </Body>
      <Button>
        {user ? (
          <ButtonP id="modal" onClick={openModal}>
            Solicitar Aula
          </ButtonP>
        ) : (
          <ButtonP id="modal" onClick={handleLoginPage}>
            Solicitar Aula
          </ButtonP>
        )}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <SchedulingModal event={closeModal} teacherId={teacherId} />
        </Modal>
      </Button>
    </Container>
  );
};
