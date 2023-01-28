import { CoursesCard, HeaderUser } from '../../shared/components'
import {Container, Divisor, FirstBody, OtherCourses, SecondBody} from './styles'
import Carousel from 'react-bootstrap/Carousel';

export const CourseDetail = () => {
  return (
    <Container>
      <HeaderUser />
      <div className='detail-page-title'>
        <h1>Detalhes do Curso</h1>
      </div>
      <Divisor>
        <FirstBody>
          <div className='course-name-container'>
            <h1>Nome do Curso</h1>
          </div>
          <div className='teacher-name-container'>
            <p>Nome do Professor</p>
          </div>
          <div className='info-container'>
            <div className='category-container'>
              <span>Categoria</span>
              <p>Nome da Categoria</p>
            </div>
            <div className='duration-container'>
              <span>Duração</span>
              <p>10h</p>
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
          <div className='price-container'><p>R$90,00</p></div>
          <div className='button-container'>
            <button>Matricular-se Agora!</button>
          </div>
        </SecondBody>
      </Divisor>
      <div className='other-courses-title'>
        <h1>Cursos Relacionados</h1>
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