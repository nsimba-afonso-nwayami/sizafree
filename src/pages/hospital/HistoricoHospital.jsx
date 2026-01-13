import HospitalLayout from "./components/HospitalLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function HistoricoHospital() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyHistorico = [
    {
      id: 501,
      data: "10/01/2026",
      paciente: "João da Silva",
      tipo: "Consulta",
      especialidade: "Clínica Geral",
      observacoes: "Paciente apresentou melhora significativa após medicação.",
      arquivo: "historico_10_01_2026.pdf",
    },
    {
      id: 502,
      data: "12/01/2026",
      paciente: "Maria Oliveira",
      tipo: "Exame",
      especialidade: "Laboratório",
      observacoes:
        "Exame de sangue com resultados dentro dos parâmetros normais.",
      arquivo: "exame_12_01_2026.pdf",
    },
    {
      id: 503,
      data: "15/01/2026",
      paciente: "Carlos Santos",
      tipo: "Consulta",
      especialidade: "Cardiologia",
      observacoes: "Reavaliação de pressão arterial, ajustes na medicação.",
      arquivo: "historico_15_01_2026.pdf",
    },
  ];

  return (
    <>
      <title>Histórico | Dashboard Hospital</title>

      <HospitalLayout title="Histórico Clínico">
        {/* CARD DE PESQUISA */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente ou tipo..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />
          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Tipos</option>
            <option>Consulta</option>
            <option>Exame</option>
          </select>
        </div>

        {/* CARDS DE HISTÓRICO */}
        <div className="flex flex-col gap-4">
          {dummyHistorico.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-teal-800">
                  {item.paciente}
                </span>
                <span className="text-slate-500 text-sm">{item.data}</span>
              </div>
              <div className="mb-2">
                <span className="font-medium text-teal-800">{item.tipo}</span> •{" "}
                <span className="text-slate-600">{item.especialidade}</span>
              </div>
              <div className="text-slate-600 text-sm mb-3">
                {item.observacoes}
              </div>

              <div className="flex gap-3">
                <button
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                  onClick={() => setOpenDetalhes(true)}
                >
                  <i className="fas fa-eye"></i> Visualizar
                </button>
                <button className="px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold cursor-pointer flex items-center gap-1">
                  <i className="fas fa-download"></i> Baixar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES HISTÓRICO */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Histórico"
          icon="fas fa-file-medical"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* INFORMAÇÕES PRINCIPAIS */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Paciente</p>
                  <p className="font-semibold text-slate-800">
                    {dummyHistorico[0].paciente}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Data</p>
                  <p className="font-semibold text-slate-800">
                    {dummyHistorico[0].data}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Tipo</p>
                  <p className="font-semibold text-slate-800">
                    {dummyHistorico[0].tipo}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Especialidade</p>
                  <p className="font-semibold text-slate-800">
                    {dummyHistorico[0].especialidade}
                  </p>
                </div>
              </div>
            </div>

            {/* OBSERVAÇÕES */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Observações Médicas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {dummyHistorico[0].observacoes}
              </p>
            </div>

            {/* ANEXOS / EXAMES */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-4">
                Anexos / Exames
              </h3>

              <ul className="divide-y divide-slate-200">
                <li className="py-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-file-pdf text-red-500 text-lg"></i>
                    <div>
                      <p className="font-medium text-slate-800">
                        {dummyHistorico[0].arquivo}
                      </p>
                      <p className="text-sm text-slate-500">
                        Documento do histórico
                      </p>
                    </div>
                  </div>

                  <button className="px-3 py-1 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white text-sm rounded-lg flex items-center gap-1">
                    <i className="fas fa-download"></i> Baixar
                  </button>
                </li>
              </ul>
            </div>

            {/* AÇÃO FINAL */}
            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition">
                Fechar
              </button>
            </div>
          </div>
        </Modal>
      </HospitalLayout>
    </>
  );
}
