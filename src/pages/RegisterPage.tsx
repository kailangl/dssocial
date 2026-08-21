import React, { useState } from "react";
import githubIcon from "../images/github.png";
import googleIcon from "../images/google.png";
import facebookIcon from "../images/facebook.png";
import signup from "../images/Sign up-rafiki 1.png";

function SocialIcon({ label, src, alt }: { label: string; src: string; alt: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="group w-11 h-11 min-w-[44px] min-[481px]:w-12 min-[481px]:h-12 min-[481px]:min-w-[48px]
                 min-[1025px]:w-[54px] min-[1025px]:h-[54px] min-[1025px]:min-w-[54px]
                 min-[1201px]:w-[60px] min-[1201px]:h-[60px] min-[1201px]:min-w-[60px]
                 border border-white/[0.12] rounded-full bg-white/[0.04]
                 inline-flex items-center justify-center cursor-pointer flex-shrink-0
                 opacity-100 visible transition duration-200
                 hover:-translate-y-[3px] hover:scale-110 hover:border-[#8B5CF6]/90
                 hover:shadow-[0_10px_22px_rgba(139,92,246,0.28)] hover:bg-[#8B5CF6]/[0.12]
                 active:scale-[0.96] active:translate-y-0 active:shadow-[0_4px_12px_rgba(110,231,249,0.25)]"
    >
      <img
        src={src}
        alt={alt}
        className="w-5 h-5 min-[481px]:w-6 min-[481px]:h-6 min-[1025px]:w-7 min-[1025px]:h-7
                   min-[1201px]:w-[30px] min-[1201px]:h-[30px]
                   block object-contain transition duration-200
                   group-hover:scale-[1.12] group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
      />
    </button>
  );
}

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

function validateForm(values: FormData): FormErrors {
  const nextErrors: FormErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Digite seu nome.";
  } else if (values.name.trim().length < 2) {
    nextErrors.name = "Nome muito curto.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Digite seu e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "E-mail inválido.";
  }

  if (!values.password) {
    nextErrors.password = "Digite sua senha.";
  } else if (values.password.length < 8 || !/[A-Z]/.test(values.password) || !/[0-9]/.test(values.password)) {
    nextErrors.password = "Use pelo menos 8 caracteres, uma letra maiúscula e um número.";
  }

  if (!values.confirmPassword) {
    nextErrors.confirmPassword = "Confirme sua senha.";
  } else if (values.confirmPassword !== values.password) {
    nextErrors.confirmPassword = "As senhas não conferem.";
  }

  if (!values.terms) {
    nextErrors.terms = "Você precisa aceitar os termos.";
  }

  return nextErrors;
}

type CadastroProps = {
  onSwitchToLogin?: () => void;
};

function Cadastro({ onSwitchToLogin }: CadastroProps) {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const shouldShowSocialIcons = Object.keys(errors).length === 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldName = name as keyof FormData;
    const nextValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [fieldName]: nextValue }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
    setIsSuccess(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setIsSuccess(Object.keys(nextErrors).length === 0);
  };

  // Wrapper do input (equivalente a .input-field / .input-field.valid / .input-field.invalid)
  const getFieldWrapperClass = (field: keyof FormData) => {
    const base =
      "relative mt-1 mb-2.5 min-[481px]:mt-1.5 min-[481px]:mb-3.5 p-[1px] rounded-xl " +
      "bg-[length:200%_200%] animate-[borderFlow_3s_linear_infinite] " +
      "transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_22px_rgba(139,92,246,0.18)] " +
      "hover:brightness-105 active:scale-[0.995]";

    if (errors[field]) {
      return `${base} bg-[linear-gradient(90deg,#ef4444,#f97316,#ef4444)] shadow-[0_0_0_1px_rgba(239,68,68,0.35)]`;
    }
    if (field !== "terms" && formData[field]) {
      return `${base} bg-[linear-gradient(90deg,#1db954,#34d399,#1db954)] shadow-[0_0_0_1px_rgba(52,211,153,0.35)]`;
    }
    return `${base} bg-[linear-gradient(90deg,#8b5cf6,#165efa,#8b5cf6)] shadow-[0_0_0_1px_rgba(158,118,255,0.2)]`;
  };

  const inputClass =
    "block w-full px-3 py-2.5 min-[481px]:px-3.5 min-[481px]:py-3 bg-[#12151C] border-none " +
    "rounded-[11px] text-white box-border outline-none transition duration-200 " +
    "hover:bg-[#171b24] active:scale-[0.998] " +
    "focus:shadow-[inset_0_0_0_1px_rgba(139,92,246,0.85),0_0_16px_rgba(139,92,246,0.35)] " +
    "placeholder:text-white/45";

  const labelClass =
    "text-[0.85rem] min-[481px]:text-[0.9rem] min-[1025px]:text-[0.95rem] min-[1201px]:text-[1rem] text-white/90";

  const errorClass =
    "block text-[#ff7b7b] text-[0.7rem] min-[481px]:text-[0.72rem] mx-1 mb-2 leading-[1.3] min-h-[16px]";

  const handleLoginClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (onSwitchToLogin) {
      onSwitchToLogin();
    }
  };

  return (
    <main className="flex flex-col min-[1025px]:flex-row items-center min-[1025px]:items-stretch justify-center
                      gap-4 min-[481px]:gap-5 min-[1025px]:gap-0
                      p-4 min-[481px]:p-5 min-[1025px]:p-0
                      w-screen min-h-screen box-border m-0
                      bg-[#0A0D13] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes gradientAnimation {
          from { background-position: 200% 50%; }
          to { background-position: 0% 50%; }
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      {/* LADO ESQUERDO - #card-info */}
      <div id="card-info"
        className="flex-1 min-[1025px]:min-w-[450px]
                   w-full min-[1025px]:w-auto max-w-[500px] min-[1025px]:max-w-none mx-auto min-[1025px]:mx-0
                   rounded-2xl min-[1025px]:rounded-l-none min-[1025px]:rounded-r-[200px]
                   p-[30px_20px] min-[481px]:p-[40px_30px] min-[1025px]:p-[80px_10%]
                   box-border
                   bg-[linear-gradient(135deg,#371961_0%,#4b1d70_50%,#8C00F6_100%)]
                   text-white flex flex-col justify-center items-start text-left
                   transition-all duration-300"
      >
        <h1
          className="w-full text-[1.4rem] min-[481px]:text-[1.6rem] min-[1025px]:text-[2.2rem] min-[1201px]:text-[2.5rem]
                     font-bold mb-3 leading-[1.2] text-white"
        >
          Faça parte dessa <span style={{ color: "#165efa" }}>mudança</span>
        </h1>
        <p
          className="w-full my-3 text-[0.85rem] leading-[1.5] min-[481px]:text-[0.9rem] min-[481px]:leading-normal
                     min-[1025px]:text-[0.95rem] min-[1201px]:text-[1rem]"
        >
          Crie sua conta e faça parte dessa transformação através da educação.
        </p>
        <ul className="list-none pl-0 ml-0 w-full">
          {["Acesso gratuito", "Certificados de conclusão", "Comunidade engajada"].map((item) => (
            <li
              key={item}
              className="mb-2 pl-0 text-[0.85rem] min-[481px]:text-[0.9rem] min-[1025px]:text-[0.95rem] min-[1201px]:text-[1rem]"
            >
              {item}
            </li>
          ))}
        </ul>
        <img src={signup} className="w-full max-w-[500px] mx-auto" alt="" />
      </div>

      {/* LADO DIREITO - .card (formulário) */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex-1 min-w-0
                   w-full min-[1025px]:w-auto max-w-[500px] min-[1025px]:max-w-none mx-auto min-[1025px]:mx-0
                   p-5 min-[481px]:p-[30px] min-[1025px]:p-[80px_10%]
                   box-border bg-transparent text-white flex flex-col justify-center
                   transition-all duration-300"
      >
        <h1
          id="titulo"
          className="text-[1.3rem] max-[360px]:text-[1.2rem] min-[481px]:text-[1.6rem] min-[1025px]:text-[2.2rem] min-[1201px]:text-[2.5rem]
                     font-bold mb-2 min-[1025px]:mb-3 leading-[1.2]
                     bg-[linear-gradient(90deg,#8B5CF6_0%,#7d24c5_50%,#8B5CF6_100%)] bg-clip-text text-transparent"
        >
          Criar conta
        </h1>
        <p
          className="mb-4 text-[0.85rem] min-[481px]:text-[0.9rem] min-[1025px]:text-[0.95rem] min-[1201px]:text-[1rem] text-white/90"
        >
          Seja bem-vindo! Preencha os dados abaixo para criar sua conta.
        </p>

        <label htmlFor="name" className={labelClass}>
          Nome:
        </label>
        <div className={getFieldWrapperClass("name")}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            className={inputClass}
          />
        </div>
        {errors.name && <span className={errorClass}>{errors.name}</span>}

        <label htmlFor="email" className={labelClass}>
          E-mail:
        </label>
        <div className={getFieldWrapperClass("email")}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            className={inputClass}
          />
        </div>
        {errors.email && <span className={errorClass}>{errors.email}</span>}

        <label htmlFor="password" className={labelClass}>
          Senha:
        </label>
        <div className={getFieldWrapperClass("password")}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            aria-invalid={Boolean(errors.password)}
            className={inputClass}
          />
        </div>
        {errors.password && <span className={errorClass}>{errors.password}</span>}

        <label htmlFor="confirmPassword" className={labelClass}>
          Confirmar senha:
        </label>
        <div className={getFieldWrapperClass("confirmPassword")}>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            aria-invalid={Boolean(errors.confirmPassword)}
            className={inputClass}
          />
        </div>
        {errors.confirmPassword && <span className={errorClass}>{errors.confirmPassword}</span>}

        <div className="flex items-center gap-2.5 mt-2">
          <label className="inline-flex items-center gap-2 min-[481px]:gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              aria-invalid={Boolean(errors.terms)}
              aria-describedby={errors.terms ? "terms-error" : undefined}
              className="peer absolute w-0 h-0 m-0 p-0 opacity-0"
            />
            <span
              aria-hidden
              className={`relative inline-block box-border w-[18px] h-[18px] min-w-[18px]
                          min-[481px]:w-5 min-[481px]:h-5 min-[481px]:min-w-[20px]
                          rounded-md border transition duration-150
                          peer-focus:outline peer-focus:outline-[3px] peer-focus:outline-[rgba(124,58,237,0.15)] peer-focus:outline-offset-[3px]
                          ${
                            formData.terms
                              ? "bg-[#7c3aed] border-[#7c3aed] shadow-[0_6px_18px_rgba(124,58,237,0.18)] -translate-y-px"
                              : "bg-white/[0.02] border-white/10"
                          }`}
            >
              {formData.terms && (
                <span className="absolute left-1/2 top-1/2 w-[7px] h-[12px] border-r-2 border-b-2 border-white -translate-x-1/2 -translate-y-[55%] rotate-45" />
              )}
            </span>
            <span className="text-white/90">
              Aceito os{" "}
              <a href="#" className="text-[#dbeafe] underline">
                termos e políticas de privacidade
              </a>
            </span>
          </label>
        </div>
        {errors.terms && (
          <span id="terms-error" className={`${errorClass} mt-1.5 mb-1`}>
            {errors.terms}
          </span>
        )}

        <button
          type="submit"
          disabled={!formData.terms}
          className="block w-full max-w-full mt-2.5 min-[481px]:mt-3.5 mb-2.5
                     p-3 min-[481px]:p-3.5 box-border rounded-[10px] text-white font-bold cursor-pointer
                     text-[0.95rem] min-[481px]:text-[0.9rem] min-[1025px]:text-[0.95rem] min-[1201px]:text-[1rem]
                     bg-[length:200%_200%] animate-[gradientAnimation_5s_linear_infinite]
                     bg-[linear-gradient(270deg,#8B5CF6,#8B5CF6,#6206FF,#8B5CF6)]
                     transition-transform duration-300 ease-in-out
                     hover:scale-[1.02] min-[481px]:hover:scale-[1.03] min-[1201px]:hover:scale-[1.05]
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Criar conta
        </button>

        {isSuccess && (
          <p className="mt-2 text-[#7ef0b6] text-[0.8rem] font-semibold">
            Cadastro válido! Tudo pronto para continuar.
          </p>
        )}

        <p
          className="mt-3 flex justify-center items-center w-full gap-1 min-[481px]:gap-2
                     text-[0.85rem] min-[481px]:text-[0.9rem] min-[1025px]:text-[0.95rem] min-[1201px]:text-[1rem]
                     text-white/85"
        >
          Já tem uma conta?{" "}
          <a
            href="#"
            onClick={handleLoginClick}
            className="text-[#8B5CF6] font-medium transition duration-200
                       hover:-translate-y-[3px] hover:opacity-[0.98]
                       active:-translate-y-px active:scale-[0.995]"
          >
            Entrar
          </a>
        </p>

        <div
          className={`flex justify-center items-center flex-nowrap w-full max-w-full px-2 box-border
                      gap-2 min-[481px]:gap-2.5 min-[1025px]:gap-3 min-[1201px]:gap-3.5
                      transition-all duration-[250ms]
                      ${
                        shouldShowSocialIcons
                          ? "opacity-100 translate-y-0 mt-3"
                          : "opacity-0 translate-y-2 max-h-0 mt-0 pt-0 pb-0 overflow-hidden pointer-events-none"
                      }`}
        >
          <SocialIcon label="GitHub" src={githubIcon} alt="GitHub" />
          <SocialIcon label="Google" src={googleIcon} alt="Google" />
          <SocialIcon label="Facebook" src={facebookIcon} alt="Facebook" />
        </div>
      </form>
    </main>
  );
}

export default Cadastro;