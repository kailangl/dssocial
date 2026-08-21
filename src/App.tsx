import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import  LoginPage  from "./pages/LoginPage";
import { Sobre } from "./pages/Sobre";
import { Services } from "./pages/Services";
import  RegisterPage  from "./pages/RegisterPage";
import { Cursos } from "./pages/Cursos";
import { Contato } from "./pages/Contato";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
