import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
