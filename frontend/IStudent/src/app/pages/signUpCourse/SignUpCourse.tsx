import { useState } from 'react';
import { HeaderUser, Button, ClassModal } from '../../shared/components'
import {Container, FirstBody, SecondBody} from './styles'
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteIcon from '@mui/icons-material/Delete';
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
    maxHeight: '500px',
    maxWidth: '600px',
    margin: 'auto',
    fontFamily: 'Poppins',
  },
};

Modal.setAppElement('#root');

export const SignUpCourse = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showModule, setShowModule] = useState('none');
  const [showAddModule, setShowAddModule] = useState('none');

  const openModuleName = () => {
    setShowModule('flex')
  }

  const openAddModule = () => {
    setShowAddModule('flex')
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
      <div className='columns-space'>
        <FirstBody>
          <div className="course-title">
            <h1>Cadastrar Curso</h1>
          </div>
          <div className="course-basic-info">
            <div className="course-name">
              <p>Nome do curso</p>
              <input type="text" name="name" />
            </div>
            <div className="course-description">
              <p>Descrição</p>
              <textarea />
            </div>
          </div>
          <div className="constructor-title">
            <h1>Construtor do Curso</h1>
          </div>
          <div className="constructor-area">
            <div className="add-module-area">
              <span>Adicione um módulo para montar seu curso</span>
              <button onClick={openModuleName}>Adicionar Módulo</button>
              <div className='module-area' style={{display: `${showModule}`}}>
                <span>Nome do Módulo</span>
                <input type="text" />
                <div className='add-module'>
                  <button onClick={openAddModule}>Adicionar</button>
                </div>
              </div>
              <div className='existing-modules' style={{display: `${showAddModule}`}}>
                <div>
                  <ul>
                    <li>
                      <div className='module-space'>
                        <div className='module-name'>
                          <p>Modulo 1</p>
                          <DeleteIcon style={{cursor: 'pointer'}}/>
                        </div>
                        <div className='add-class'>
                          <button onClick={openModal}>+ Aula</button>
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                          >
                            <ClassModal event={closeModal}/>
                          </Modal>
                        </div>
                        <div className='added-classes'>
                          <ul>
                            <li>
                              <div className='class-item'>
                                <p>Aula 1</p>
                                <DeleteIcon style={{cursor: 'pointer'}}/>
                              </div>
                            </li>
                            <li>
                              <div className='class-item'>
                                <p>Aula 2</p>
                                <DeleteIcon style={{cursor: 'pointer'}}/>
                              </div>
                            </li>
                            <li>
                              <div className='class-item'>
                                <p>Aula 3</p>
                                <DeleteIcon style={{cursor: 'pointer'}}/>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='module-name'>
                        <p>Modulo 2</p>
                        <DeleteIcon style={{cursor: 'pointer'}}/>
                      </div>
                    </li>
                    <li>
                      <div className='module-name'>
                        <p>Modulo 3</p>
                        <DeleteIcon style={{cursor: 'pointer'}}/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>  
          <div className="additional-data-title">
            <h1>Dados Adicionais</h1>
          </div>
          <div className="course-duration-area">
            <span>Duração total do curso</span>
            <div>
              <input type="number" placeholder='HH'/>
              <input type="number" placeholder='MM'/>
              <input type="number" placeholder='SS'/>
            </div>
          </div>
          <div className='benefits-area'>
            <span>Benefícios do Curso</span>
            <textarea placeholder='Liste um por linha'/>
          </div>
          <div className='benefits-area'>
            <span>Requisitos/Instruções</span>
            <textarea placeholder='Liste um por linha'/>
          </div>
          <div className='benefits-area'>
            <span>Público Alvo</span>
            <textarea placeholder='Liste um por linha'/>
          </div>
          <div className='benefits-area'>
            <span>Materiais Inclusos</span>
            <textarea placeholder='Liste um por linha'/>
          </div>
          <div className='video-area'>
            <span>Vídeo de Introdução</span>
            <input type='url' placeholder='URL do Vídeo'/>
          </div>
        </FirstBody>
        <SecondBody>
          <div className='publish'>
            <Button className='delete-button'>Excluir</Button>
            <Button className='publish-button'>Publicar</Button>
          </div>
          <div className='categories'>
            <span>Categoria do Curso</span>
            <input type="text" placeholder='Digite a categoria'/>
            <button>Adicionar</button>
            <div className='categories-add'>
              <p>Nome da Categoria</p>
              <DeleteIcon style={{cursor: 'pointer'}}/>
            </div>
          </div>
          <div className='course-image-area'>
            <span>Imagem Destaque</span>
            <input type="file" />
          </div>
          <div className="alert-area">
            <ErrorOutlineIcon style={{ color: '#000080' }} />
            <div className="alert-text">
              <p>Importante!</p>
              <p>Preencha todas as informações</p>
            </div>
          </div>
        </SecondBody>
      </div>
    </Container>
  )
}