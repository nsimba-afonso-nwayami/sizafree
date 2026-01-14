import { useState } from "react";
import HospitalLayout from "./components/HospitalLayout";

export default function NotificacoesHospital() {
  // Estados dos switches
  const [consultas, setConsultas] = useState(true);
  const [prescricoes, setPrescricoes] = useState(true);
  const [documentos, setDocumentos] = useState(false);
  const [alertas, setAlertas] = useState(true);

  // Notificações dummy
  const notificacoes = [
    {
      id: 1,
      tipo: "Consulta",
      descricao:
        "Consulta com João da Silva confirmada para 20/01/2026 às 10:00.",
      data: "18/01/2026",
      icone: "fas fa-calendar-check",
      cor: "text-teal-500",
    },
    {
      id: 2,
      tipo: "Prescrição",
      descricao: "Nova prescrição solicitada pelo paciente Maria Oliveira.",
      data: "19/01/2026",
      icone: "fas fa-file-prescription",
      cor: "text-blue-500",
    },
    {
      id: 3,
      tipo: "Documento",
      descricao: "Carlos Santos enviou novos exames para análise.",
      data: "15/01/2026",
      icone: "fas fa-file-medical",
      cor: "text-red-500",
    },
    {
      id: 4,
      tipo: "Alerta",
      descricao: "Sistema enviará manutenção programada amanhã às 22:00.",
      data: "13/01/2026",
      icone: "fas fa-bell",
      cor: "text-yellow-500",
    },
  ];

  return (
    <>
      <title>Notificações | Dashboard Hospital</title>

      <HospitalLayout title="Notificações">
        {/* CONFIGURAÇÕES DE NOTIFICAÇÃO */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-xl font-bold text-teal-800 mb-4">
            Configurações de Notificação
          </h2>
          <p className="text-slate-500 mb-6">
            Gerencie os tipos de notificações que deseja receber no sistema.
          </p>

          <div className="grid gap-4">
            {/* Consultas */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">Consultas</p>
                <p className="text-sm text-slate-500">
                  Alertas sobre confirmações e cancelamentos de consultas
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
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    consultas ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Prescrições */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">Prescrições</p>
                <p className="text-sm text-slate-500">
                  Avisos sobre novas prescrições digitais
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={prescricoes}
                  onChange={() => setPrescricoes(!prescricoes)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    prescricoes ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    prescricoes ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Documentos */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">Documentos</p>
                <p className="text-sm text-slate-500">
                  Alertas sobre novos exames e relatórios enviados
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

            {/* Alertas do Sistema */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-800">Alertas do Sistema</p>
                <p className="text-sm text-slate-500">
                  Receba notificações sobre manutenção e atualizações
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={alertas}
                  onChange={() => setAlertas(!alertas)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    alertas ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    alertas ? "translate-x-5" : "translate-x-0"
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
                    <p className="text-sm text-slate-500">{noti.descricao}</p>
                  </div>
                </div>
                <span className="text-sm text-slate-500">{noti.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </HospitalLayout>
    </>
  );
}
