import HospitalLayout from "./components/HospitalLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function SolicitacoesHospital() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummySolicitacoes = [
    {
      id: 701,
      data: "18/01/2026",
      paciente: "Ana Souza",
      especialidade: "Cardiologia",
      medicoSolicitado: "Dra. Ana Ribeiro",
      tipo: "Presencial",
      status: "Pendente",
      motivo: "Dor no peito e histórico familiar.",
    },
    {
      id: 702,
      data: "19/01/2026",
      paciente: "Lucas Martins",
      especialidade: "Ortopedia",
      medicoSolicitado: "Dr. Paulo Lima",
      tipo: "Online",
      status: "Pendente",
      motivo: "Dor lombar persistente.",
    },
  ];

  return (
    <>
      <title>Solicitações de Consulta | Dashboard Hospital</title>

      <HospitalLayout title="Solicitações de Consulta">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente ou especialidade..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Tipos</option>
            <option>Presencial</option>
            <option>Online</option>
          </select>
        </div>

        {/* CARDS DE SOLICITAÇÃO */}
        <div className="flex flex-col gap-4">
          {dummySolicitacoes.map((solicitacao) => (
            <div
              key={solicitacao.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-teal-800">
                  {solicitacao.paciente}
                </span>
                <span className="text-slate-500 text-sm">
                  {solicitacao.data}
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-1">
                Especialidade:{" "}
                <span className="font-medium text-slate-800">
                  {solicitacao.especialidade}
                </span>
              </p>

              <p className="text-slate-600 text-sm mb-1">
                Médico solicitado:{" "}
                <span className="font-medium text-slate-800">
                  {solicitacao.medicoSolicitado}
                </span>
              </p>

              <p className="text-slate-600 text-sm mb-3">
                Tipo: {solicitacao.tipo}
              </p>

              <p className="text-slate-600 text-sm mb-4">
                <span className="font-medium">Motivo:</span>{" "}
                {solicitacao.motivo}
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                <div className="flex gap-2">
                  <button className="px-4 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                    Aceitar
                  </button>

                  <button className="px-4 py-1 text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer">
                    Recusar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES DA SOLICITAÇÃO */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Solicitação"
          icon="fas fa-file-medical"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-1">
                Ana Souza
              </h2>
              <p className="text-slate-500">Cardiologia • Presencial</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Data da Solicitação</p>
                <p className="font-semibold text-slate-800">18/01/2026</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Médico Solicitado</p>
                <p className="font-semibold text-slate-800">Dra. Ana Ribeiro</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Tipo</p>
                <p className="font-semibold text-slate-800">Presencial</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-semibold text-yellow-600">Pendente</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Motivo da Solicitação
              </h3>
              <p className="text-slate-600">
                Dor no peito e histórico familiar de problemas cardíacos.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer flex items-center gap-1">
                 Aceitar
              </button>
              <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg cursor-pointer flex items-center gap-1">
                 Recusar
              </button>
              <button
                onClick={() => setOpenDetalhes(false)}
                className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </Modal>
      </HospitalLayout>
    </>
  );
}
