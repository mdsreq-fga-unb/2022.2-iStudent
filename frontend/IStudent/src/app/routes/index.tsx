import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  SignUp,
  SignUpTeacher,
  SignUpStudent,
  Login,
  ForgotPassword,
  EditProfile,
  HomeUser,
} from "../pages/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<Home />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/cadastro-professor" element={<SignUpTeacher />} />
        <Route path="/cadastro-estudante" element={<SignUpStudent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/senha-esquecida" element={<ForgotPassword />} />
        <Route path="/editar-dados" element={<EditProfile />} />
        <Route path="/pagina-inicial-usuario" element={<HomeUser />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
