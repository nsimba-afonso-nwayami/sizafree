import EspecialistaLayout from "./components/EspecialistaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function PrescricoesEspecialista() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyPrescricoes = [
    {
      id: 1,
      paciente: "João da Silva",
      data: "18/01/2026",
      medicamento: "Paracetamol 500mg",
      status: "Ativa",
    },
    {
      id: 2,
      paciente: "Maria Oliveira",
      data: "15/01/2026",
      medicamento: "Amoxicilina 875mg",
      status: "Concluída",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ativa":
        return "bg-teal-500/20 text-teal-800";
      case "Concluída":
        return "bg-slate-200 text-slate-700";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Prescrições | Dashboard Especialista</title>

      <EspecialistaLayout title="Prescrições">
        {/* CARD DE PESQUISA E FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente ou medicamento..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Ativa</option>
            <option>Concluída</option>
          </select>
        </div>

        {/* TABELA DE PRESCRIÇÕES */}
        <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full text-left border-collapse text-sm">
            <thead>
              <tr className="text-teal-700 border-b border-slate-200">
                <th className="p-3">Paciente</th>
                <th className="p-3">Medicamento</th>
                <th className="p-3">Data</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Ações</th>
              </tr>
            </thead>

            <tbody>
              {dummyPrescricoes.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-200/50 hover:bg-slate-50 transition"
                >
                  <td className="p-3 font-medium text-slate-800">
                    {item.paciente}
                  </td>
                  <td className="p-3 text-slate-600">
                    {item.medicamento}
                  </td>
                  <td className="p-3 text-slate-600">{item.data}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 flex justify-center gap-4 text-lg">
                    <button
                      onClick={() => setOpenDetalhes(true)}
                      className="text-blue-500 hover:text-blue-600 cursor-pointer"
                      title="Ver Detalhes"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      className="text-teal-500 hover:text-teal-600 cursor-pointer"
                      title="Baixar Receita"
                    >
                      <i className="fas fa-download"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL DETALHES DA PRESCRIÇÃO */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Prescrição"
          icon="fas fa-file-prescription"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* CABEÇALHO */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    João da Silva
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Prescrição Médica
                  </p>
                </div>

                <span className="px-4 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-800">
                  Ativa
                </span>
              </div>
            </div>

            {/* INFORMAÇÕES */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Medicamento</p>
                <p className="font-semibold text-slate-800">
                  Paracetamol 500mg
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Posologia</p>
                <p className="font-semibold text-slate-800">
                  1 comprimido a cada 8h
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Duração</p>
                <p className="font-semibold text-slate-800">
                  5 dias
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data</p>
                <p className="font-semibold text-slate-800">
                  18/01/2026
                </p>
              </div>
            </div>

            {/* OBSERVAÇÕES */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Observações
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Medicamento prescrito para alívio de dores leves a moderadas.
                Orientado não exceder a dose diária recomendada.
              </p>
            </div>

            {/* AÇÕES */}
            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium">
                Fechar
              </button>
              <button className="px-6 py-2 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold">
                Baixar Receita
              </button>
            </div>
          </div>
        </Modal>
      </EspecialistaLayout>
    </>
  );
}
