import { Container, Header, Body } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import { api } from "../../shared/services";
import { useEffect, useState } from "react";

export const SignUpTeacher = () => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState({});

  const handleClickSignUp = () => {
    console.log("----");
    api.post("signup/teacher", textInput);
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
            <input
              type="text"
              onChange={(e) => {
                setTextInput({
                  ...textInput,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="email">
            <p>E-mail</p>
            <input
              type="email"
              onChange={(e) => {
                setTextInput({
                  ...textInput,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="whatsapp">
            <p>WhatsApp</p>
            <input type="tel" />
          </div>
          <div className="bio">
            <p>Biografia</p>
            <textarea
              onChange={(e) => {
                setTextInput({
                  ...textInput,
                  biography: e.target.value,
                });
              }}
            />
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
            <input type="time" />
          </div>
          <div className="final-hour">
            <p>Até</p>
            <input type="time" />
          </div>
        </div>
        <div className="my-material-title">
          <h1>Escolha uma Senha</h1>
        </div>
        <div className="my-material">
          <div className="material">
            <p>Sua nova senha</p>
            <input
              type="password"
              onChange={(e) => {
                setTextInput({
                  ...textInput,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="value-hour">
            <p>Confirme sua nova senha</p>
            <input
              type="password"
              onChange={(e) => {
                setTextInput({
                  ...textInput,
                  confirmationPassword: e.target.value,
                });
              }}
            />
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
          <button onClick={handleClickSignUp}>Salvar Cadastro</button>
        </div>
      </Body>
    </Container>
  );
};
