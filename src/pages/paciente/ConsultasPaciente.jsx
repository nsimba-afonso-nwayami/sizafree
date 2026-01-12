import { Link } from "react-router-dom";
import PacienteLayout from "./components/PacienteLayout";

export default function ConsultasPaciente() {
  const dummyConsultas = [
    {
      id: 101,
      data: "20/01/2026",
      especialidade: "Cardiologia",
      medico: "Dr. Paulo Mendes",
      local: "Hospital Central",
      status: "Confirmada",
    },
    {
      id: 102,
      data: "28/01/2026",
      especialidade: "Clínica Geral",
      medico: "Dra. Ana Silva",
      local: "Clínica Vida",
      status: "Pendente",
    },
    {
      id: 103,
      data: "05/02/2026",
      especialidade: "Pediatria",
      medico: "Dr. João Pires",
      local: "Clínica Infantil",
      status: "Confirmada",
    },
    {
      id: 104,
      data: "10/02/2026",
      especialidade: "Ginecologia",
      medico: "Dra. Sofia Costa",
      local: "Hospital Central",
      status: "Cancelada",
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
        return "bg-gray-300/20 text-gray-800";
    }
  };

  return (
    <PacienteLayout title="Consultas do Paciente">
      {/* CARD DE PESQUISA E FILTROS */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Buscar por médico ou local..."
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
            />

            <button className="px-5 py-2 bg-teal-500 hover:bg-teal-600 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 text-white cursor-pointer">
              <i className="fas fa-calendar-plus"></i>
              Agendar Nova Consulta
            </button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <p className="text-sm opacity-70">Filtrar por:</p>

            <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
              <option value="">Todas as Especialidades</option>
              <option>Clínica Geral</option>
              <option>Pediatria</option>
              <option>Cardiologia</option>
              <option>Ginecologia</option>
              <option>Ortopedia</option>
              <option>Neurologia</option>
            </select>

            <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
              <option value="">Todos os Status</option>
              <option>Confirmada</option>
              <option>Pendente</option>
              <option>Cancelada</option>
            </select>
          </div>
        </div>
      </div>

      {/* CARD DE TABELA DE CONSULTAS */}
      <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
        <table className="min-w-225 w-full text-left border-collapse text-sm">
          <thead>
            <tr className="text-teal-700 border-b border-slate-200">
              <th className="p-3 whitespace-nowrap">ID</th>
              <th className="p-3 whitespace-nowrap">Data</th>
              <th className="p-3 whitespace-nowrap">Especialidade</th>
              <th className="p-3 whitespace-nowrap">Médico</th>
              <th className="p-3 whitespace-nowrap">Local</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 text-center whitespace-nowrap">Ações</th>
            </tr>
          </thead>

          <tbody>
            {dummyConsultas.map((consulta) => (
              <tr
                key={consulta.id}
                className="border-b border-slate-200/50 hover:bg-slate-50 transition"
              >
                <td className="p-3 whitespace-nowrap">{consulta.id}</td>
                <td className="p-3 whitespace-nowrap font-medium">
                  {consulta.data}
                </td>
                <td className="p-3 whitespace-nowrap">
                  {consulta.especialidade}
                </td>
                <td className="p-3 whitespace-nowrap">{consulta.medico}</td>
                <td className="p-3 whitespace-nowrap">{consulta.local}</td>
                <td className="p-3 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                      consulta.status
                    )}`}
                  >
                    {consulta.status}
                  </span>
                </td>
                <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                  <Link
                    to="/dashboard/paciente/consulta/detalhes"
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    title="Ver Detalhes"
                  >
                    <i className="fas fa-eye"></i>
                  </Link>

                  <button
                    className="text-red-400 hover:text-red-500 cursor-pointer"
                    title="Cancelar Consulta"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginação */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4 mt-4">
          <p className="opacity-70 text-xs sm:text-sm">
            Mostrando 1 a 4 de 120 consultas
          </p>

          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-50 border border-slate-300 rounded-lg text-sm hover:bg-slate-100 transition cursor-pointer">
              <i className="fas fa-chevron-left"></i>
            </button>

            <button className="px-4 py-1 bg-teal-500 rounded-lg text-sm font-bold text-white cursor-pointer">
              1
            </button>
            <button className="px-4 py-1 bg-slate-50 border border-slate-300 rounded-lg text-sm hover:bg-slate-100 transition cursor-pointer">
              2
            </button>
            <button className="px-4 py-1 bg-slate-50 border border-slate-300 rounded-lg text-sm hover:bg-slate-100 transition cursor-pointer">
              3
            </button>

            <button className="px-3 py-1 bg-slate-50 border border-slate-300 rounded-lg text-sm hover:bg-slate-100 transition cursor-pointer">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </PacienteLayout>
  );
}
