import VerificacaoLayout from "./components/VerificacaoLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function EspecialistasVerificacao() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyEspecialistas = [
    {
      id: 301,
      nome: "Dr. Carlos Mendes",
      especialidade: "Cardiologia",
      cidade: "Luanda",
      status: "Pendente",
      registro: "CRM-ANG-4521",
      email: "carlos.mendes@email.com",
      telefone: "+244 923 888 111",
      dataEnvio: "Hoje",
    },
    {
      id: 302,
      nome: "Dra. Helena Costa",
      especialidade: "Pediatria",
      cidade: "Huambo",
      status: "Aprovado",
      registro: "CRM-ANG-3890",
      email: "helena.costa@email.com",
      telefone: "+244 923 888 222",
      dataEnvio: "Ontem",
    },
    {
      id: 303,
      nome: "Dr. João Manuel",
      especialidade: "Ortopedia",
      cidade: "Benguela",
      status: "Rejeitado",
      registro: "CRM-ANG-5012",
      email: "joao.manuel@email.com",
      telefone: "+244 923 888 333",
      dataEnvio: "Há 5 dias",
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
      <title>Especialistas | Dashboard Verificação</title>

      <VerificacaoLayout title="Verificação de Especialistas">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar especialista por nome ou especialidade..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Pendente</option>
            <option>Aprovado</option>
            <option>Rejeitado</option>
          </select>
        </div>

        {/* LISTA DE ESPECIALISTAS */}
        <div className="flex flex-col gap-4">
          {dummyEspecialistas.map((especialista) => (
            <div
              key={especialista.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">
                    {especialista.nome}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {especialista.especialidade} • {especialista.cidade}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    especialista.status,
                  )}`}
                >
                  {especialista.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm">
                Registro Profissional:{" "}
                <span className="font-medium">{especialista.registro}</span>
              </p>

              <p className="text-slate-600 text-sm">
                Data de envio:{" "}
                <span className="font-medium">{especialista.dataEnvio}</span>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                {especialista.status === "Pendente" && (
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

        {/* MODAL DETALHES DO ESPECIALISTA */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Especialista"
          icon="fas fa-user-doctor"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Dr. Carlos Mendes
              </h2>
              <p className="text-slate-500">Cardiologia • Luanda</p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-800">
                Pendente
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Registro Profissional</p>
                <p className="font-semibold text-slate-800">CRM-ANG-4521</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">E-mail</p>
                <p className="font-semibold text-slate-800">
                  carlos.mendes@email.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Telefone</p>
                <p className="font-semibold text-slate-800">+244 923 888 111</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data de Submissão</p>
                <p className="font-semibold text-slate-800">Hoje</p>
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
                Aprovar Especialista
              </button>
            </div>
          </div>
        </Modal>
      </VerificacaoLayout>
    </>
  );
}
