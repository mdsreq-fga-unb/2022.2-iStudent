import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, SignUp, SignUpTeacher, SignUpStudent } from "../pages/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<Home />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/cadastro-professor" element={<SignUpTeacher />} />
        <Route path="/cadastro-estudante" element={<SignUpStudent />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
