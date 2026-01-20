import VerificacaoLayout from "./components/VerificacaoLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function HistoricoVerificacao() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyHistorico = [
    {
      id: 701,
      entidade: "Hospital Geral de Luanda",
      tipoEntidade: "Hospital",
      acao: "Documento Aprovado",
      documento: "Alvará de Funcionamento",
      status: "Aprovado",
      data: "Hoje • 10:32",
      verificador: "Admin Sisa",
    },
    {
      id: 702,
      entidade: "Farmácia Vida",
      tipoEntidade: "Farmácia",
      acao: "Documento Rejeitado",
      documento: "Licença Sanitária",
      status: "Rejeitado",
      data: "Ontem • 16:10",
      verificador: "Admin Sisa",
    },
    {
      id: 703,
      entidade: "Dr. Carlos Mendes",
      tipoEntidade: "Especialista",
      acao: "Perfil Aprovado",
      documento: "Cédula Profissional",
      status: "Aprovado",
      data: "Há 2 dias • 09:45",
      verificador: "Supervisor",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Aprovado":
        return "bg-green-600/20 text-green-800";
      case "Rejeitado":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Histórico | Dashboard Verificação</title>

      <VerificacaoLayout title="Histórico de Verificação">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por entidade, documento ou ação..."
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
            <option>Aprovado</option>
            <option>Rejeitado</option>
          </select>
        </div>

        {/* LISTA DE HISTÓRICO */}
        <div className="flex flex-col gap-4">
          {dummyHistorico.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">{item.acao}</p>
                  <p className="text-slate-500 text-sm">
                    {item.entidade} • {item.tipoEntidade}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    item.status,
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm">
                Documento: <span className="font-medium">{item.documento}</span>
              </p>

              <p className="text-slate-500 text-xs mt-1">
                {item.data} • Verificado por{" "}
                <span className="font-semibold">{item.verificador}</span>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-clock-rotate-left"></i> Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES DO HISTÓRICO */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Verificação"
          icon="fas fa-clock-rotate-left"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Documento Aprovado
              </h2>
              <p className="text-slate-500">
                Hospital Geral de Luanda • Hospital
              </p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Aprovado
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Documento</p>
                <p className="font-semibold text-slate-800">
                  Alvará de Funcionamento
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Verificador</p>
                <p className="font-semibold text-slate-800">Admin Sisa</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data e Hora</p>
                <p className="font-semibold text-slate-800">Hoje • 10:32</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Observações</p>
                <p className="font-semibold text-slate-800">
                  Documento válido e dentro dos requisitos legais.
                </p>
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
      </VerificacaoLayout>
    </>
  );
}
