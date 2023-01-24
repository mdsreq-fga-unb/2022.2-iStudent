import { Container, Header, Body } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { signupStudent } from "../../shared/services/auth/signUp";
import { Button } from '../../shared/components/index'
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmationPassword: "",
  biography: "",
};

export const SignUpStudent = () => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState(initialValues);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    console.log({ name, value });

    setTextInput({ ...textInput, [name]: value });
  }

  async function handleClickSignUp() {
    try {
      await signupStudent(textInput)
      navigate("/login")
      alert("Cadastro feito com sucesso, agora só fazer o login!")
    } catch (error) {
      alert('Erro no cadastro, tente novamente!')
    }
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
          <div className="bio">
            <p>Biografia</p>
            <textarea name="biography" onChange={onChange} />
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
          <Button onClick={handleClickSignUp}>Salvar Cadastro</Button>
        </div>
      </Body>
    </Container>
  );
};
