import HospitalLayout from "./components/HospitalLayout";
import { useState } from "react";

export default function ConfiguracoesHospital() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <title>Configurações | Dashboard Hospital</title>

      <HospitalLayout title="Configurações">
        <div className="flex flex-col gap-8">
          {/* FORM — DADOS DO HOSPITAL */}
          <form className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-bold text-teal-800">
              Dados do Hospital
            </h2>

            {/* INFORMAÇÕES GERAIS */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Nome do Hospital
                </label>
                <input
                  type="text"
                  defaultValue="Hospital Central de Luanda"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  defaultValue="923 456 789"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Email Institucional
                </label>
                <input
                  type="email"
                  defaultValue="contato@hospitalcentral.ao"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Tipo de Hospital
                </label>
                <select className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none">
                  <option>Hospital Público</option>
                  <option>Hospital Privado</option>
                  <option>Clínica</option>
                  <option>Centro de Saúde</option>
                  <option>Hospital Universitário</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Nº de Registro / Alvará
                </label>
                <input
                  type="text"
                  defaultValue="ALV-2025-0098"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>
            </div>

            {/* ENDEREÇO */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Endereço
                </label>
                <input
                  type="text"
                  defaultValue="Rua Direita do Kilamba, próximo ao mercado"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Província
                </label>
                <select className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none">
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
            </div>

            {/* DOCUMENTOS */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Licença / Alvará
                </label>
                <input
                  type="file"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Documento do Responsável
                </label>
                <input
                  type="file"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
                />
              </div>
            </div>

            {/* BOTÃO FORM 1 */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition cursor-pointer"
              >
                Salvar Dados do Hospital
              </button>
            </div>
          </form>

          {/* FORM — ALTERAÇÃO DE SENHA */}
          <form className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-bold text-teal-800">
              Alteração de Senha
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Senha Atual
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Nova Senha
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Confirmar Nova Senha
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-teal-600 hover:underline"
              >
                {showPassword ? "Ocultar senhas" : "Mostrar senhas"}
              </button>
            </div>

            {/* BOTÃO FORM 2 */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition cursor-pointer"
              >
                Alterar Senha
              </button>
            </div>
          </form>
        </div>
      </HospitalLayout>
    </>
  );
}
