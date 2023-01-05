import { Body, Container, Header, DeleteAccount } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/User";
import deleteAccount from "../../shared/services/user/deleteAccount";
import { HeaderUser } from "../../shared/components";

export const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser, changeToken } = useUser();

  const handleClickHome = () => {
    navigate("/pagina-inicial");
  };

  const handleDeleteAccount = async () => {
    await deleteAccount();
    alert("Conta deletada com sucesso!");
    setUser(null);
    changeToken("");
    navigate("/");
  };

  return (
    <Container>
      <HeaderUser />
      <Body>
        <div className="my-data-title">
          <h1>Seus Dados</h1>
        </div>
        <div className="my-data">
          <div className="email">
            <p>Nome</p>
            <input type="text" placeholder={user?.name} />
          </div>
        </div>
        <div className="my-password">
          <div className="password">
            <p>E-mail</p>
            <input type="email" placeholder={user?.email} />
          </div>
        </div>
        <button>Salvar</button>
      </Body>
      <DeleteAccount>
        <button onClick={handleDeleteAccount}>Excluir minha conta</button>
      </DeleteAccount>
    </Container>
  );
};
