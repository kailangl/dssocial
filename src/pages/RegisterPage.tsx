import "./Register.css";
import { useState } from "react";
import githubIcon from "../images/github.png";
import googleIcon from "../images/google.png";
import facebookIcon from "../images/facebook.png";

function SocialIcon({ label, src, alt }: { label: string; src: string; alt: string }) {
  return (
    <button
      type="button"
      className="group w-[54px] h-[54px] min-w-[54px] border border-white/10 rounded-full bg-white/[0.04] inline-flex items-center justify-center cursor-pointer flex-shrink-0 transition duration-200 ease hover:-translate-y-[3px] hover:scale-110 hover:border-[#8b5cf6]/90 hover:shadow-[0_10px_22px_rgba(139,92,246,0.28)] hover:bg-[#8b5cf6]/[0.12] active:scale-[0.96] active:translate-y-0 active:shadow-[0_4px_12px_rgba(110,231,249,0.25)]"
      aria-label={label}
      title={label}
    >
      <img
        src={src}
        alt={alt}
        className="w-7 h-7 block object-contain transition-transform duration-200 ease group-hover:scale-[1.12] group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
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

export function RegisterPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldName = name as keyof FormData;
    const nextValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [fieldName]: nextValue }));
    setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    setIsSuccess(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setIsSuccess(Object.keys(nextErrors).length === 0);
  };

  const getFieldClass = (field: keyof FormData) => {
    const base =
      "relative mt-1.5 mb-3.5 p-px rounded-xl bg-[length:200%_200%] animate-[borderFlow_3s_linear_infinite] transition duration-200 ease hover:-translate-y-px hover:shadow-[0_10px_22px_rgba(139,92,246,0.18)] hover:brightness-105 active:scale-[0.995]";

    if (errors[field]) {
      return `${base} bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#ef4444] shadow-[0_0_0_1px_rgba(239,68,68,0.35)]`;
    }
    if (field !== "terms" && formData[field]) {
      return `${base} bg-gradient-to-r from-[#1db954] via-[#34d399] to-[#1db954] shadow-[0_0_0_1px_rgba(52,211,153,0.35)]`;
    }
    return `${base} bg-gradient-to-r from-[#8b5cf6] via-[#6ee7f9] to-[#8b5cf6] shadow-[0_0_0_1px_rgba(158,118,255,0.2)]`;
  };

  const inputClass =
    "block w-full py-3 px-3.5 bg-[#12151C] border-0 rounded-[11px] text-white box-border outline-none transition duration-200 ease hover:bg-[#171b24] active:scale-[0.998] focus:shadow-[inset_0_0_0_1px_rgba(139,92,246,0.85),0_0_16px_rgba(139,92,246,0.35)] placeholder:text-white/45 text-[0.95rem]";

  return (
    <main className="flex justify-center items-stretch gap-6 md:gap-8 p-5 w-[min(92vw,560px)] md:w-[min(90vw,1050px)] max-w-[1050px] min-h-0 md:min-h-[650px] h-auto box-border mx-auto my-6 flex-col md:flex-row">
      <div className="flex-1 w-full rounded-[32px] p-7 px-6 md:p-[42px_40px] box-border bg-gradient-to-br from-[#100223] via-[#050a24] to-[#8C00F6] text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-start items-start overflow-hidden min-h-0 md:min-h-[520px]">
        <h1 className="text-[2.2rem] font-bold mb-3 leading-[1.2] w-full">Faça parte dessa mudança</h1>
        <p className="text-[0.95rem] w-full">
          Crie sua conta e faça parte dessa transformação através da educação.
        </p>
        <ul className="text-[0.95rem] w-full list-disc pl-5">
          <li>Acesso gratuito</li>
          <li>Certificados de conclusão</li>
          <li>Comunidade engajada</li>
        </ul>
      </div>

      <form
        className="flex-1 w-full py-[18px] px-[14px] md:py-5 md:px-[18px] box-border bg-transparent text-white flex flex-col justify-center overflow-hidden max-h-full max-w-full min-h-0"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="text-[2.2rem] font-bold mb-3 leading-[1.2]">Criar conta</h1>
        <p className="text-[0.95rem]">Seja bem-vindo! Preencha os dados abaixo para criar sua conta.</p>

        <label htmlFor="name" className="text-[0.95rem]">
          Nome:
        </label>
        <div className={getFieldClass("name")}>
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
        {errors.name && <span className="block text-[#ff7b7b] text-[0.72rem] my-0.5 mx-1 mb-2 leading-[1.3] min-h-[16px]">{errors.name}</span>}

        <label htmlFor="email" className="text-[0.95rem]">
          E-mail:
        </label>
        <div className={getFieldClass("email")}>
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
        {errors.email && <span className="block text-[#ff7b7b] text-[0.72rem] my-0.5 mx-1 mb-2 leading-[1.3] min-h-[16px]">{errors.email}</span>}

        <label htmlFor="password" className="text-[0.95rem]">
          Senha:
        </label>
        <div className={getFieldClass("password")}>
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
        {errors.password && <span className="block text-[#ff7b7b] text-[0.72rem] my-0.5 mx-1 mb-2 leading-[1.3] min-h-[16px]">{errors.password}</span>}

        <label htmlFor="confirmPassword" className="text-[0.95rem]">
          Confirmar senha:
        </label>
        <div className={getFieldClass("confirmPassword")}>
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
        {errors.confirmPassword && (
          <span className="block text-[#ff7b7b] text-[0.72rem] my-0.5 mx-1 mb-2 leading-[1.3] min-h-[16px]">{errors.confirmPassword}</span>
        )}

        <div className="flex items-center gap-2.5 mt-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            aria-invalid={Boolean(errors.terms)}
            className="w-4 h-4 m-0"
          />
          <label htmlFor="terms" className="text-[0.95rem] m-0">
            Aceito os termos e políticas de privacidade
          </label>
        </div>
        {errors.terms && (
          <span className="block text-[#ff7b7b] text-[0.72rem] mt-1.5 mb-1 leading-[1.3] min-h-[16px]">{errors.terms}</span>
        )}

        <button
          type="submit"
          className="block w-full max-w-full mt-3.5 mb-2.5 p-3.5 box-border bg-gradient-to-l from-[#8B5CF6] via-[#6206FF] to-[#8B5CF6] bg-[length:200%_200%] text-white border-0 rounded-[10px] text-base font-bold cursor-pointer animate-[gradientAnimation_5s_linear_infinite] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
        >
          Criar conta
        </button>

        {isSuccess && <p className="mt-2 text-[#7ef0b6] text-[0.8rem] font-semibold">Cadastro válido! Tudo pronto para continuar.</p>}

        <div className="mt-4 w-full max-w-full border-t border-white/10 pt-4">
          <p className="text-center text-[0.9rem] font-semibold">Cadastre-se com sua conta</p>
          <p className="mt-1 text-center text-[0.78rem] text-white/60">
            Use Google, GitHub ou Facebook para criar seu cadastro rapidamente.
          </p>
          <div className="flex justify-center items-center gap-3 mt-3 w-full max-w-full px-2 box-border flex-nowrap">
          <SocialIcon label="GitHub" src={githubIcon} alt="GitHub" />
          <SocialIcon label="Google" src={googleIcon} alt="Google" />
          <SocialIcon label="Facebook" src={facebookIcon} alt="Facebook" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default RegisterPage;