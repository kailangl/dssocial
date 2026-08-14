import { useState } from "react";
import { APITester } from "../APITester";
import notebook from "../images/notebook.png";
import logo from "../images/logo.png";
export function Home() {
  const [count, setCount] = useState(0);

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
          <a href="#" className="text-gray-300 hover:text-white transition">Sobre</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Serviços</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contato</a>
        </nav>

        {/* Botão Entrar */}
        <button className="text-blue-500 font-bold px-6 py-2 rounded-lg hover:text-blue-400 transition">
          Entrar
        </button>
      </header>


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

      
      <section className="max-w-7xl mx-auto w-full px-6 py-16 z-10">
        <h3 className="text-gray-300 font-semibold mb-6">Inclusão Digital</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl h-48 p-6 text-black font-semibold shadow-lg hover:-translate-y-1 transition duration-300">
            Card 1
          </div>
          <div className="bg-white rounded-2xl h-48 p-6 text-black font-semibold shadow-lg hover:-translate-y-1 transition duration-300">
            Card 2
          </div>
          <div className="bg-white rounded-2xl h-48 p-6 text-black font-semibold shadow-lg hover:-translate-y-1 transition duration-300">
            Card 3
          </div>
          <div className="bg-white rounded-2xl h-48 p-6 text-black font-semibold shadow-lg hover:-translate-y-1 transition duration-300">
            Card 4
          </div>
        </div>
      </section>

      {/* Rodapé (Footer) */}
      <footer className="bg-[#d9d9d9] text-black w-full py-8 mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <div className="font-semibold">Nome</div>
          <div className="font-semibold">Suporte</div>
          <div className="font-semibold">Rodapé SLA</div>
        </div>
      </footer>

    </div>
  );
}