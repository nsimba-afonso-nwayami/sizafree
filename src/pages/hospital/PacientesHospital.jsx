import HospitalLayout from "./components/HospitalLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function PacientesHospital() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  // Lista de pacientes dummy
  const pacientes = [
    {
      id: 1,
      nome: "Maria dos Santos",
      idade: 32,
      sexo: "Feminino",
      status: "Internado",
      especialidade: "Clínica Geral",
      leito: "A101",
      observacoes: "Paciente com hipertensão, monitorar pressão arterial.",
    },
    {
      id: 2,
      nome: "João Manuel",
      idade: 45,
      sexo: "Masculino",
      status: "Alta prevista",
      especialidade: "Cardiologia",
      leito: "B202",
      observacoes: "Recuperação pós-cirurgia cardíaca.",
    },
    {
      id: 3,
      nome: "Ana Ribeiro",
      idade: 5,
      sexo: "Feminino",
      status: "Internado",
      especialidade: "Pediatria",
      leito: "C303",
      observacoes: "Paciente com febre alta, em observação.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Internado":
        return "bg-teal-500/20 text-teal-800";
      case "Alta prevista":
        return "bg-yellow-400/30 text-yellow-800";
      case "Alta":
        return "bg-green-600/20 text-green-800";
      default:
        return "bg-slate-300/20 text-slate-800";
    }
  };

  return (
    <>
      <title>Pacientes | Dashboard Hospital</title>
      <HospitalLayout title="Pacientes">
        {/* PESQUISA E FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />
          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Internado</option>
            <option>Alta prevista</option>
            <option>Alta</option>
          </select>
        </div>

        {/* LISTA DE PACIENTES */}
        <div className="flex flex-col gap-4">
          {pacientes.map((paciente) => (
            <div
              key={paciente.id}
              className="bg-white border border-teal-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-2 items-center">
                <div>
                  <p className="font-medium text-slate-800">{paciente.nome}</p>
                  <p className="text-sm text-slate-500">
                    {paciente.especialidade} • {paciente.leito}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(
                    paciente.status
                  )}`}
                >
                  {paciente.status}
                </span>
              </div>
              <div className="flex justify-between mt-3 items-center">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="px-3 py-1 cursor-pointer text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES DO PACIENTE */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Paciente"
          icon="fas fa-user-injured"
        >
          {/* Exemplo com o primeiro paciente */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-teal-50 border border-teal-200 rounded-xl p-6">
              <div className="flex-1 space-y-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-800">
                  {pacientes[0].nome}
                </h2>
                <p className="text-slate-500 text-sm">
                  {pacientes[0].especialidade} • {pacientes[0].leito}
                </p>
                <span
                  className={`inline-block mt-2 px-4 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    pacientes[0].status
                  )}`}
                >
                  {pacientes[0].status}
                </span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Idade</p>
                <p className="font-semibold text-slate-800">
                  {pacientes[0].idade}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Sexo</p>
                <p className="font-semibold text-slate-800">
                  {pacientes[0].sexo}
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Observações
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {pacientes[0].observacoes}
              </p>
            </div>
          </div>
        </Modal>
      </HospitalLayout>
    </>
  );
}
