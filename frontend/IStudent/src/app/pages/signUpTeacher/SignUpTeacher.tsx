import { Container, Header, Body } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import { api } from "../../shared/services";
import React, { useEffect, useState } from "react";

const inicialValues = {
  name: "",
  email: "",
  password: "",
  confirmationPassword: "",
  biography: "",
};

export const SignUpTeacher = () => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState(inicialValues);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    console.log({ name, value });

    setTextInput({ ...textInput, [name]: value });
  }

  function handleClickSignUp() {
    api.post("signup/teacher", textInput).then((res) => {
      navigate("/pagina-inicial");
    });
  }

  const handleClickSignUpPage = () => {
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
            onClick={handleClickSignUpPage}
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
            <input type="text" name="name" onChange={onChange} />
          </div>
          <div className="email">
            <p>E-mail</p>
            <input type="email" name="email" onChange={onChange} />
          </div>
          <div className="whatsapp">
            <p>WhatsApp</p>
            <input type="tel" />
          </div>
          <div className="bio">
            <p>Biografia</p>
            <textarea name="biography" onChange={onChange} />
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
            <input type="password" name="password" onChange={onChange} />
          </div>
          <div className="value-hour">
            <p>Confirme sua nova senha</p>
            <input
              type="password"
              name="confirmationPassword"
              onChange={onChange}
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
