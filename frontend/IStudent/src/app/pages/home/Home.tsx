import { Container, Header, BodyHeader, Category } from "./styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate("/cadastro");
  };

  const handleClickHome = () => {
    navigate("/pagina-inicial");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Header>
        <div className="product-name" onClick={handleClickHome}>
          iStudent
        </div>
        <input type="text" placeholder="Pesquise por qualquer coisa" />
        <div className="button-space">
          <button onClick={handleClickLogin}>Fazer login</button>
          <button onClick={handleClickSignUp}>Cadastrar-se</button>
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
    </Container>
  );
};
