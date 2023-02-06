import {
  Container,
  BodyHeader,
  Category,
  CourseArea,
  TeacherArea,
} from './styles';
import {
  CoursesCard,
  HeaderHome,
  HeaderUser,
  TeacherCard,
} from '../../shared/components';
import { useUser } from '../../contexts/User';
import { useNavigate } from 'react-router-dom';
import geoImage from '../../shared/assets/geoImage/geo.svg';
import hisImage from '../../shared/assets/hisImage/his.svg';
import portImage from '../../shared/assets/portImage/port.svg';
import physicImage from '../../shared/assets/physicImage/physic.svg';
import lengImage from '../../shared/assets/lengImage/leng.svg';
import homeImage from '../../shared/assets/homeImage/homeImage.svg';
import mathImage from '../../shared/assets/mathImage/math.svg';
import partImage from '../../shared/assets/partImage/part.svg';
import chemicImage from '../../shared/assets/chemicImage/chemic.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleAvblTeacherPage = () => {
    navigate('/professores-disponiveis');
  };

  const handleAboutUsPage = () => {
    navigate('/sobre');
  };

  return (
    <Container>
      {user ? <HeaderUser /> : <HeaderHome />}
      <BodyHeader>
        <div className="phrase-area">
          <h1>O aprendizado é conhecimento, e conhecimento é liberdade</h1>
          <span>Comece conosco!</span>
        </div>
        <img src={homeImage} alt="" />
      </BodyHeader>
      <Category>
        <h3>Principais Categorias</h3>
        <div className="categories-list">
          <ul>
            <li onClick={handleAvblTeacherPage}>
              <div>
                <div className="category-card">
                  <img src={partImage} alt="" />
                </div>
                <span>Aulas Particulares</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src={mathImage} alt="" />
                </div>
                <span>Matemática</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src={hisImage} alt="" />
                </div>
                <span>História</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src={geoImage} alt="" />
                </div>
                <span>Geografia</span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <div className="category-card">
                  <img src={portImage} alt="" />
                </div>
                <span>Português</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src={physicImage} alt="" />
                </div>
                <span>Física</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src={chemicImage} alt="" />
                </div>
                <span>Química</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src={lengImage} alt="" />
                </div>
                <span>Língua Estrangeira</span>
              </div>
            </li>
          </ul>
        </div>
      </Category>
      <CourseArea>
        <h3>Cursos mais procurados</h3>
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
      </CourseArea>
      <TeacherArea>
        <h3>Professores mais procurados</h3>
        <Carousel>
          <Carousel.Item>
            <ul>
              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>

              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>
              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>
              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul>
              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>

              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>
              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>
              <li>
                <TeacherCard
                  name="Lucas Caldas"
                  courseName="Matemática"
                  valueHour={50}
                  rating={5}
                />
              </li>
            </ul>
          </Carousel.Item>
        </Carousel>
      </TeacherArea>
      <footer onClick={handleAboutUsPage}>
        <p>Sobre o iStudent</p>
      </footer>
    </Container>
  );
};
