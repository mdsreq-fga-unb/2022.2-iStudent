import { Header } from "./styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { ToolTip, NotificationTooltip } from "../../components/index";
import Tippy from "@tippyjs/react";

export const HeaderUser = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/pagina-inicial");
  };

  const handleEditProfile = () => {
    navigate('/editar-dados');
  }

  const handleCoursesPage = () => {
    navigate('/cursos-disponíveis')
  }

  return (
    <Header>
      <div className="product-name" onClick={handleClickHome}>
        iStudent
      </div>
      <input type="text" placeholder="Pesquise por qualquer coisa" />
      <div className="button-space">
        <ShoppingCartIcon className="shoppingCart-item" onClick={handleCoursesPage}/>
        <Tippy
          content={<NotificationTooltip></NotificationTooltip>}
          interactive={true}
          delay={1}
          duration={1}
          placement="bottom-start"
        >
          <NotificationsIcon className="notification-item" />
        </Tippy>
        <Tippy
          content={<ToolTip></ToolTip>}
          interactive={true}
          delay={1}
          duration={1}
          placement="bottom-start"
        >
          <div className="profile-space" onClick={handleEditProfile}>
            <img src="" alt="" />
          </div>
        </Tippy>
      </div>
    </Header>
  );
};
