import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function AgendaFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const agendaDummy = [
    {
      id: 201,
      paciente: "João da Silva",
      medicamento: "Amoxicilina 500mg",
      horario: "09:30",
      data: "20/01/2026",
      status: "Confirmado",
    },
    {
      id: 202,
      paciente: "Maria Oliveira",
      medicamento: "Ibuprofeno 400mg",
      horario: "11:00",
      data: "20/01/2026",
      status: "Pendente",
    },
    {
      id: 203,
      paciente: "Carlos Santos",
      medicamento: "Losartana 50mg",
      horario: "15:00",
      data: "20/01/2026",
      status: "Cancelado",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmado":
        return "bg-green-600/20 text-green-800";
      case "Pendente":
        return "bg-yellow-400/30 text-yellow-800";
      case "Cancelado":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Agenda de Atendimentos | Dashboard Farmácia</title>

      <FarmaciaLayout title="Agenda de Atendimentos">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente ou medicamento..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Confirmado</option>
            <option>Pendente</option>
            <option>Cancelado</option>
          </select>

          <input
            type="date"
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>

        {/* LISTA DE ATENDIMENTOS */}
        <div className="flex flex-col gap-4">
          {agendaDummy.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">{item.paciente}</p>
                  <p className="text-slate-500 text-sm">{item.medicamento}</p>
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
                Data: <span className="font-medium">{item.data}</span>
              </p>

              <p className="text-slate-600 text-sm">
                Horário: <span className="font-medium">{item.horario}</span>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                {item.status === "Pendente" && (
                  <div className="flex gap-2">
                    <button className="px-4 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                      Confirmar
                    </button>
                    <button className="px-4 py-1 text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer">
                      Cancelar
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
          title="Detalhes do Atendimento"
          icon="fas fa-calendar-check"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                João da Silva
              </h2>
              <p className="text-slate-500">Amoxicilina 500mg</p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Confirmado
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Data</p>
                <p className="font-semibold text-slate-800">20/01/2026</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Horário</p>
                <p className="font-semibold text-slate-800">09:30</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Medicamento</p>
                <p className="font-semibold text-slate-800">
                  Amoxicilina 500mg
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-semibold text-slate-800">Confirmado</p>
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
