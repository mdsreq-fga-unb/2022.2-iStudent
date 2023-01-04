import { Header } from "./styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { ToolTip } from "../toolTip/ToolTip";
import Tippy from "@tippyjs/react";

export const HeaderUser = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/pagina-inicial");
  };
  return (
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
  );
};
