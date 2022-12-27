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
            <input type="text" />
          </div>
          <div>
            <p>Biografia</p>
            <input type="text" />
          </div>
        </div>
        <div className="my-material-title">
          <h1>Suas Matérias</h1>
        </div>
        <div className="my-material">
          <div className="material">
            <p>Matérias</p>
            <input type="text" />
          </div>
          <div className="value-hour">
            <p>Custo da sua hora por aula</p>
            <input type="number" />
          </div>
        </div>
        <div className="schedule-title">
          <h1>Horários Disponíveis</h1>
          <button>+ Novo Horário</button>
        </div>
        <div className="schedule">
          <div className="week-day">
            <p>Dia da semana</p>
            <input type="text" />
          </div>
          <div className="initial-hour">
            <p>Das</p>
            <input type="number" />
          </div>
          <div className="final-hour">
            <p>Até</p>
            <input type="number" />
          </div>
        </div>
        <div className="final">
          <div className="alert-area">
            <ErrorOutlineIcon />
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
