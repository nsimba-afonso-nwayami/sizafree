import { useState } from "react";
import PacienteLayout from "./components/PacienteLayout";

export default function NotificacoesPaciente() {
  // Estados dos switches
  const [consultas, setConsultas] = useState(true);
  const [medicamentos, setMedicamentos] = useState(true);
  const [documentos, setDocumentos] = useState(false);

  // Notificações dummy
  const notificacoes = [
    {
      id: 1,
      tipo: "Consulta",
      descricao:
        "Sua consulta com Dr. Carlos Silva foi confirmada para 20/01/2026.",
      data: "18/01/2026",
      icone: "fas fa-calendar-check",
      cor: "text-teal-500",
    },
    {
      id: 2,
      tipo: "Lembrete de Medicamento",
      descricao: "Não esqueça de tomar o seu remédio às 08:00.",
      data: "19/01/2026",
      icone: "fas fa-pills",
      cor: "text-yellow-500",
    },
    {
      id: 3,
      tipo: "Documento",
      descricao: "O resultado do seu exame de sangue foi adicionado.",
      data: "15/01/2026",
      icone: "fas fa-file-medical",
      cor: "text-red-500",
    },
  ];

  return (
    <PacienteLayout title="Notificações">
      {/* CONFIGURAÇÕES DE NOTIFICAÇÃO */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h2 className="text-xl font-bold text-teal-800 mb-4">
          Configurações de Notificação
        </h2>
        <p className="text-slate-500 mb-6">
          Ative ou desative os tipos de notificações que deseja receber.
        </p>

        <div className="grid gap-4">
          {/* Notificações de Consultas */}
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <div>
              <p className="font-medium text-slate-800">
                Notificações de Consultas
              </p>
              <p className="text-sm text-slate-500">
                Receba alertas sobre suas consultas agendadas
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={consultas}
                onChange={() => setConsultas(!consultas)}
              />
              <div
                className={`w-11 h-6 rounded-full transition-colors ${
                  consultas ? "bg-teal-500" : "bg-slate-200"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                  consultas ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </label>
          </div>

          {/* Notificações de Medicamentos */}
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <div>
              <p className="font-medium text-slate-800">
                Lembretes de Medicamentos
              </p>
              <p className="text-sm text-slate-500">
                Receba lembretes de horários de medicação
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={medicamentos}
                onChange={() => setMedicamentos(!medicamentos)}
              />
              <div
                className={`w-11 h-6 rounded-full transition-colors ${
                  medicamentos ? "bg-teal-500" : "bg-slate-200"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                  medicamentos ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </label>
          </div>

          {/* Notificações de Documentos */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-slate-800">
                Notificações de Documentos
              </p>
              <p className="text-sm text-slate-500">
                Receba avisos quando novos documentos forem adicionados
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
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
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
    </PacienteLayout>
  );
}
