import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";

export default function ConfiguracoesFarmacia() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <title>Configurações | Dashboard Farmácia</title>

      <FarmaciaLayout title="Configurações">
        <div className="flex flex-col gap-8">
          {/* FORM — DADOS DA FARMÁCIA */}
          <form className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-bold text-teal-800">
              Dados da Farmácia
            </h2>

            {/* LOGO */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Logo / Foto da Farmácia
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            {/* NOME, CONTATO, LICENÇA */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Nome da Farmácia
                </label>
                <input
                  type="text"
                  defaultValue="Farmácia Central"
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
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="contato@farmaciacentral.ao"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Nº da Licença / Alvará
                </label>
                <input
                  type="text"
                  defaultValue="ALV-987654"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>
            </div>

            {/* RESPONSÁVEL */}
            <div>
              <label className="block mb-1 text-sm font-semibold text-slate-700">
                Farmacêutico Responsável
              </label>
              <input
                type="text"
                defaultValue="Dr. João Mateus"
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* HORÁRIO E ATENDIMENTO */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Horário de Funcionamento
                </label>
                <input
                  type="text"
                  defaultValue="08h - 22h"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Tipo de Atendimento
                </label>
                <select className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none">
                  <option>Presencial</option>
                  <option>Delivery</option>
                  <option>Presencial e Delivery</option>
                </select>
              </div>
            </div>

            {/* ENDEREÇO */}
            <div>
              <label className="block mb-1 text-sm font-semibold text-slate-700">
                Endereço
              </label>
              <input
                type="text"
                defaultValue="Rua Direita do Kilamba, próximo ao mercado"
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* PROVÍNCIA */}
            <div>
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

            {/* DOCUMENTOS */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  Documento da Licença
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
                Salvar Dados da Farmácia
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
      </FarmaciaLayout>
    </>
  );
}
