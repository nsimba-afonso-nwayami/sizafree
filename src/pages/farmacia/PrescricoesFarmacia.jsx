import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function PrescricoesFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const prescricoesDummy = [
    {
      id: 501,
      paciente: "João da Silva",
      medico: "Dr. Carlos Mendes",
      data: "20/01/2026",
      medicamentos: "Amoxicilina 500mg, Paracetamol 500mg",
      status: "Pendente",
      arquivo: "prescricao_joao.pdf",
    },
    {
      id: 502,
      paciente: "Maria Oliveira",
      medico: "Dra. Ana Ribeiro",
      data: "19/01/2026",
      medicamentos: "Ibuprofeno 400mg",
      status: "Atendida",
      arquivo: "prescricao_maria.pdf",
    },
    {
      id: 503,
      paciente: "Carlos Santos",
      medico: "Dr. Paulo Lima",
      data: "18/01/2026",
      medicamentos: "Losartana 50mg",
      status: "Cancelada",
      arquivo: "prescricao_carlos.pdf",
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
      <title>Prescrições | Dashboard Farmácia</title>

      <FarmaciaLayout title="Prescrições">
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
            <option>Atendida</option>
            <option>Cancelada</option>
          </select>
        </div>

        {/* LISTA DE PRESCRIÇÕES */}
        <div className="flex flex-col gap-4">
          {prescricoesDummy.map((prescricao) => (
            <div
              key={prescricao.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">
                    {prescricao.paciente}
                  </p>
                  <p className="text-slate-500 text-sm">
                    Médico: {prescricao.medico}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    prescricao.status
                  )}`}
                >
                  {prescricao.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-1">
                Medicamentos:
                <span className="font-medium"> {prescricao.medicamentos}</span>
              </p>

              <p className="text-slate-500 text-sm">Data: {prescricao.data}</p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                <div className="flex gap-2">
                  <button className="px-4 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer flex items-center gap-1">
                    <i className="fas fa-download"></i> Baixar
                  </button>

                  {prescricao.status === "Pendente" && (
                    <button className="px-4 py-1 text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer">
                      Marcar como Atendida
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Prescrição"
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

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">
                Medicamentos Prescritos
              </h3>

              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Amoxicilina 500mg — 1 comprimido de 8/8h</li>
                <li>• Paracetamol 500mg — 1 comprimido de 12/12h</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                Marcar como Atendida
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
