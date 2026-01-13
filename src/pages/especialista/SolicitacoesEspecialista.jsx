import EspecialistaLayout from "./components/EspecialistaLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./components/Modal";

export default function SolicitacoesEspecialista() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <title>Solicitações | Dashboard Especialista</title>

      <EspecialistaLayout title="Solicitações">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Buscar por paciente ou especialidade..."
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 flex-1"
            />

            <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
              <option value="">Todos os Status</option>
              <option>Pendente</option>
              <option>Aceita</option>
              <option>Recusada</option>
            </select>
          </div>
        </div>

        {/* TABELA */}
        <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-teal-800">
                <th className="p-3 text-left">Paciente</th>
                <th className="p-3 text-left">Especialidade</th>
                <th className="p-3 text-left">Data</th>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Ações</th>
              </tr>
            </thead>

            <tbody>
              {/* SOLICITAÇÃO PENDENTE */}
              <tr className="border-b border-slate-200/50 hover:bg-slate-50 transition">
                <td className="p-3 font-medium text-slate-800">
                  António Manuel
                </td>
                <td className="p-3 text-slate-600">Cardiologia</td>
                <td className="p-3 text-slate-600">18/02/2026</td>
                <td className="p-3 text-slate-600">Presencial</td>
                <td className="p-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-yellow-400/30 text-yellow-800">
                    Pendente
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex justify-center items-center gap-2">
                    <button className="px-3 py-1 cursor-pointer text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                      Aceitar
                    </button>

                    <button className="px-3 py-1 cursor-pointer text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg">
                      Recusar
                    </button>

                    <button
                      onClick={() => setOpenModal(true)}
                      title="Ver detalhes"
                      className="text-blue-500 hover:text-blue-600 text-lg cursor-pointer"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>

              {/* SOLICITAÇÃO ACEITA */}
              <tr className="border-b border-slate-200/50 hover:bg-slate-50 transition">
                <td className="p-3 font-medium text-slate-800">
                  Maria dos Santos
                </td>
                <td className="p-3 text-slate-600">Clínica Geral</td>
                <td className="p-3 text-slate-600">20/02/2026</td>
                <td className="p-3 text-slate-600">Online</td>
                <td className="p-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-green-600/20 text-green-800">
                    Aceita
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => setOpenModal(true)}
                    title="Ver detalhes"
                    className="text-blue-500 hover:text-blue-600 text-lg cursor-pointer"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </td>
              </tr>

              {/* SOLICITAÇÃO RECUSADA */}
              <tr className="hover:bg-slate-50 transition">
                <td className="p-3 font-medium text-slate-800">
                  João Ferreira
                </td>
                <td className="p-3 text-slate-600">Ortopedia</td>
                <td className="p-3 text-slate-600">22/02/2026</td>
                <td className="p-3 text-slate-600">Presencial</td>
                <td className="p-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-red-600/20 text-red-800">
                    Recusada
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => setOpenModal(true)}
                    title="Ver detalhes"
                    className="text-blue-500 hover:text-blue-600 text-lg cursor-pointer"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Detalhes da Solicitação"
          icon="fas fa-inbox"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* CABEÇALHO */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-teal-50 border border-teal-200 rounded-xl p-6">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgJ1FO3FHIR9B-BULDxnMCDBg19lJSDqozeZ9GvQyMZVwc1D01Ck1GVRNjOCUW"
                alt="Paciente"
                className="w-24 h-24 rounded-full border-4 border-teal-500 object-cover"
              />

              <div className="flex-1 space-y-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-800">
                  António Manuel
                </h2>
                <p className="text-slate-500 text-sm">
                  Pedido de consulta médica
                </p>

                <span className="inline-block mt-2 px-4 py-1 rounded-full text-xs font-semibold bg-yellow-400/30 text-yellow-800">
                  Pendente
                </span>
              </div>
            </div>

            {/* INFORMAÇÕES DA SOLICITAÇÃO */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Especialidade</p>
                <p className="font-semibold text-slate-800">Cardiologia</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Tipo de Atendimento</p>
                <p className="font-semibold text-slate-800">Presencial</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data Preferencial</p>
                <p className="font-semibold text-slate-800">18/02/2026</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Horário Preferencial</p>
                <p className="font-semibold text-slate-800">Manhã</p>
              </div>
            </div>

            {/* MOTIVO / DESCRIÇÃO */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Motivo da Consulta
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Paciente relata dores no peito recorrentes, sensação de fadiga
                excessiva e histórico familiar de problemas cardíacos. Solicita
                avaliação especializada.
              </p>
            </div>

            {/* AÇÕES */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
              <button className="px-6 py-2 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition">
                Recusar
              </button>

              <button className="px-6 py-2 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition">
                Aceitar Solicitação
              </button>
            </div>
          </div>
        </Modal>
      </EspecialistaLayout>
    </>
  );
}
