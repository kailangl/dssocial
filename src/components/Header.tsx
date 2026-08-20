import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Cursos", href: "/cursos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Serviços", href: "/servicos" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Fecha o menu mobile automaticamente ao trocar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-300 hover:text-white transition pb-1 border-b-2 border-transparent";

  return (
    <header className="relative z-20 w-full">
      <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 shrink-0">
          <div className="w-16 h-16 bg-gray-300 rounded-xl flex items-center justify-center text-black font-bold text-xs overflow-hidden">
            <img src={logo} alt="Logo Evolução Digital" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-purple-600">Evo</span>
            <span className="text-white">lução Digital</span>
          </h1>
        </Link>

        {/* Links (desktop) */}
        <nav className="hidden lg:flex gap-8 font-semibold text-lg items-center">
          {navItems.map(({ label, href }) => (
            <NavLink key={href} to={href} className={navLinkClass} end={href === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Botão Entrar (desktop) */}
        <Link
          to="/login"
          className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition items-center justify-center"
        >
          Entrar
        </Link>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2 max-w-7xl mx-auto w-full font-semibold text-lg">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              end={href === "/"}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600/10 text-blue-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/login"
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition inline-flex items-center justify-center"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;