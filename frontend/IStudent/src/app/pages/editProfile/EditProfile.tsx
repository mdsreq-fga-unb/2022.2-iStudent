import { Body, Container, DeleteAccount } from './styles';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/User';
import deleteAccount from '../../shared/services/user/deleteAccount';
import { HeaderUser, Button, ConfirmationModal } from '../../shared/components';
import { useState } from 'react';
import saveSubject from '../../shared/services/teachers/saveSubject';
import Modal from 'react-modal';

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
    maxHeight: '300px',
    maxWidth: '400px',
    margin: 'auto',
    fontFamily: 'Poppins',
  },
};

Modal.setAppElement('#root');

export const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser, changeToken } = useUser();
  const [modalIsOpen, setIsOpen] = useState(false);

  const [subject, setSubject] = useState('');
  const [photo, setPhoto] = useState('');

  const handleDeleteAccount = async () => {
    await deleteAccount();
    alert('Conta deletada com sucesso!');
    setUser(null);
    changeToken('');
    navigate('/');
  };

  const handleSaveSubject = async () => {
    await saveSubject(subject, user?.subject?.id || 0);
    alert('Materia salva com sucesso!');
  };

  function handleChangePhoto(e: any) {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  }

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <HeaderUser />
      <Body>
        <div className="my-data-title">
          <h1>Seus Dados</h1>
        </div>
        <div className="my-data">
          <div className="photo-input">
            <input
              type="file"
              accept="image/*"
              id="picture-input"
              onChange={handleChangePhoto}
            />

            {photo ? (
              <label htmlFor="picture-input" className="photo">
                <img src={photo} />
              </label>
            ) : (
              <label htmlFor="picture-input">
                <span className="picture-image">Sua Foto</span>
              </label>
            )}
          </div>
          <div className="my-password">
            <p>Nome</p>
            <input type="text" placeholder={user?.name} />
          </div>
          <div className="my-password">
            <div className="password">
              <p>E-mail</p>
              <input type="email" placeholder={user?.email} />
            </div>
          </div>
          <div className="my-password">
            <div className="password">
              <p>Biografia</p>
              <textarea placeholder='Sua Bio'/>
            </div>
          </div>
        </div>  
        <Button>Salvar</Button>

        {user?.role === 'TEACHER' && (
          <>
            <div className="my-data-title">
              <h1>Escolha sua matéria</h1>
            </div>
            <div className="my-data">
              <div className="email">
                <p>Matéria</p>
                <input
                  type="text"
                  placeholder={user?.subject?.name}
                  onChange={e => setSubject(e.target.value)}
                />
              </div>
              <div className="email">
                <p>Sua Hora/Aula</p>
                <input type="number" placeholder='Valor por hora (em Reais)'/>
              </div>
            </div>
            <Button onClick={handleSaveSubject}>Salvar</Button>
          </>
        )}
      </Body>
      <DeleteAccount>
        <Button onClick={openModal}>Excluir minha conta</Button>
      </DeleteAccount>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ConfirmationModal eventClose={closeModal} eventConfirm={handleDeleteAccount}/>
      </Modal>
    </Container>
  );
};
