import { Container, Header, Body } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/pagina-inicial");
  };

  return (
    <Container>
      <Header>
        <div className="top">
          <ArrowBackIcon
            fontSize="large"
            className="arrow"
            onClick={handleClickHome}
          />
          <div className="product-name" onClick={handleClickHome}>
            iStudent
          </div>
        </div>
        <div className="title">Login</div>
      </Header>
      <Body>
        <div className="my-data-title">
          <h1>Seus Dados</h1>
        </div>
        <div className="my-data">
          <div className="email">
            <p>E-mail</p>
            <input type="email" />
          </div>
        </div>
        <div className="my-password">
          <div className="password">
            <p>Senha</p>
            <input type="password" />
          </div>
        </div>
        <div className="final">
          <div className="alert-area">
            <ErrorOutlineIcon style={{ color: "#000080" }} />
            <div className="alert-text">
              <p>Importante!</p>
              <p>Preencha todas as informações</p>
            </div>
          </div>
          <button>Entrar</button>
        </div>
        <div className="havent-login">
          <span>
            Não possui cadastro? <Link to={"/cadastro"}>Cadastre-se Já!</Link>
          </span>
          <span>
            <Link to={"/senha-esquecida"}>Esqueci a senha</Link>
          </span>
        </div>
      </Body>
    </Container>
  );
};
