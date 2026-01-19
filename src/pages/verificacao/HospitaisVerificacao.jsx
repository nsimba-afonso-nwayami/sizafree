import VerificacaoLayout from "./components/VerificacaoLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function HospitaisVerificacao() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyHospitais = [
    {
      id: 101,
      nome: "Hospital Geral de Luanda",
      tipo: "Público",
      cidade: "Luanda",
      status: "Pendente",
      responsavel: "Dr. António Manuel",
      email: "contato@hgl.co.ao",
      telefone: "+244 923 111 222",
      dataEnvio: "Hoje",
    },
    {
      id: 102,
      nome: "Hospital Josina Machel",
      tipo: "Público",
      cidade: "Luanda",
      status: "Aprovado",
      responsavel: "Dra. Helena Costa",
      email: "admin@josinamachel.co.ao",
      telefone: "+244 923 333 444",
      dataEnvio: "Ontem",
    },
    {
      id: 103,
      nome: "Hospital Vida Nova",
      tipo: "Privado",
      cidade: "Benguela",
      status: "Rejeitado",
      responsavel: "Sr. Carlos Mendes",
      email: "contato@vidanova.co.ao",
      telefone: "+244 923 555 666",
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
      <title>Hospitais | Dashboard Verificação</title>

      <VerificacaoLayout title="Verificação de Hospitais">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar hospital por nome ou cidade..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Pendente</option>
            <option>Aprovado</option>
            <option>Rejeitado</option>
          </select>
        </div>

        {/* LISTA DE HOSPITAIS */}
        <div className="flex flex-col gap-4">
          {dummyHospitais.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">{hospital.nome}</p>
                  <p className="text-slate-500 text-sm">
                    {hospital.tipo} • {hospital.cidade}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    hospital.status,
                  )}`}
                >
                  {hospital.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm">
                Data de envio:{" "}
                <span className="font-medium">{hospital.dataEnvio}</span>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                {hospital.status === "Pendente" && (
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

        {/* MODAL DETALHES DO HOSPITAL */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Hospital"
          icon="fas fa-hospital"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Hospital Geral de Luanda
              </h2>
              <p className="text-slate-500">Público • Luanda</p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-800">
                Pendente
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">Responsável</p>
                <p className="font-semibold text-slate-800">
                  Dr. António Manuel
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">E-mail</p>
                <p className="font-semibold text-slate-800">
                  contato@hgl.co.ao
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Telefone</p>
                <p className="font-semibold text-slate-800">+244 923 111 222</p>
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
                Aprovar Hospital
              </button>
            </div>
          </div>
        </Modal>
      </VerificacaoLayout>
    </>
  );
}
