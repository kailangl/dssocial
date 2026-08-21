import React, { useState } from "react";
import githubIcon from "../images/github.png";
import googleIcon from "../images/google.png";
import facebookIcon from "../images/facebook.png";

type FieldErrors = {
  email?: string;
  password?: string;
};

type SocialIconProps = {
  label: string;
  src: string;
  alt: string;
};

function SocialIcon({ label, src, alt }: SocialIconProps) {
  return (
    <button
      type="button"
      aria-label={`Entrar com ${label}`}
      className="w-[54px] h-[54px] min-w-[54px] rounded-full border border-white/10 bg-white/[0.04]
                 flex items-center justify-center cursor-pointer flex-shrink-0
                 transition hover:-translate-y-[3px] hover:scale-110
                 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10
                 hover:shadow-[0_10px_22px_rgba(139,92,246,0.28)]"
    >
      <img src={src} alt={alt} className="w-7 h-7 object-contain" />
    </button>
  );
}

const benefits = [
  "Acesso completo à sua conta em segundos",
  "Seus dados protegidos com criptografia de ponta a ponta",
  "Sincronização automática em todos os dispositivos",
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validateEmail(value: string) {
    if (!value.trim()) return "Informe seu e-mail.";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value)) return "Informe um e-mail válido.";
    return undefined;
  }

  function validatePassword(value: string) {
    if (!value) return "Informe sua senha.";
    if (value.length < 6) return "A senha deve ter pelo menos 6 caracteres.";
    return undefined;
  }

  function handleBlur(field: "email" | "password") {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({
      ...e,
      email: field === "email" ? validateEmail(email) : e.email,
      password: field === "password" ? validatePassword(password) : e.password,
    }));
  }

  function fieldState(field: "email" | "password") {
    if (!touched[field]) return "idle";
    return errors[field] ? "invalid" : "valid";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setErrors({ email: emailError, password: passwordError });
    setTouched({ email: true, password: true });
    if (emailError || passwordError) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  }

  const inputBorderClass = (field: "email" | "password") => {
    const state = fieldState(field);
    if (state === "valid")
      return "bg-[linear-gradient(90deg,#1db954,#34d399,#1db954)] shadow-[0_0_0_1px_rgba(52,211,153,0.35)]";
    if (state === "invalid")
      return "bg-[linear-gradient(90deg,#ef4444,#f97316,#ef4444)] shadow-[0_0_0_1px_rgba(239,68,68,0.35)]";
    return "bg-[linear-gradient(90deg,#8b5cf6,#165efa,#8b5cf6)] shadow-[0_0_0_1px_rgba(158,118,255,0.2)]";
  };

  return (
    <div className="min-h-screen w-full bg-[#0A0D13] text-white flex items-center justify-center font-sans">
      <style>{`
        @keyframes gradientAnimation {
          from { background-position: 200% 50%; }
          to { background-position: 0% 50%; }
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-border-flow {
          background-size: 200% 200%;
          animation: borderFlow 3s linear infinite;
        }
        .animate-gradient-btn {
          background-size: 200% 200%;
          animation: gradientAnimation 5s linear infinite;
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-stretch justify-center w-screen min-h-screen">
        {/* FORMULÁRIO - agora à esquerda no desktop (order-1) */}
        <div className="order-2 lg:order-1 flex-1 min-w-0 flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-[10%] lg:py-20">
          <div className="w-full max-w-[500px] mx-auto">
            <h1
              className="text-xl sm:text-2xl lg:text-[2.2rem] font-bold mb-3 leading-tight
                         bg-[linear-gradient(90deg,#8B5CF6_0%,#7d24c5_50%,#8B5CF6_100%)]
                         bg-clip-text text-transparent"
            >
              Entrar na conta
            </h1>
            <p className="text-sm text-white/70 mb-6">
              Ainda não tem uma conta?{" "}
              <a
                href="#"
                className="bg-[#8B5CF6] bg-clip-text text-transparent font-medium hover:opacity-90 transition"
              >
                Cadastre-se
              </a>
            </p>

            {submitted ? (
              <p className="mt-2 text-[#7ef0b6] text-sm font-semibold">
                Login realizado com sucesso. Redirecionando...
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* EMAIL */}
                <label htmlFor="email" className="text-sm text-white/90">
                  E-mail
                </label>
                <div
                  className={`relative mt-1.5 mb-1 p-[1px] rounded-xl transition-all duration-200
                              hover:-translate-y-px animate-border-flow ${inputBorderClass("email")}`}
                >
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(ev) => {
                      setEmail(ev.target.value);
                      if (touched.email) {
                        setErrors((er) => ({ ...er, email: validateEmail(ev.target.value) }));
                      }
                    }}
                    onBlur={() => handleBlur("email")}
                    placeholder="seuemail@exemplo.com"
                    className="block w-full px-3.5 py-3 bg-[#12151C] border-none rounded-[11px]
                               text-white outline-none transition
                               hover:bg-[#171b24]
                               focus:shadow-[inset_0_0_0_1px_rgba(139,92,246,0.85),0_0_16px_rgba(139,92,246,0.35)]
                               placeholder:text-white/45"
                  />
                </div>
                <span className="block text-[#ff7b7b] text-xs mx-1 mb-2 min-h-[16px] leading-tight">
                  {errors.email ?? ""}
                </span>

                {/* PASSWORD */}
                <label htmlFor="password" className="text-sm text-white/90">
                  Senha
                </label>
                <div
                  className={`relative mt-1.5 mb-1 p-[1px] rounded-xl transition-all duration-200
                              hover:-translate-y-px animate-border-flow ${inputBorderClass("password")}`}
                >
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(ev) => {
                      setPassword(ev.target.value);
                      if (touched.password) {
                        setErrors((er) => ({ ...er, password: validatePassword(ev.target.value) }));
                      }
                    }}
                    onBlur={() => handleBlur("password")}
                    placeholder="••••••••"
                    className="block w-full px-3.5 py-3 bg-[#12151C] border-none rounded-[11px]
                               text-white outline-none transition
                               hover:bg-[#171b24]
                               focus:shadow-[inset_0_0_0_1px_rgba(139,92,246,0.85),0_0_16px_rgba(139,92,246,0.35)]
                               placeholder:text-white/45"
                  />
                </div>
                <span className="block text-[#ff7b7b] text-xs mx-1 mb-2 min-h-[16px] leading-tight">
                  {errors.password ?? ""}
                </span>

                {/* REMEMBER / FORGOT */}
                <div className="flex items-center justify-between mt-2 mb-1">
                  <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(ev) => setRemember(ev.target.checked)}
                      className="absolute w-0 h-0 opacity-0"
                    />
                    <span
                      className={`w-5 h-5 min-w-[20px] rounded-md border relative inline-block transition
                        ${
                          remember
                            ? "bg-[#7c3aed] border-[#7c3aed] shadow-[0_6px_18px_rgba(124,58,237,0.18)] -translate-y-px"
                            : "bg-white/[0.02] border-white/10"
                        }`}
                    >
                      {remember && (
                        <span className="absolute left-1/2 top-1/2 w-[7px] h-[12px] border-r-2 border-b-2 border-white -translate-x-1/2 -translate-y-[55%] rotate-45" />
                      )}
                    </span>
                    <span className="text-sm text-white/90">Lembrar de mim</span>
                  </label>
                  <a href="#" className="text-sm text-[#8B5CF6] hover:opacity-90 transition">
                    Esqueceu a senha?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="block w-full mt-3.5 mb-2.5 py-3.5 px-3.5 rounded-[10px] text-white font-bold
                             bg-[linear-gradient(270deg,#8B5CF6,#8B5CF6,#6206FF,#8B5CF6)]
                             animate-gradient-btn transition-transform duration-300 ease-in-out
                             hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? "Entrando..." : "Entrar"}
                </button>

                <div className="flex items-center gap-3 my-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs text-white/50">ou continue com</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="flex justify-center items-center gap-3 mt-3 w-full max-w-full px-2 box-border flex-nowrap">
                  <SocialIcon label="GitHub" src={githubIcon} alt="GitHub" />
                  <SocialIcon label="Google" src={googleIcon} alt="Google" />
                  <SocialIcon label="Facebook" src={facebookIcon} alt="Facebook" />
                </div>
              </form>
            )}
          </div>
        </div>

        {/* PAINEL ROXO - agora à direita no desktop (order-2) */}
        <div id="card-infolg"
          className="order-1 lg:order-2 flex-1 min-w-0 lg:min-w-[450px] flex flex-col justify-center items-start
                     px-8 py-10 sm:px-10 sm:py-10 lg:px-[10%] lg:py-20
                     rounded-2xl lg:rounded-l-[200px] lg:rounded-r-none
                     bg-[linear-gradient(135deg,#371961_0%,#4b1d70_50%,#8C00F6_100%)]
                     m-4 lg:m-0"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight mb-3 text-white">
            Bem-vindo de volta
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
            Entre na sua conta e continue de onde parou. Sua jornada
            continua exatamente como você deixou..
          </p>
          <ul className="list-none pl-0 ml-0 space-y-2 w-full">
            {benefits.map((benefit) => (
              <li key={benefit} className="text-sm sm:text-base text-white/85 pl-0">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}