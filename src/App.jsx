import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import MatriculaAluno from "./pages/MatriculaAluno";
import Home from "./pages/Home";
import MenuInterno from "./pages/MenuInterno";
import ProtectedRoute from "./components/navigation/ProtectedRoute";
import CadastroAluno from "./pages/CadastroAluno";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.SOBRE} element={<Sobre />} />

          {/* Rotas protegidas */}
          <Route
            path={routes.MENU_INTERNO}
            element={
              <ProtectedRoute>
                <MenuInterno />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.MATRICULA}
            element={
              <ProtectedRoute>
                <MatriculaAluno />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.ALUNOS}
            element={
              <ProtectedRoute>
                <CadastroAluno />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
