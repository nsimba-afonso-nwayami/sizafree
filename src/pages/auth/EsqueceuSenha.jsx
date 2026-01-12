import { Link } from "react-router-dom";

export default function EsqueceuSenha() {
  return (
    <>
      <title>Esqueceu Senha | Sisa Free</title>

      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full text-3xl shadow-lg">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-teal-800 text-center mb-6">
            Recuperar Senha
          </h2>

          <p className="text-center text-slate-600 mb-6">
            Informe seu email para receber o link de redefinição de senha.
          </p>

          <form className="space-y-4">
            {/* Email */}
            <div className="relative">
              <label className="block mb-2 text-slate-700 font-semibold">
                Email
              </label>
              <span className="absolute left-3 top-10.5 text-slate-400">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full pl-10 p-3 rounded-lg bg-slate-100 text-slate-900 focus:outline-none border border-slate-300 focus:border-teal-500 transition"
              />
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-bold bg-teal-500 hover:bg-teal-600 transition cursor-pointer text-white flex items-center justify-center gap-2"
            >
              Enviar Link
            </button>

            {/* Link para login */}
            <p className="mt-4 text-center text-sm text-slate-600">
              Lembrou a senha?{" "}
              <Link to="/auth/login" className="text-teal-500 hover:underline">
                Entrar
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
