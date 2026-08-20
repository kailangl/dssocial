import { Header } from "../components/Header";

export function Cursos() {

    return (
        <div className="min-h-screen bg-[#0a0d13] font-sans text-slate-100 flex flex-col relative overflow-x-hidden">

      <div className="absolute top-40 left-20 w-72 h-32 bg-purple-900/30 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-20 w-96 h-96 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
      <Header />
       <main className="flex-1 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full px-6 py-16 z-10 gap-12">         

       </main>
      </div>
    )
}