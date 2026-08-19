import { APITester } from "../APITester";
import notebook from "../images/notebook.png";
import logo from "../images/logo.png";
import {
  Laptop2,
  HeartHandshake,
  Headphones,
  LineChart,
  ShieldCheck,
  Rocket,
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Offer {
  title: string;
  subtitle: string;
  gradient: string;
  icon?: LucideIcon;
}

interface Stat {
  value: string;
  label: string;
}

const features: Feature[] = [
  {
    icon: Laptop2,
    title: "Aulas de Informática",
    description: "Conteúdos simples e para todos.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusão Digital",
    description: "Foco em ajudar idosos e quem mais precisa.",
  },
  {
    icon: Headphones,
    title: "Suporte e dúvidas",
    description: "Atendimento e suporte sempre que precisar.",
  },
  {
    icon: LineChart,
    title: "Cursos Práticos",
    description: "Excel, software, hardware e muito mais.",
  },
];

const offers: Offer[] = [
  {
    title: "Card 1",
    subtitle: "O que é um computador",
    gradient: "from-neutral-700 via-neutral-800 to-neutral-900",
  },
  {
    title: "Segurança Digital",
    subtitle: "Vírus, golpes, proteção de dados e boas práticas.",
    gradient: "from-blue-950 via-slate-900 to-black",
    icon: ShieldCheck,
  },
  {
    title: "Card 3",
    subtitle: "Ferramenta de trabalho",
    gradient: "from-blue-600 via-blue-800 to-slate-900",
  },
  {
    title: "Excel do Básico",
    subtitle: "Fórmulas, planilhas, gráficos e dashboards.",
    gradient: "from-emerald-600 via-emerald-800 to-slate-900",
  },
  {
    title: "Card 5",
    subtitle: "Formatação",
    gradient: "from-slate-800 via-blue-950 to-black",
  },
  {
    title: "Hardware & Software",
    subtitle: "Entenda como o computador funciona por dentro.",
    gradient: "from-purple-700 via-fuchsia-800 to-blue-900",
  },
];

const stats: Stat[] = [
  { value: "+1.200", label: "Alunos Impactados" },
  { value: "+80", label: "Turmas Realizadas" },
  { value: "+25", label: "Voluntários" },
  { value: "97%", label: "Satisfação" },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#0a0d13] font-sans text-slate-100 flex flex-col relative overflow-x-hidden">

      <div className="absolute top-40 left-20 w-72 h-32 bg-purple-900/30 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-20 w-96 h-96 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Cabeçalho */}
      <header className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full z-10">

        {/* Logo  */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-300 rounded-xl flex items-center justify-center text-black font-bold text-xs">
            <img src={logo} alt="Logo Evolução Digital" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-purple-600">Evo</span>
            <span className="text-white">lução Digital</span>
          </h1>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex gap-8 font-semibold text-lg items-center">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Início</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Cursos</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Sobre</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contato</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Serviços</a>
        </nav>

        {/* Botão Entrar */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition">
          Entrar
        </button>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full px-6 py-16 z-10 gap-12">

        <div className="flex-1 space-y-8">
          <span className="inline-block bg-purple-900/30 text-purple-400 font-semibold px-4 py-1.5 rounded-full border border-purple-800/50">
            3° Ano B - Projeto Social
          </span>

          <h2 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
            Gerencie seu <br />
            aprendizado de <br />
            Informática Básica <br />
            com <span className="text-purple-600">Facilidade</span>
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
            Plataforma voltada para organizar{' '}
            <span className="text-blue-500 font-semibold">
              ações sociais, cursos, ensino de informática básica, eventos comunitários, inclusão digital
            </span>{' '}
            para todos e todas as atividades de um projeto social.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition">
              Começar agora
            </button>
            <button className="border border-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-purple-900/20 transition">
              Já tenho conta
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <img
            className="w-[300px] md:w-[450px] object-cover -rotate-[10deg] drop-shadow-[0_20px_50px_rgba(22,55,242,0.4)]"
            src={notebook}
            alt="Laptop prateado"
          />
        </div>
      </main>

      {/* Faixa de features */}
      <section className="max-w-7xl mx-auto w-full px-6 py-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0 lg:divide-x">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3 px-4 py-4 lg:py-0">
              <Icon className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white">{title}</h4>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O que nós oferecemos */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
          O que nós <span className="text-purple-600">oferecemos</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map(({ title, subtitle, gradient, icon: Icon }) => (
            <div
              key={title}
              className={`relative h-48 rounded-2xl p-6 overflow-hidden bg-gradient-to-br ${gradient} border border-white/10 shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition duration-300`}
            >
              {Icon && (
                <Icon className="absolute right-6 bottom-6 w-16 h-16 text-white/10" />
              )}
              <h4 className="font-semibold text-white">{title}</h4>
              <p className="text-sm text-gray-300 mt-2 max-w-[70%]">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estatísticas */}
      <section className="max-w-7xl mx-auto w-full px-6 z-10">
        <div className="rounded-2xl border border-purple-800/40 bg-gradient-to-r from-purple-950/40 via-blue-950/30 to-purple-950/40 px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-purple-500">{value}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto w-full px-6 py-8 z-10">
        <div className="rounded-2xl border border-white/10 bg-[#0d1220] px-6 py-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Rocket className="w-8 h-8 text-purple-500" />
            <div>
              <p className="font-semibold text-white">Junte-se a nós e faça parte dessa transformação!</p>
              <p className="text-sm text-gray-400">Aprenda, ensine e compartilhe conhecimento</p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Quero participar
          </button>
        </div>
      </section>

      {/* Rodapé (Footer) */}
      <footer className="border-t border-white/10 w-full mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Logo Evolução Digital" />
              </div>
              <h1 className="text-lg font-bold">
                <span className="text-purple-600">Evo</span>
                <span className="text-white">lução Digital</span>
              </h1>
            </div>
            <p className="text-sm text-gray-400">
              Promovendo inclusão digital e transformando vidas através de educação
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-3">Navegação</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Início</a></li>
              <li><a href="#" className="hover:text-white transition">Curso</a></li>
              <li><a href="#" className="hover:text-white transition">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition">Serviços</a></li>
              <li><a href="#" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-3">Aulas</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Informática básica</a></li>
              <li><a href="#" className="hover:text-white transition">Excel</a></li>
              <li><a href="#" className="hover:text-white transition">Hardware &amp; Software</a></li>
              <li><a href="#" className="hover:text-white transition">Segurança Digital</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-3">Contato</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> projetosocial@eeep.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> (88) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Fortaleza, CE
              </li>
            </ul>

            <h5 className="font-semibold text-white mt-6 mb-3">Redes Sociais</h5>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition">
                <Phone className="w-4 h-4 text-black" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition">
                <Phone className="w-4 h-4 text-black" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition">
                <Phone className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>s
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © 2026 Projeto Social - Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}