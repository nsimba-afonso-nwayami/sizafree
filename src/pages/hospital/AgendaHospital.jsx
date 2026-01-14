import HospitalLayout from "./components/HospitalLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function AgendaHospital() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyAgenda = [
    {
      id: 601,
      data: "20/01/2026",
      horario: "09:00",
      paciente: "João da Silva",
      medico: "Dr. Carlos Mendes",
      especialidade: "Clínica Geral",
      tipo: "Presencial",
      status: "Confirmada",
      observacoes:
        "Paciente com histórico de hipertensão, acompanhamento necessário.",
    },
    {
      id: 602,
      data: "20/01/2026",
      horario: "11:30",
      paciente: "Maria Oliveira",
      medico: "Dra. Ana Ribeiro",
      especialidade: "Cardiologia",
      tipo: "Online",
      status: "Pendente",
      observacoes: "Primeira consulta, avaliação inicial.",
    },
    {
      id: 603,
      data: "21/01/2026",
      horario: "15:00",
      paciente: "Carlos Santos",
      medico: "Dr. Paulo Lima",
      especialidade: "Ortopedia",
      tipo: "Presencial",
      status: "Cancelada",
      observacoes: "Consulta cancelada pelo paciente.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmada":
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
      <title>Agenda de Consultas | Dashboard Hospital</title>

      <HospitalLayout title="Agenda de Consultas">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente, médico ou especialidade..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Confirmada</option>
            <option>Pendente</option>
            <option>Cancelada</option>
          </select>
        </div>

        {/* LISTA DE CONSULTAS */}
        <div className="flex flex-col gap-4">
          {dummyAgenda.map((consulta) => (
            <div
              key={consulta.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-teal-800">
                  {consulta.data} • {consulta.horario}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    consulta.status
                  )}`}
                >
                  {consulta.status}
                </span>
              </div>

              <p className="text-slate-800 font-medium">
                Paciente:{" "}
                <span className="text-slate-600">{consulta.paciente}</span>
              </p>

              <p className="text-slate-800 font-medium">
                Médico:{" "}
                <span className="text-slate-600">{consulta.medico}</span>
              </p>

              <p className="text-slate-600 text-sm">
                {consulta.especialidade} • {consulta.tipo}
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                {consulta.status === "Pendente" && (
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
          title="Detalhes da Consulta"
          icon="fas fa-calendar-check"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                João da Silva
              </h2>
              <p className="text-slate-500">
                Dr. Carlos Mendes • Clínica Geral
              </p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Confirmada
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Data</p>
                <p className="font-semibold text-slate-800">20/01/2026</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Horário</p>
                <p className="font-semibold text-slate-800">09:00</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Tipo</p>
                <p className="font-semibold text-slate-800">Presencial</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-semibold text-slate-800">Confirmada</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Observações
              </h3>
              <p className="text-slate-600">
                Paciente com histórico de hipertensão, acompanhamento
                necessário.
              </p>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer">
                Fechar
              </button>
            </div>
          </div>
        </Modal>
      </HospitalLayout>
    </>
  );
}
