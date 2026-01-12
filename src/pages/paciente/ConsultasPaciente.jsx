import { Link } from "react-router-dom";
import PacienteLayout from "./components/PacienteLayout";
import { useState } from "react";
import Modal from "./components/Modal";
import SmallModal from "./components/SmallModal";

export default function ConsultasPaciente() {
  const [openModal, setOpenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

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

            <button
              onClick={() => setOpenModal(true)}
              className="px-5 py-2 bg-teal-500 hover:bg-teal-600 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 text-white cursor-pointer"
            >
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
                    onClick={() => setOpenConfirm(true)}
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

      {/* Modal de Agendamento */}
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Agendar Consulta"
        icon="fas fa-calendar-alt"
      >
        <div className="max-w-3xl mx-auto h-full">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
            Dados da Consulta
          </h3>
          <p className="text-slate-500 mb-8 text-center">
            Preencha corretamente as informações abaixo para concluir o
            agendamento da sua consulta.
          </p>

          <form className="grid gap-6 pb-12">
            {" "}
            {/* pb extra para scroll */}
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="Ex: 9XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Especialista
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              >
                <option value="">Selecione o especialista</option>
                <option>Dr. Carlos Silva – Clínico Geral</option>
                <option>Dra. Ana Mendes – Pediatra</option>
                <option>Dr. João Pires – Cardiologista</option>
                <option>Dra. Sofia Costa – Ginecologista</option>
                <option>Dr. Miguel Rocha – Ortopedista</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Unidade de Saúde
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              >
                <option value="">Selecione a unidade</option>
                <option>Hospital Geral de Luanda</option>
                <option>Hospital Josina Machel</option>
                <option>Hospital Militar Principal</option>
                <option>Hospital Divina Providência</option>
                <option>Clínica Girassol</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Data da Consulta
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Horário
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-lg transition cursor-pointer"
            >
              Confirmar Agendamento
            </button>
          </form>
        </div>
      </Modal>

      <SmallModal
        isOpen={openConfirm}
        onClose={() => setOpenConfirm(false)}
        title="Cancelar"
        icon="fas fa-exclamation-triangle"
      >
        <p className="mb-6 text-slate-700">
          Tem certeza que deseja cancelar a sua consulta?
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition">
            Sim
          </button>
          <button
            onClick={() => setOpenConfirm(false)}
            className="px-6 py-2 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition"
          >
            Não
          </button>
        </div>
      </SmallModal>
    </PacienteLayout>
  );
}
