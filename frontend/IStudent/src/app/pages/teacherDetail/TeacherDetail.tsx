import { CoursesCard, HeaderUser, SchedulingModal } from '../../shared/components'
import {Container, Divisor, FirstBody, OtherCourses, SecondBody} from './styles'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Modal from 'react-modal';
import useTeachers from '../../shared/hooks/useTeachers';

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

export const TeacherDetail = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [teacherId, setTeacherId] = useState(0);
  // const { teachers } = useTeachers();

  const openModal = () => {
    setIsOpen(true);
    // setTeacherId(parseInt(teachers.id, 10));
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <HeaderUser />
      <div className='detail-page-title'>
        <h1>Detalhes do Professor</h1>
      </div>
      <Divisor>
        <FirstBody>
          <div className='course-name-container'>
            <h1>Lucas Caldas</h1>
          </div>
          <div className='teacher-name-container'>
            <p>Instrutor de React/React-Native</p>
          </div>
          <div className='info-container'>
            <div className='category-container'>
              <span>Total de Alunos</span>
              <p>2.600</p>
            </div>
            <div className='duration-container'>
              <span>Avaliação</span>
              <p>5.0</p>
            </div>
          </div>
          <div className='description-container'>
            <span>Descrição</span>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat officiis incidunt magni voluptate praesentium error accusamus animi ad reprehenderit nihil deserunt perferendis, quidem, non tempora obcaecati dolor vel magnam.</p>
            </div>
          </div>
        </FirstBody>
        <SecondBody>
          <div className='image-container'></div>
          <div className='price-container'>
            <p>R$90,00</p>
            <span>(por hora/aula)</span>
          </div>
          <div className='button-container'>
            <button onClick={openModal}>Solicitar Aula</button>
          </div>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <SchedulingModal event={closeModal} teacherId={teacherId} />
        </Modal>
        </SecondBody>
      </Divisor>
      <div className='other-courses-title'>
        <h1>Cursos de Lucas Caldas</h1>
      </div>
      <OtherCourses>
        <Carousel>
            <Carousel.Item>
              <ul>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.6}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.6}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.9}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.4}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.0}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
              </ul>
            </Carousel.Item>
            <Carousel.Item>
              <ul>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.6}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.6}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.9}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.4}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
                <li>
                  <CoursesCard
                    name="Calculo 1"
                    teacher="Lucas Caldas"
                    raiting={4.0}
                    currentPrice={29.9}
                    originalPrice={289.0}
                  />
                </li>
              </ul>
            </Carousel.Item>
          </Carousel>
      </OtherCourses>
    </Container>
  )
}