import {
  Container,
  BodyHeader,
  Category,
  CourseArea,
  TeacherArea,
} from "./styles";
import {
  CoursesCard,
  HeaderHome,
  HeaderUser,
  TeacherCard,
} from "../../shared/components";
import { useUser } from "../../contexts/User";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleAvblTeacherPage = () => {
    navigate("/professores-disponiveis");
  };

  return (
    <Container>
      {user ? <HeaderUser /> : <HeaderHome />}
      <BodyHeader>
        <div className="phrase-area">
          <h1>O aprendizado é conhecimento, e conhecimento é liberdade</h1>
          <span>Comece conosco!</span>
        </div>
        <img src="../public/homeImage.svg" alt="" />
      </BodyHeader>
      <Category>
        <h3>Principais Categorias</h3>
        <div className="categories-list">
          <ul>
            <li onClick={handleAvblTeacherPage}>
              <div>
                <div className="category-card">
                  <img src="../public/part.svg" alt="" />
                </div>
                <span>Aulas Particulares</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src="../public/math.svg" alt="" />
                </div>
                <span>Matemática</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src="../public/his.svg" alt="" />
                </div>
                <span>História</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src="../public/geo.svg" alt="" />
                </div>
                <span>Geografia</span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <div className="category-card">
                  <img src="../public/port.svg" alt="" />
                </div>
                <span>Português</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src="../public/physic.svg" alt="" />
                </div>
                <span>Física</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src="../public/chemic.svg" alt="" />
                </div>
                <span>Química</span>
              </div>
            </li>
            <li>
              <div>
                <div className="category-card">
                  <img src="../public/leng.svg" alt="" />
                </div>
                <span>Língua Estrangeira</span>
              </div>
            </li>
          </ul>
        </div>
      </Category>
      <CourseArea>
        <h3>Cursos mais procurados</h3>
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
      </CourseArea>
      <TeacherArea>
        <h3>Professores mais procurados</h3>
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
      </TeacherArea>
      <footer>Sobre o iStudent</footer>
    </Container>
  );
};
