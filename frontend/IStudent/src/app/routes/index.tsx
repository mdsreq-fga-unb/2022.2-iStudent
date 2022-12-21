import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<Home />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
