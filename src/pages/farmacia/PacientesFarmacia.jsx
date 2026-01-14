import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function PacientesFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const dummyPacientes = [
    {
      id: 501,
      nome: "João da Silva",
      idade: 45,
      status: "Ativo",
      ultimaCompra: "Amoxicilina",
      data: "Hoje",
      email: "joao.silva@email.com",
      telefone: "+244 923456700",
    },
    {
      id: 502,
      nome: "Maria Oliveira",
      idade: 32,
      status: "Ativo",
      ultimaCompra: "Ibuprofeno",
      data: "Ontem",
      email: "maria.oliveira@email.com",
      telefone: "+244 923456701",
    },
    {
      id: 503,
      nome: "Carlos Mendes",
      idade: 60,
      status: "Inativo",
      ultimaCompra: "Losartana",
      data: "Há 7 dias",
      email: "carlos.mendes@email.com",
      telefone: "+244 923456702",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ativo":
        return "bg-green-600/20 text-green-800";
      case "Inativo":
        return "bg-slate-300 text-slate-700";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Pacientes | Dashboard Farmácia</title>

      <FarmaciaLayout title="Pacientes">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar paciente por nome ou medicamento..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os Status</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>

        {/* LISTA DE PACIENTES */}
        <div className="flex flex-col gap-4">
          {dummyPacientes.map((paciente) => (
            <div
              key={paciente.id}
              className="bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-teal-800">
                    {paciente.nome}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {paciente.idade} anos • Última compra:{" "}
                    {paciente.ultimaCompra}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    paciente.status
                  )}`}
                >
                  {paciente.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm">
                Data da última retirada:{" "}
                <span className="font-medium">{paciente.data}</span>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                <div className="flex gap-2">
                  <button className="px-4 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                    Ver Histórico
                  </button>
                </div>
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
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                João da Silva
              </h2>
              <p className="text-slate-500">45 anos • Paciente ativo</p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Ativo
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500">E-mail</p>
                <p className="font-semibold text-slate-800">
                  joao.silva@email.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Telefone</p>
                <p className="font-semibold text-slate-800">
                  +244 923456700
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Último Medicamento
                </p>
                <p className="font-semibold text-slate-800">
                  Amoxicilina
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Última Retirada
                </p>
                <p className="font-semibold text-slate-800">Hoje</p>
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
      </FarmaciaLayout>
    </>
  );
}
