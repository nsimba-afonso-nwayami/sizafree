import { useState } from "react";
import VerificacaoLayout from "./components/VerificacaoLayout";

export default function NotificacoesVerificacao() {
  // Estados dos switches
  const [hospitais, setHospitais] = useState(true);
  const [farmacias, setFarmacias] = useState(true);
  const [especialistas, setEspecialistas] = useState(true);
  const [documentos, setDocumentos] = useState(true);

  // Notificações dummy
  const notificacoes = [
    {
      id: 1,
      tipo: "Hospital",
      descricao:
        "Hospital Geral de Luanda enviou novos documentos para verificação.",
      data: "Hoje • 09:40",
      icone: "fas fa-hospital",
      cor: "text-teal-500",
    },
    {
      id: 2,
      tipo: "Farmácia",
      descricao: "Farmácia Vida solicitou aprovação do perfil institucional.",
      data: "Ontem • 16:20",
      icone: "fas fa-prescription-bottle-medical",
      cor: "text-blue-500",
    },
    {
      id: 3,
      tipo: "Especialista",
      descricao:
        "Dr. Carlos Mendes submeteu a cédula profissional para validação.",
      data: "Há 2 dias",
      icone: "fas fa-user-doctor",
      cor: "text-indigo-500",
    },
    {
      id: 4,
      tipo: "Documento",
      descricao:
        "Novo documento pendente de análise no sistema de verificação.",
      data: "Há 3 dias",
      icone: "fas fa-file-circle-check",
      cor: "text-yellow-500",
    },
  ];

  return (
    <>
      <title>Notificações | Dashboard Verificação</title>

      <VerificacaoLayout title="Notificações">
        {/* CONFIGURAÇÕES DE NOTIFICAÇÃO */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-xl font-bold text-teal-800 mb-4">
            Configurações de Notificação
          </h2>
          <p className="text-slate-500 mb-6">
            Defina quais tipos de notificações deseja receber no painel de
            verificação.
          </p>

          <div className="grid gap-4">
            {/* Hospitais */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">
                  Verificação de Hospitais
                </p>
                <p className="text-sm text-slate-500">
                  Alertas sobre novos hospitais e documentos enviados
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={hospitais}
                  onChange={() => setHospitais(!hospitais)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    hospitais ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    hospitais ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Farmácias */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">
                  Verificação de Farmácias
                </p>
                <p className="text-sm text-slate-500">
                  Avisos sobre solicitações e validações pendentes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={farmacias}
                  onChange={() => setFarmacias(!farmacias)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    farmacias ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    farmacias ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Especialistas */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">
                  Verificação de Especialistas
                </p>
                <p className="text-sm text-slate-500">
                  Notificações sobre perfis e documentos profissionais
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={especialistas}
                  onChange={() => setEspecialistas(!especialistas)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    especialistas ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    especialistas ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Documentos */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-800">
                  Notificações de Documentos
                </p>
                <p className="text-sm text-slate-500">
                  Alertas sobre documentos aprovados ou rejeitados
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={documentos}
                  onChange={() => setDocumentos(!documentos)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    documentos ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    documentos ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>
          </div>
        </div>

        {/* LISTA DE NOTIFICAÇÕES */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-teal-800 mb-4">
            Notificações Recentes
          </h2>

          <ul className="divide-y divide-slate-200">
            {notificacoes.map((noti) => (
              <li
                key={noti.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex gap-4 items-start">
                  <i className={`${noti.icone} ${noti.cor} text-lg mt-1`}></i>
                  <div>
                    <p className="font-medium text-slate-800">{noti.tipo}</p>
                    <p className="text-slate-500 text-sm">{noti.descricao}</p>
                  </div>
                </div>
                <span className="text-sm text-slate-500">{noti.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </VerificacaoLayout>
    </>
  );
}
