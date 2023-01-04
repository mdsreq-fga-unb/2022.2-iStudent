import { Container, Header, Body } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../shared/services";
import login from "../../shared/services/auth/login";
import { useUser } from "../../contexts/User";

export const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useUser();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleClickHome = () => {
    navigate("/pagina-inicial");
  };

  const handleLogin = async () => {
    try {
      const token = await login(user.email, user.password);
      if (token) setToken(token);
      navigate("/pagina-inicial");
    } catch (error) {
      alert("Erro no login, tente novamente!");
      console.log(error);
    }
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
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
        </div>
        <div className="my-password">
          <div className="password">
            <p>Senha</p>
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
          <button onClick={handleLogin}>Entrar</button>
        </div>
        <div className="havent-login">
          <span>
            Não possui cadastro? <Link to={"/cadastro"}>Cadastre-se Já!</Link>
          </span>
        </div>
      </Body>
    </Container>
  );
};
