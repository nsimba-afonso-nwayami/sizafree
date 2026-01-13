import EspecialistaLayout from "./components/EspecialistaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function HistoricoEspecialista() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyHistorico = [
    {
      id: 401,
      data: "10/01/2026",
      paciente: "João da Silva",
      tipo: "Consulta",
      observacoes: "Paciente apresentou melhora significativa após medicação.",
      arquivo: "historico_10_01_2026.pdf",
    },
    {
      id: 402,
      data: "12/01/2026",
      paciente: "Maria Oliveira",
      tipo: "Exame",
      observacoes:
        "Exame de sangue com resultados dentro dos parâmetros normais.",
      arquivo: "exame_12_01_2026.pdf",
    },
    {
      id: 403,
      data: "15/01/2026",
      paciente: "Carlos Santos",
      tipo: "Consulta",
      observacoes: "Reavaliação de pressão arterial, ajustes na medicação.",
      arquivo: "historico_15_01_2026.pdf",
    },
  ];

  return (
    <>
      <title>Histórico | Dashboard Especialista</title>

      <EspecialistaLayout title="Histórico">
        {/* CARD DE PESQUISA */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente ou tipo..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />
          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Tipos</option>
            <option>Consulta</option>
            <option>Exame</option>
          </select>
        </div>

        {/* CARDS DE HISTÓRICO */}
        <div className="flex flex-col gap-4">
          {dummyHistorico.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-teal-800">
                  {item.paciente}
                </span>
                <span className="text-slate-500 text-sm">{item.data}</span>
              </div>
              <div className="mb-2">
                <span className="font-medium text-teal-800">{item.tipo}</span>
              </div>
              <div className="text-slate-600 text-sm mb-3">
                {item.observacoes}
              </div>

              <div className="flex gap-3">
                <button
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                  onClick={() => setOpenDetalhes(true)}
                >
                  <i className="fas fa-eye"></i> Visualizar
                </button>
                <button className="px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold cursor-pointer flex items-center gap-1">
                  <i className="fas fa-download"></i> Baixar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES HISTÓRICO */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Histórico"
          icon="fas fa-file-medical"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-teal-800">Paciente</span>
                <span className="text-slate-600">João da Silva</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-teal-800">Data</span>
                <span className="text-slate-600">10/01/2026</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-teal-800">Tipo</span>
                <span className="text-slate-600">Consulta</span>
              </div>
              <div className="mb-4">
                <span className="block font-medium text-teal-800 mb-1">
                  Observações
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Paciente apresentou melhora significativa após medicação.
                </p>
              </div>
              <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold cursor-pointer flex items-center gap-2">
                <i className="fas fa-download"></i> Baixar Histórico
              </button>
            </div>
          </div>
        </Modal>
      </EspecialistaLayout>
    </>
  );
}
