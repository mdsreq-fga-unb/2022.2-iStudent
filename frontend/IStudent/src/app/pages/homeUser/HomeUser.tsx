import {
  Container,
  Header,
  BodyHeader,
  Category,
  CourseArea,
  TeacherArea,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { CoursesCard, TeacherCard, ToolTip } from "../../shared/components";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tippy from "@tippyjs/react";

export const HomeUser = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/pagina-inicial-usuario");
  };

  return (
    <Container>
      <Header>
        <div className="product-name" onClick={handleClickHome}>
          iStudent
        </div>
        <input type="text" placeholder="Pesquise por qualquer coisa" />
        <div className="button-space">
          <ShoppingCartIcon className="shoppingCart-item" />
          <NotificationsIcon className="notification-item" />
          <Tippy content={<ToolTip></ToolTip>} interactive={true}>
            <div className="profile-space"></div>
          </Tippy>
        </div>
      </Header>
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
