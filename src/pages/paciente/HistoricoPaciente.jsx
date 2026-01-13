// src/pages/HistoricoPaciente.jsx
import { Link } from "react-router-dom";
import PacienteLayout from "./components/PacienteLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function HistoricoPaciente() {
  const [openModal, setOpenModal] = useState(false);

  const dummyHistorico = [
    {
      id: 201,
      data: "10/11/2025",
      especialidade: "Clínica Geral",
      medico: "Dr. Carlos Silva",
      local: "Hospital Geral de Luanda",
      resultado: "Consulta Realizada",
    },
    {
      id: 202,
      data: "22/11/2025",
      especialidade: "Cardiologia",
      medico: "Dr. Paulo Mendes",
      local: "Hospital Central",
      resultado: "Exames Solicitados",
    },
    {
      id: 203,
      data: "05/12/2025",
      especialidade: "Pediatria",
      medico: "Dra. Ana Mendes",
      local: "Clínica Infantil",
      resultado: "Consulta Realizada",
    },
    {
      id: 204,
      data: "18/12/2025",
      especialidade: "Ginecologia",
      medico: "Dra. Sofia Costa",
      local: "Hospital Central",
      resultado: "Retorno Agendado",
    },
  ];

  const getResultadoColor = (resultado) => {
    switch (resultado) {
      case "Consulta Realizada":
        return "bg-green-600/20 text-green-800";
      case "Exames Solicitados":
        return "bg-blue-500/20 text-blue-800";
      case "Retorno Agendado":
        return "bg-yellow-400/30 text-yellow-800";
      default:
        return "bg-gray-300/20 text-gray-800";
    }
  };

  return (
    <PacienteLayout title="Histórico Clínico do Paciente">
      <>
      <title>Histórico Clínico | Dashboard Paciente</title>
        {/* CARD DE FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Buscar por médico ou especialidade..."
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
            />

            <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
              <option value="">Todas as Especialidades</option>
              <option>Clínica Geral</option>
              <option>Cardiologia</option>
              <option>Pediatria</option>
              <option>Ginecologia</option>
            </select>

            <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
              <option value="">Todos os Resultados</option>
              <option>Consulta Realizada</option>
              <option>Exames Solicitados</option>
              <option>Retorno Agendado</option>
            </select>
          </div>
        </div>

        {/* TABELA DE HISTÓRICO */}
        <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-225 w-full text-left border-collapse text-sm">
            <thead>
              <tr className="text-teal-700 border-b border-slate-200">
                <th className="p-3 whitespace-nowrap">ID</th>
                <th className="p-3 whitespace-nowrap">Data</th>
                <th className="p-3 whitespace-nowrap">Especialidade</th>
                <th className="p-3 whitespace-nowrap">Médico</th>
                <th className="p-3 whitespace-nowrap">Local</th>
                <th className="p-3 whitespace-nowrap">Resultado</th>
                <th className="p-3 text-center whitespace-nowrap">Ações</th>
              </tr>
            </thead>

            <tbody>
              {dummyHistorico.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-200/50 hover:bg-slate-50 transition"
                >
                  <td className="p-3 whitespace-nowrap">{item.id}</td>
                  <td className="p-3 whitespace-nowrap font-medium">
                    {item.data}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    {item.especialidade}
                  </td>
                  <td className="p-3 whitespace-nowrap">{item.medico}</td>
                  <td className="p-3 whitespace-nowrap">{item.local}</td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${getResultadoColor(
                        item.resultado
                      )}`}
                    >
                      {item.resultado}
                    </span>
                  </td>
                  <td className="p-3 text-center flex justify-center gap-4 text-base">
                    {/* Ver detalhes */}
                    <button
                      onClick={() => setOpenModal(true)}
                      className="text-blue-500 hover:text-blue-600 cursor-pointer"
                      title="Ver Detalhes"
                    >
                      <i className="fas fa-eye"></i>
                    </button>

                    {/* Baixar histórico */}
                    <button
                      className="text-teal-500 hover:text-teal-600 cursor-pointer"
                      title="Baixar Histórico"
                    >
                      <i className="fas fa-download"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINAÇÃO */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4 mt-4">
            <p className="opacity-70 text-xs sm:text-sm">
              Mostrando 1 a 4 de 40 registros
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
              <button className="px-3 py-1 bg-slate-50 border border-slate-300 rounded-lg text-sm hover:bg-slate-100 transition cursor-pointer">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Detalhes do Histórico Médico"
          icon="fas fa-file-medical"
        >
          <div className="max-w-3xl mx-auto">
            {/* Descrição */}
            <p className="text-slate-500 mb-8 text-center">
              Visualização detalhada do histórico clínico do paciente.
            </p>

            {/* Cards principais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 border border-teal-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fas fa-calendar-day text-teal-500"></i>
                  <span className="text-sm text-slate-500">
                    Data da Consulta
                  </span>
                </div>
                <p className="text-lg font-semibold text-slate-800">
                  10/11/2025
                </p>
              </div>

              <div className="bg-slate-50 border border-teal-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fas fa-stethoscope text-teal-500"></i>
                  <span className="text-sm text-slate-500">Especialidade</span>
                </div>
                <p className="text-lg font-semibold text-slate-800">
                  Clínica Geral
                </p>
              </div>

              <div className="bg-slate-50 border border-teal-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fas fa-user-md text-teal-500"></i>
                  <span className="text-sm text-slate-500">
                    Médico Responsável
                  </span>
                </div>
                <p className="text-lg font-semibold text-slate-800">
                  Dr. Carlos Silva
                </p>
              </div>

              <div className="bg-slate-50 border border-teal-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fas fa-hospital text-teal-500"></i>
                  <span className="text-sm text-slate-500">
                    Unidade de Saúde
                  </span>
                </div>
                <p className="text-lg font-semibold text-slate-800">
                  Hospital Geral de Luanda
                </p>
              </div>
            </div>

            {/* Status clínico */}
            <div className="bg-slate-50 border border-teal-200 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h4 className="text-lg font-bold text-teal-800">
                  Status Clínico
                </h4>
              </div>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/20 text-green-800 text-sm font-semibold">
                <i className="fas fa-check-circle"></i>
                Alta
              </span>

              {/* Para outro cenário, exemplo:
      <span className="bg-yellow-400/30 text-yellow-800">Em acompanhamento</span>
      */}
            </div>

            {/* Observações médicas */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white">
                  <i className="fas fa-notes-medical"></i>
                </div>
                <h4 className="text-lg font-bold text-teal-800">
                  Observações Médicas
                </h4>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Paciente apresentou evolução clínica positiva, sem
                intercorrências relevantes. Orientado repouso relativo,
                hidratação adequada e retorno imediato em caso de agravamento
                dos sintomas.
              </p>
            </div>

            {/* Anexos / Exames */}
            <div className="bg-slate-50 border border-teal-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white">
                  <i className="fas fa-paperclip"></i>
                </div>
                <h4 className="text-lg font-bold text-teal-800">
                  Anexos e Exames
                </h4>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3">
                  <span className="flex items-center gap-3 text-slate-700">
                    <i className="fas fa-file-pdf text-red-500"></i>
                    Exame_de_Sangue.pdf
                  </span>
                  <button className="text-teal-500 hover:text-teal-600 font-semibold text-sm">
                    Baixar
                  </button>
                </li>

                <li className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3">
                  <span className="flex items-center gap-3 text-slate-700">
                    <i className="fas fa-file-image text-blue-500"></i>
                    Raio_X_Torax.png
                  </span>
                  <button className="text-teal-500 hover:text-teal-600 font-semibold text-sm">
                    Baixar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </>
    </PacienteLayout>
  );
}
