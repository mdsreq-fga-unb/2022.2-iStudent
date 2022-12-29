import { Container, Header, Body } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

export const SignUpStudent = () => {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate("/cadastro");
  };

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
            onClick={handleClickSignUp}
          />
          <div className="product-name" onClick={handleClickHome}>
            iStudent
          </div>
        </div>
        <div className="title">Cadastro</div>
      </Header>
      <Body>
        <div className="my-data-title">
          <h1>Seus Dados</h1>
        </div>
        <div className="my-data">
          <div className="complete-name">
            <p>Nome Completo</p>
            <input type="text" />
          </div>
          <div className="email">
            <p>E-mail</p>
            <input type="email" />
          </div>
          <div className="whatsapp">
            <p>WhatsApp</p>
            <input type="tel" />
          </div>
        </div>
        <div className="my-password-title">
          <h1>Escolha uma Senha</h1>
        </div>
        <div className="my-password">
          <div className="password">
            <p>Sua nova senha</p>
            <input type="password" />
          </div>
          <div className="confirm-password">
            <p>Confirme sua nova senha</p>
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
          <button>Salvar Cadastro</button>
        </div>
      </Body>
    </Container>
  );
};
