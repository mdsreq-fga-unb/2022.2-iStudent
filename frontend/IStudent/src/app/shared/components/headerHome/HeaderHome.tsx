import { Header } from "./styles";
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {
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
  );
};
