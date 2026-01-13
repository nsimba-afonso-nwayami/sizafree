import EspecialistaLayout from "./components/EspecialistaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function PacientesEspecialista() {
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [openHistorico, setOpenHistorico] = useState(false);
  const [openDocumentos, setOpenDocumentos] = useState(false);

  const dummyPacientes = [
    {
      id: 301,
      nome: "João da Silva",
      idade: 35,
      genero: "Masculino",
      status: "Ativo",
      ultimaConsulta: "15/01/2026",
      especialidade: "Cardiologia",
    },
    {
      id: 302,
      nome: "Maria Oliveira",
      idade: 28,
      genero: "Feminino",
      status: "Ativo",
      ultimaConsulta: "12/01/2026",
      especialidade: "Clínica Geral",
    },
  ];

  const dummyHistorico = [
    {
      id: 1,
      data: "20/12/2025",
      tipo: "Consulta",
      observacoes: "Paciente com sintomas de febre e tosse.",
      arquivo: "historico_20_12_2025.pdf",
    },
    {
      id: 2,
      data: "05/01/2026",
      tipo: "Exame",
      observacoes: "Exame de sangue normal.",
      arquivo: "exame_sangue_05_01_2026.pdf",
    },
  ];

  const dummyDocumentos = [
    { id: 1, nome: "Exame_de_Sangue.pdf", tipo: "Exame", data: "05/01/2026" },
    { id: 2, nome: "Receita_Medica.pdf", tipo: "Receita", data: "20/12/2025" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ativo":
        return "bg-green-600/20 text-green-800";
      case "Inativo":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-gray-300/20 text-gray-800";
    }
  };

  return (
    <>
      <title>Pacientes | Dashboard Especialista</title>

      <EspecialistaLayout title="Pacientes">
        {/* CARD DE PESQUISA E FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar paciente por nome..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />
          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todas Especialidades</option>
            <option>Cardiologia</option>
            <option>Clínica Geral</option>
          </select>
        </div>

        {/* LISTA DE PACIENTES */}
        <div className="flex flex-col gap-4">
          {dummyPacientes.map((paciente) => (
            <div
              key={paciente.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-teal-800">
                  {paciente.nome}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(
                    paciente.status
                  )}`}
                >
                  {paciente.status}
                </span>
              </div>

              <div className="mb-2 text-slate-600 text-sm">
                <p>
                  Idade: {paciente.idade} | Gênero: {paciente.genero}
                </p>
                <p>Última Consulta: {paciente.ultimaConsulta}</p>
                <p>Especialidade: {paciente.especialidade}</p>
              </div>

              <div className="flex gap-3 text-lg mt-2">
                <button
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  title="Ver Detalhes"
                  onClick={() => setOpenDetalhes(true)}
                >
                  <i className="fas fa-eye"></i>
                </button>
                <button
                  className="text-teal-500 hover:text-teal-600 cursor-pointer"
                  title="Ver Histórico"
                  onClick={() => setOpenHistorico(true)}
                >
                  <i className="fas fa-file-medical"></i>
                </button>
                <button
                  className="text-yellow-500 hover:text-yellow-600 cursor-pointer"
                  title="Documentos"
                  onClick={() => setOpenDocumentos(true)}
                >
                  <i className="fas fa-file-alt"></i>
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
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-teal-50 border border-teal-200 rounded-xl p-6">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgJ1FO3FHIR9B-BULDxnMCDBg19lJSDqozeZ9GvQyMZVwc1D01Ck1GVRNjOCUW"
                alt="Paciente"
                className="w-24 h-24 rounded-full border-4 border-teal-500 object-cover"
              />
              <div className="flex-1 space-y-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-800">
                  João da Silva
                </h2>
                <p className="text-slate-500 text-sm">Paciente ativo</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Idade</p>
                <p className="font-semibold text-slate-800">35</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Gênero</p>
                <p className="font-semibold text-slate-800">Masculino</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Última Consulta</p>
                <p className="font-semibold text-slate-800">15/01/2026</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Especialidade</p>
                <p className="font-semibold text-slate-800">Cardiologia</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Observações
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Paciente com histórico de pressão alta, acompanhamento em
                andamento.
              </p>
            </div>
          </div>
        </Modal>

        {/* MODAL HISTÓRICO */}
        <Modal
          isOpen={openHistorico}
          onClose={() => setOpenHistorico(false)}
          title="Histórico do Paciente"
          icon="fas fa-file-medical"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            {dummyHistorico.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-teal-800">
                      {item.tipo}
                    </span>
                    <span className="text-slate-600">{item.data}</span>
                  </div>
                  <p className="text-slate-600">{item.observacoes}</p>
                </div>
                <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold cursor-pointer text-sm">
                  <i className="fas fa-download mr-2"></i> Baixar
                </button>
              </div>
            ))}
          </div>
        </Modal>

        {/* MODAL DOCUMENTOS */}
        <Modal
          isOpen={openDocumentos}
          onClose={() => setOpenDocumentos(false)}
          title="Documentos do Paciente"
          icon="fas fa-file-alt"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            {dummyDocumentos.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-slate-200 rounded-xl p-4 flex justify-between items-center shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <i
                    className={`fas fa-file-${
                      doc.tipo === "Exame"
                        ? "medical"
                        : doc.tipo === "Receita"
                        ? "prescription"
                        : "alt"
                    } text-teal-500 text-lg`}
                  ></i>
                  <span className="text-slate-800 font-medium">{doc.nome}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-sm">{doc.data}</span>
                  <button className="px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-sm font-semibold cursor-pointer">
                    <i className="fas fa-download mr-1"></i> Baixar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      </EspecialistaLayout>
    </>
  );
}
