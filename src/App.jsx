import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Sobre from "./components/Sobre";
import MatriculaAluno from "./components/MatriculaAluno";
import Home from "./components/Home"; // ✅ novo import
import MenuInterno from "./components/MenuInterno";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* ✅ aqui */}
          <Route path="/login" element={<Login />} />
          <Route path="/menuinterno" element={<MenuInterno />} />
          <Route path="/matricula" element={<MatriculaAluno />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  );
}
