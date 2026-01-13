import { useState } from "react";
import PacienteLayout from "./components/PacienteLayout";

export default function PrivacidadePaciente() {
  // Estados dos switches
  const [medicosAcesso, setMedicosAcesso] = useState(true);
  const [compartilharDocumentos, setCompartilharDocumentos] = useState(true);
  const [acessoTerceiros, setAcessoTerceiros] = useState(false);

  return (
    <>
      <title>Privacidade | Dashboard Paciente</title>
      <PacienteLayout title="Privacidade do Paciente">
        {/* INTRODUÇÃO */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-xl font-bold text-teal-800 mb-2">
            Controle da sua Privacidade
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Aqui você define quem pode acessar suas informações médicas e como
            seus dados são utilizados dentro da plataforma. Sua privacidade é
            uma prioridade.
          </p>
        </div>

        {/* FUNCIONALIDADES DO PACIENTE */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h3 className="text-lg font-bold text-teal-800 mb-4">
            Funcionalidades Disponíveis
          </h3>

          <ul className="grid sm:grid-cols-2 gap-4 text-slate-700">
            <li className="flex gap-3 items-start">
              <i className="fas fa-user-circle text-teal-500 mt-1"></i>
              <span>Cadastro e perfil completo de saúde</span>
            </li>
            <li className="flex gap-3 items-start">
              <i className="fas fa-notes-medical text-teal-500 mt-1"></i>
              <span>
                Histórico clínico digital (consultas, exames e diagnósticos)
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <i className="fas fa-file-upload text-teal-500 mt-1"></i>
              <span>Upload e armazenamento de documentos médicos</span>
            </li>
            <li className="flex gap-3 items-start">
              <i className="fas fa-bell text-teal-500 mt-1"></i>
              <span>Lembretes de consultas e medicamentos</span>
            </li>
            <li className="flex gap-3 items-start">
              <i className="fas fa-search-location text-teal-500 mt-1"></i>
              <span>Solicitar consultas por região ou especialidade</span>
            </li>
            <li className="flex gap-3 items-start">
              <i className="fas fa-map-marked-alt text-teal-500 mt-1"></i>
              <span>Visualizar médicos e farmácias próximas</span>
            </li>
          </ul>
        </div>

        {/* CONTROLE DE PRIVACIDADE */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h3 className="text-lg font-bold text-teal-800 mb-4">
            Controle de Acesso aos Dados
          </h3>

          <div className="grid gap-4">
            {/* Switch Médicos */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">
                  Médicos podem acessar meu histórico clínico
                </p>
                <p className="text-sm text-slate-500">
                  Permite que profissionais de saúde visualizem suas consultas e
                  exames
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={medicosAcesso}
                  onChange={() => setMedicosAcesso(!medicosAcesso)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    medicosAcesso ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    medicosAcesso ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Switch Compartilhar Documentos */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">
                  Compartilhar documentos médicos
                </p>
                <p className="text-sm text-slate-500">
                  Autoriza o compartilhamento de receitas e exames
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={compartilharDocumentos}
                  onChange={() =>
                    setCompartilharDocumentos(!compartilharDocumentos)
                  }
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    compartilharDocumentos ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    compartilharDocumentos ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Switch Acesso Terceiros */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-800">
                  Acesso de terceiros (clínicas e farmácias)
                </p>
                <p className="text-sm text-slate-500">
                  Controla o acesso limitado a parceiros
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={acessoTerceiros}
                  onChange={() => setAcessoTerceiros(!acessoTerceiros)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    acessoTerceiros ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    acessoTerceiros ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>
          </div>
        </div>

        {/* SEGURANÇA */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-teal-800 mb-2">
            Segurança dos Dados
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Todos os seus dados são protegidos com criptografia e seguem boas
            práticas de segurança e confidencialidade médica. Apenas usuários
            autorizados podem acessar suas informações.
          </p>
        </div>
      </PacienteLayout>
    </>
  );
}
