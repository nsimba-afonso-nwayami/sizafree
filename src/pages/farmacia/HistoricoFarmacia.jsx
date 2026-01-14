import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function HistoricoFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const historicoDummy = [
    {
      id: 301,
      paciente: "João da Silva",
      medicamento: "Amoxicilina 500mg",
      quantidade: "21 cápsulas",
      data: "20/01/2026",
      status: "Atendida",
      medico: "Dr. Carlos Mendes",
    },
    {
      id: 302,
      paciente: "Maria Oliveira",
      medicamento: "Ibuprofeno 400mg",
      quantidade: "15 comprimidos",
      data: "18/01/2026",
      status: "Atendida",
      medico: "Dra. Ana Ribeiro",
    },
    {
      id: 303,
      paciente: "Carlos Santos",
      medicamento: "Losartana 50mg",
      quantidade: "30 comprimidos",
      data: "17/01/2026",
      status: "Cancelada",
      medico: "Dr. Paulo Lima",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Atendida":
        return "bg-green-600/20 text-green-800";
      case "Pendente":
        return "bg-yellow-400/30 text-yellow-800";
      case "Cancelada":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Histórico | Dashboard Farmácia</title>

      <FarmaciaLayout title="Histórico de Dispensações">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente ou medicamento..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Atendida</option>
            <option>Pendente</option>
            <option>Cancelada</option>
          </select>

          <input
            type="date"
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>

        {/* LISTA DE HISTÓRICO */}
        <div className="flex flex-col gap-4">
          {historicoDummy.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">
                    {item.medicamento}
                  </p>
                  <p className="text-slate-500 text-sm">
                    Paciente: {item.paciente}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm">
                Quantidade:{" "}
                <span className="font-medium">{item.quantidade}</span>
              </p>

              <p className="text-slate-600 text-sm">
                Data: <span className="font-medium">{item.data}</span>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Dispensação"
          icon="fas fa-pills"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Amoxicilina 500mg
              </h2>
              <p className="text-slate-500">Prescrito por Dr. Carlos Mendes</p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Atendida
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Paciente</p>
                <p className="font-semibold text-slate-800">João da Silva</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Quantidade</p>
                <p className="font-semibold text-slate-800">21 cápsulas</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data</p>
                <p className="font-semibold text-slate-800">20/01/2026</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-semibold text-slate-800">Atendida</p>
              </div>
            </div>

            <div className="flex justify-end">
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
