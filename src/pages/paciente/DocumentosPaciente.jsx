import { useState } from "react";
import { Link } from "react-router-dom";
import PacienteLayout from "./components/PacienteLayout";
import Modal from "./components/Modal";

export default function DocumentosPaciente() {
  const [openDocumento, setOpenDocumento] = useState(false);

  return (
    <PacienteLayout title="Documentos do Paciente">
      {/* CARD DE PESQUISA E FILTROS */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar documento por nome ou tipo..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Tipos</option>
            <option>Receita Médica</option>
            <option>Exame</option>
            <option>Relatório</option>
            <option>Atestado</option>
          </select>
        </div>
      </div>

      {/* CARD DA TABELA DE DOCUMENTOS */}
      <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
        <table className="min-w-full text-left border-collapse text-sm">
          <thead>
            <tr className="text-teal-700 border-b border-slate-200">
              <th className="p-3">Documento</th>
              <th className="p-3">Tipo</th>
              <th className="p-3">Data</th>
              <th className="p-3 text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-200/50 hover:bg-slate-50 transition">
              <td className="p-3 flex items-center gap-3">
                <i className="fas fa-file-pdf text-red-500 text-lg"></i>
                <span className="font-medium text-slate-800">
                  Exame_de_Sangue.pdf
                </span>
              </td>
              <td className="p-3 text-slate-600">Exame</td>
              <td className="p-3 text-slate-600">15/10/2025</td>
              <td className="p-3 flex justify-center gap-4 text-lg">
                <button
                  onClick={() => setOpenDocumento(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  title="Visualizar"
                >
                  <i className="fas fa-eye"></i>
                </button>
                <button
                  className="text-teal-500 hover:text-teal-600 cursor-pointer"
                  title="Baixar"
                >
                  <i className="fas fa-download"></i>
                </button>
              </td>
            </tr>

            <tr className="border-b border-slate-200/50 hover:bg-slate-50 transition">
              <td className="p-3 flex items-center gap-3">
                <i className="fas fa-file-alt text-slate-500 text-lg"></i>
                <span className="font-medium text-slate-800">
                  Relatorio_Clinico.docx
                </span>
              </td>
              <td className="p-3 text-slate-600">Relatório</td>
              <td className="p-3 text-slate-600">02/09/2025</td>
              <td className="p-3 flex justify-center gap-4 text-lg">
                <button
                  onClick={() => setOpenDocumento(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  title="Visualizar"
                >
                  <i className="fas fa-eye"></i>
                </button>
                <button
                  className="text-teal-500 hover:text-teal-600 cursor-pointer"
                  title="Baixar"
                >
                  <i className="fas fa-download"></i>
                </button>
              </td>
            </tr>

            <tr className="hover:bg-slate-50 transition">
              <td className="p-3 flex items-center gap-3">
                <i className="fas fa-file-medical text-teal-500 text-lg"></i>
                <span className="font-medium text-slate-800">
                  Receita_Medica.pdf
                </span>
              </td>
              <td className="p-3 text-slate-600">Receita Médica</td>
              <td className="p-3 text-slate-600">28/08/2025</td>
              <td className="p-3 flex justify-center gap-4 text-lg">
                <button
                  onClick={() => setOpenDocumento(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  title="Visualizar"
                >
                  <i className="fas fa-eye"></i>
                </button>
                <button
                  className="text-teal-500 hover:text-teal-600 cursor-pointer"
                  title="Baixar"
                >
                  <i className="fas fa-download"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MODAL DE VISUALIZAÇÃO DO DOCUMENTO */}
      <Modal
        isOpen={openDocumento}
        onClose={() => setOpenDocumento(false)}
        title="Visualização do Documento"
        icon="fas fa-file-medical"
      >
        <div className="max-w-4xl mx-auto">
          {/* Info */}
          <div className="bg-teal-200/40 rounded-xl p-5 mb-6 flex items-center gap-4">
            <i className="fas fa-file-pdf text-red-500 text-4xl"></i>
            <div>
              <h3 className="text-lg font-bold text-teal-800">
                Exame_de_Sangue.pdf
              </h3>
              <p className="text-sm text-slate-500">
                Tipo: Exame • Data: 15/10/2025
              </p>
            </div>
          </div>

          {/* Visualização */}
          <div className="bg-slate-50 border border-teal-200 rounded-xl h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-file-pdf text-red-400 text-6xl mb-4"></i>
              <p className="text-slate-500">Pré-visualização do documento</p>
              <p className="text-xs text-slate-400 mt-2">
                (Viewer real pode ser integrado futuramente)
              </p>
            </div>
          </div>

          {/* Ações */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => setOpenDocumento(false)}
              className="px-5 py-2 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition"
            >
              Fechar
            </button>
            <button className="px-5 py-2 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition">
              <i className="fas fa-download mr-2"></i>
              Baixar Documento
            </button>
          </div>
        </div>
      </Modal>
    </PacienteLayout>
  );
}
