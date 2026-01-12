import { Link } from "react-router-dom";

export default function Cadastrar() {
  return (
    <>
      <title>Cadastrar-se | Sisa Free</title>

      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full text-3xl shadow-lg">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-2xl font-bold text-teal-800 text-center mb-2">
            Cadastro Sisa Free
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            Selecione o tipo de conta que deseja cadastrar
          </p>

          {/* Botões */}
          <div className="space-y-4">
            {/* Hospital */}
            <Link
              to="/auth/cadastrar/hospital"
              className="
                flex items-center justify-center gap-3
                w-full py-3
                bg-teal-500 hover:bg-teal-600
                text-white font-semibold
                rounded-xl
                transition
                cursor-pointer
              "
            >
              <i className="fa-solid fa-hospital"></i>
              Cadastrar Hospital
            </Link>

            {/* Especialista */}
            <Link
              to="/auth/cadastrar/especialista"
              className="
                flex items-center justify-center gap-3
                w-full py-3
                bg-teal-100 hover:bg-teal-200
                text-teal-800 font-semibold
                rounded-xl
                transition
                cursor-pointer
                border border-teal-200
              "
            >
              <i className="fa-solid fa-user-doctor"></i>
              Cadastrar Especialista
            </Link>

            {/* Farmácia */}
            <Link
              to="/auth/cadastrar/farmacia"
              className="
                flex items-center justify-center gap-3
                w-full py-3
                bg-slate-100 hover:bg-slate-200
                text-slate-800 font-semibold
                rounded-xl
                transition
                cursor-pointer
                border border-slate-300
              "
            >
              <i className="fa-solid fa-prescription-bottle-medical"></i>
              Cadastrar Farmácia
            </Link>
          </div>

          {/* Login */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Já possui uma conta?{" "}
            <Link to="/auth/login" className="text-teal-500 hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
