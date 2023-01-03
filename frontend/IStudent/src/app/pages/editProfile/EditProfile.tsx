import { Body, Container, Header, DeleteAccount } from "./styles";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const EditProfile = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/pagina-inicial");
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
          <div className="profile-space"></div>
        </div>
      </Header>
      <Body>
        <div className="my-data-title">
          <h1>Seus Dados</h1>
        </div>
        <div className="my-data">
          <div className="email">
            <p>Nome</p>
            <input type="text" />
          </div>
        </div>
        <div className="my-password">
          <div className="password">
            <p>E-mail</p>
            <input type="email" />
          </div>
        </div>
        <button>Salvar</button>
      </Body>
      <DeleteAccount>
        <button>Excluir minha conta</button>
      </DeleteAccount>
    </Container>
  );
};
