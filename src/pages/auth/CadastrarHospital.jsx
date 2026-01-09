import { Link } from "react-router-dom";

export default function CadastrarHospital() {
  return (
    <>
      <title>Cadastrar Hospital | Siza Free</title>

      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full text-3xl shadow-lg">
              <i className="fa-solid fa-hospital"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-teal-800 text-center mb-2">
            Cadastro do Hospital
          </h2>

          <p className="text-center text-slate-600 mb-8">
            Complete os dados do hospital para validação no Siza Free.
          </p>

          <form className="space-y-6">
            {/* Foto / Logo */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Logo / Foto do Hospital
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            {/* Nome e registro */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Nome do Hospital
                </label>
                <input
                  type="text"
                  placeholder="Ex: Hospital Central"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Nº de Registro / Alvará
                </label>
                <input
                  type="text"
                  placeholder="Ex: ALV-123456"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Endereço */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Endereço
              </label>
              <input
                type="text"
                placeholder="Rua, bairro, referência"
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            {/* Província */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Província
              </label>
              <select className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition">
                <option value="">Selecione a província</option>
                <option>Bengo</option>
                <option>Benguela</option>
                <option>Bié</option>
                <option>Cabinda</option>
                <option>Cuando</option>
                <option>Cubango</option>
                <option>Cuanza Norte</option>
                <option>Cuanza Sul</option>
                <option>Cunene</option>
                <option>Huambo</option>
                <option>Huíla</option>
                <option>Icolo e Bengo</option>
                <option>Luanda</option>
                <option>Lunda Norte</option>
                <option>Lunda Sul</option>
                <option>Malanje</option>
                <option>Moxico</option>
                <option>Moxico Leste</option>
                <option>Namibe</option>
                <option>Uíge</option>
                <option>Zaire</option>
              </select>
            </div>

            {/* Documentos */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Licença / Alvará
                </label>
                <input
                  type="file"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Documento do Responsável
                </label>
                <input
                  type="file"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl font-bold bg-teal-500 hover:bg-teal-600 transition text-white"
            >
              Enviar para Verificação
            </button>

            <p className="text-center text-sm text-slate-600 mt-4">
              Já possui conta?{" "}
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
