import { Body, Container, Header, DeleteAccount } from "./styles";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUser } from "../../contexts/User";
import deleteAccount from "../../shared/services/user/deleteAccount";
import Tippy from "@tippyjs/react";
import { ToolTip } from "../../shared/components";

export const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser, changeToken } = useUser();

  const handleClickHome = () => {
    navigate("/pagina-inicial-usuario");
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
      <Header>
        <div className="product-name" onClick={handleClickHome}>
          iStudent
        </div>
        <input type="text" placeholder="Pesquise por qualquer coisa" />
        <div className="button-space">
          <ShoppingCartIcon className="shoppingCart-item" />
          <NotificationsIcon className="notification-item" />
          <Tippy content={<ToolTip></ToolTip>} interactive={true}>
            <div className="profile-space"></div>
          </Tippy>
        </div>
      </Header>
      <Body>
        <div className="my-data-title">
          <h1>Seus Dados</h1>
        </div>
        <div className="my-data">
          <div className="email">
            <p>Nome</p>
            <input type="text" value={user?.name} />
          </div>
        </div>
        <div className="my-password">
          <div className="password">
            <p>E-mail</p>
            <input type="email" value={user?.email} />
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
