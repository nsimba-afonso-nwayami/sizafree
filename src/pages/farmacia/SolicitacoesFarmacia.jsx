import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function SolicitacoesFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const solicitacoesDummy = [
    {
      id: 301,
      paciente: "João da Silva",
      medico: "Dr. Carlos Mendes",
      medicamento: "Amoxicilina 500mg",
      quantidade: "20 comprimidos",
      data: "20/01/2026",
      status: "Pendente",
    },
    {
      id: 302,
      paciente: "Maria Oliveira",
      medico: "Dra. Ana Ribeiro",
      medicamento: "Ibuprofeno 400mg",
      quantidade: "10 comprimidos",
      data: "19/01/2026",
      status: "Confirmada",
    },
    {
      id: 303,
      paciente: "Carlos Santos",
      medico: "Dr. Paulo Lima",
      medicamento: "Losartana 50mg",
      quantidade: "30 comprimidos",
      data: "18/01/2026",
      status: "Recusada",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmada":
        return "bg-green-600/20 text-green-800";
      case "Pendente":
        return "bg-yellow-400/30 text-yellow-800";
      case "Recusada":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Solicitações | Dashboard Farmácia</title>

      <FarmaciaLayout title="Solicitações">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente, médico ou medicamento..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Pendente</option>
            <option>Confirmada</option>
            <option>Recusada</option>
          </select>
        </div>

        {/* LISTA DE SOLICITAÇÕES */}
        <div className="flex flex-col gap-4">
          {solicitacoesDummy.map((sol) => (
            <div
              key={sol.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">{sol.paciente}</p>
                  <p className="text-slate-500 text-sm">Médico: {sol.medico}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    sol.status
                  )}`}
                >
                  {sol.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm">
                Medicamento:{" "}
                <span className="font-medium">{sol.medicamento}</span>
              </p>

              <p className="text-slate-600 text-sm">
                Quantidade:{" "}
                <span className="font-medium">{sol.quantidade}</span>
              </p>

              <p className="text-slate-500 text-sm">
                Data da solicitação: {sol.data}
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                {sol.status === "Pendente" && (
                  <div className="flex gap-2">
                    <button className="px-4 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                      Aceitar
                    </button>
                    <button className="px-4 py-1 text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer">
                      Recusar
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Solicitação"
          icon="fas fa-file-prescription"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                João da Silva
              </h2>
              <p className="text-slate-500">Dr. Carlos Mendes</p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-yellow-400/30 text-yellow-800">
                Pendente
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Medicamento</p>
                <p className="font-semibold text-slate-800">
                  Amoxicilina 500mg
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Quantidade</p>
                <p className="font-semibold text-slate-800">20 comprimidos</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data</p>
                <p className="font-semibold text-slate-800">20/01/2026</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-semibold text-slate-800">Pendente</p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                Aceitar Solicitação
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
      </FarmaciaLayout>
    </>
  );
}
