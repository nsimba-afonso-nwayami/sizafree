import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Simulação de login bem-sucedido
    navigate("/dashboard/paciente");
  }

  return (
    <>
      <title>Entrar | Sisa Free</title>

      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full text-3xl shadow-lg">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-teal-800 text-center mb-6">
            Sisa Free Login
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block mb-2 text-slate-700 font-semibold">
                Email
              </label>
              <span className="absolute left-3 top-10.5 text-slate-400">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                className="w-full pl-10 p-3 rounded-lg bg-slate-100 text-slate-900 focus:outline-none border border-slate-300 focus:border-teal-500 transition"
              />
            </div>

            <div className="relative">
              <label className="block mb-2 text-slate-700 font-semibold">
                Senha
              </label>
              <span className="absolute left-3 top-10.5 text-slate-400">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                className="w-full pl-10 pr-10 p-3 rounded-lg bg-slate-100 text-slate-900 focus:outline-none border border-slate-300 focus:border-teal-500 transition"
              />
              <span
                className="absolute right-3 top-10.5 text-slate-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-bold bg-teal-500 hover:bg-teal-600 transition cursor-pointer text-white flex items-center justify-center gap-2"
            >
              Entrar
            </button>

            <div className="text-right mt-2">
              <Link
                to="/auth/esqueceu-senha"
                className="text-sm text-teal-600 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-slate-600">
            Não tem conta?{" "}
            <Link
              to="/auth/cadastrar"
              className="text-teal-500 hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
