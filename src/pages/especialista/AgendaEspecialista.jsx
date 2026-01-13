import EspecialistaLayout from "./components/EspecialistaLayout";
import { useState } from "react";
import Modal from "./components/Modal";
import SmallModal from "./components/SmallModal";

export default function AgendaEspecialista() {
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [openAdicionar, setOpenAdicionar] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const dummyAgenda = [
    {
      id: 201,
      data: "20/01/2026",
      horario: "10:00",
      paciente: "João da Silva",
      tipo: "Presencial",
      status: "Confirmada",
      observacoes:
        "Paciente com histórico de pressão alta, orientar acompanhamento.",
    },
    {
      id: 202,
      data: "20/01/2026",
      horario: "11:30",
      paciente: "Maria Oliveira",
      tipo: "Online",
      status: "Pendente",
      observacoes: "Primeira consulta, verificar sintomas iniciais.",
    },
    {
      id: 203,
      data: "21/01/2026",
      horario: "09:00",
      paciente: "Carlos Santos",
      tipo: "Presencial",
      status: "Cancelada",
      observacoes: "Paciente solicitou cancelamento por viagem.",
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
    <>
      <title>Agenda | Dashboard Especialista</title>

      <EspecialistaLayout title="Agenda">
        {/* CARD DE PESQUISA E FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por paciente..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Confirmada</option>
            <option>Pendente</option>
            <option>Cancelada</option>
          </select>

          <button
            onClick={() => setOpenAdicionar(true)}
            className="px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fas fa-calendar-plus"></i>
            Adicionar Consulta
          </button>
        </div>

        {/* CARDS DE AGENDA VERTICAIS */}
        <div className="flex flex-col gap-4">
          {dummyAgenda.map((consulta) => (
            <div
              key={consulta.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-teal-800">
                  {consulta.data}
                </span>
                <span className="text-slate-600">{consulta.horario}</span>
              </div>
              <div className="mb-2">
                <span className="font-medium text-slate-800">Paciente: </span>
                <span className="text-slate-600">{consulta.paciente}</span>
              </div>
              <div className="mb-2 flex justify-between items-center">
                <span className="font-medium text-slate-800">
                  {consulta.tipo}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(
                    consulta.status
                  )}`}
                >
                  {consulta.status}
                </span>
              </div>

              {/* BOTÕES */}
              <div className="flex justify-between mt-3 items-center">
                <div className="flex gap-3 text-lg">
                  <button
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    title="Ver Detalhes"
                    onClick={() => setOpenDetalhes(true)}
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    className="text-red-400 hover:text-red-500 cursor-pointer"
                    title="Cancelar Consulta"
                    onClick={() => setOpenConfirm(true)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                {/* BOTÕES ACEITAR / RECUSAR */}
                {consulta.status === "Pendente" && (
                  <div className="flex gap-2">
                    <button className="px-3 py-1 cursor-pointer text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                      Aceitar
                    </button>
                    <button className="px-3 py-1 cursor-pointer text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg">
                      Recusar
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO VER MAIS */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold cursor-pointer">
            Ver mais consultas
          </button>
        </div>

        {/* MODAL DETALHES DA AGENDA */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Consulta"
          icon="fas fa-calendar-check"
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
                  João da Silva
                </h2>
                <p className="text-slate-500 text-sm">Consulta agendada</p>

                <span
                  className={`inline-block mt-2 px-4 py-1 rounded-full text-xs font-semibold ${
                    dummyAgenda[0].status === "Confirmada"
                      ? "bg-green-600/20 text-green-800"
                      : dummyAgenda[0].status === "Pendente"
                      ? "bg-yellow-400/30 text-yellow-800"
                      : "bg-red-600/20 text-red-800"
                  }`}
                >
                  {dummyAgenda[0].status}
                </span>
              </div>
            </div>

            {/* INFORMAÇÕES DA CONSULTA */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Data</p>
                <p className="font-semibold text-slate-800">
                  {dummyAgenda[0].data}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Horário</p>
                <p className="font-semibold text-slate-800">
                  {dummyAgenda[0].horario}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Tipo de Consulta</p>
                <p className="font-semibold text-slate-800">
                  {dummyAgenda[0].tipo}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-semibold text-slate-800">
                  {dummyAgenda[0].status}
                </p>
              </div>
            </div>

            {/* OBSERVAÇÕES */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Observações
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {dummyAgenda[0].observacoes}
              </p>
            </div>

            {/* AÇÕES */}
            {dummyAgenda[1].status === "Pendente" && (
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                <button className="px-6 py-2 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition">
                  Recusar
                </button>

                <button className="px-6 py-2 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition">
                  Aceitar
                </button>
              </div>
            )}
          </div>
        </Modal>

        {/* MODAL ADICIONAR NOVA CONSULTA */}
        <Modal
          isOpen={openAdicionar}
          onClose={() => setOpenAdicionar(false)}
          title="Adicionar Nova Consulta"
          icon="fas fa-calendar-plus"
        >
          <div className="max-w-2xl mx-auto">
            <form className="grid gap-6 pb-12">
              <div>
                <label className="block text-slate-800 font-medium mb-2">
                  Paciente
                </label>
                <input
                  type="text"
                  placeholder="Nome do paciente"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-800 font-medium mb-2">
                  Data
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

              <div>
                <label className="block text-slate-800 font-medium mb-2">
                  Tipo de Consulta
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option>Presencial</option>
                  <option>Online</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-800 font-medium mb-2">
                  Status
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  required
                >
                  <option value="">Selecione o status</option>
                  <option>Confirmada</option>
                  <option>Pendente</option>
                  <option>Cancelada</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-800 font-medium mb-2">
                  Observações
                </label>
                <textarea
                  placeholder="Adicionar observações"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-lg transition cursor-pointer"
              >
                Adicionar Consulta
              </button>
            </form>
          </div>
        </Modal>

        {/* MODAL CONFIRMAR CANCELAMENTO */}
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
      </EspecialistaLayout>
    </>
  );
}
