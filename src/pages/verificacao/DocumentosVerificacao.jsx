import VerificacaoLayout from "./components/VerificacaoLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function DocumentosVerificacao() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyDocumentos = [
    {
      id: 601,
      entidade: "Hospital Geral de Luanda",
      tipoEntidade: "Hospital",
      documento: "Alvará de Funcionamento",
      status: "Pendente",
      dataEnvio: "Hoje",
      responsavel: "Direção Administrativa",
    },
    {
      id: 602,
      entidade: "Farmácia Vida",
      tipoEntidade: "Farmácia",
      documento: "Licença Sanitária",
      status: "Aprovado",
      dataEnvio: "Ontem",
      responsavel: "Gestor Responsável",
    },
    {
      id: 603,
      entidade: "Dr. Carlos Mendes",
      tipoEntidade: "Especialista",
      documento: "Cédula Profissional",
      status: "Rejeitado",
      dataEnvio: "Há 2 dias",
      responsavel: "Dr. Carlos Mendes",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Aprovado":
        return "bg-green-600/20 text-green-800";
      case "Pendente":
        return "bg-yellow-500/20 text-yellow-800";
      case "Rejeitado":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Documentos | Dashboard Verificação</title>

      <VerificacaoLayout title="Verificação de Documentos">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por entidade ou documento..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Tipos</option>
            <option>Hospital</option>
            <option>Farmácia</option>
            <option>Especialista</option>
            <option>Laboratório</option>
          </select>

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Pendente</option>
            <option>Aprovado</option>
            <option>Rejeitado</option>
          </select>
        </div>

        {/* LISTA DE DOCUMENTOS */}
        <div className="flex flex-col gap-4">
          {dummyDocumentos.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">{doc.documento}</p>
                  <p className="text-slate-500 text-sm">
                    {doc.entidade} • {doc.tipoEntidade}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    doc.status,
                  )}`}
                >
                  {doc.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm">
                Responsável:{" "}
                <span className="font-medium">{doc.responsavel}</span> • Enviado{" "}
                {doc.dataEnvio}
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-file-alt"></i> Ver Documento
                </button>

                {doc.status === "Pendente" && (
                  <div className="flex gap-2">
                    <button className="px-4 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                      Aprovar
                    </button>
                    <button className="px-4 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg cursor-pointer">
                      Rejeitar
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES DO DOCUMENTO */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Documento"
          icon="fas fa-file-alt"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Alvará de Funcionamento
              </h2>
              <p className="text-slate-500">
                Hospital Geral de Luanda • Hospital
              </p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-800">
                Pendente
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Responsável</p>
                <p className="font-semibold text-slate-800">
                  Direção Administrativa
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data de Submissão</p>
                <p className="font-semibold text-slate-800">Hoje</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-slate-500 mb-2">
                  Visualização do Documento
                </p>
                <div className="border border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-500">
                  <i className="fas fa-file-pdf text-3xl mb-2"></i>
                  <p>Documento.pdf</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenDetalhes(false)}
                className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer"
              >
                Fechar
              </button>
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                Aprovar Documento
              </button>
            </div>
          </div>
        </Modal>
      </VerificacaoLayout>
    </>
  );
}
