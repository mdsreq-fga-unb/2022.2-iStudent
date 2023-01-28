import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  SignUp,
  SignUpTeacher,
  SignUpStudent,
  Login,
  EditProfile,
  AvailableTeacher,
  TeacherSchedule,
  SignUpCourse,
  AboutUs,
  CourseDetail,
  CoursesPage
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
        <Route path="/editar-dados" element={<EditProfile />} />
        <Route path="/professores-disponiveis" element={<AvailableTeacher />} />
        <Route path="/solicitacoes-agendamento" element={<TeacherSchedule />} />
        <Route path="/cadastrar-curso" element={<SignUpCourse />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/detalhes-curso" element={<CourseDetail />} />
        <Route path="/cursos-disponíveis" element={<CoursesPage />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
