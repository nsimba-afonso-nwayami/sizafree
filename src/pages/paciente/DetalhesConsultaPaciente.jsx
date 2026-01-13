import PacienteLayout from "./components/PacienteLayout";

export default function DetalhesConsultaPaciente() {
  const consulta = {
    id: 101,
    data: "20/01/2026",
    hora: "14:30",
    especialidade: "Cardiologia",
    medico: "Dr. Paulo Mendes",
    local: "Hospital Central",
    endereco: "Av. Principal, Nº 123, Luanda",
    tipo: "Presencial",
    status: "Confirmada",
    telefone: "+244 923 456 789",
    observacoes:
      "Chegar com 15 minutos de antecedência e levar exames anteriores.",
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmada":
        return "bg-green-100 text-green-700";
      case "Pendente":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelada":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <PacienteLayout title="Detalhes da Consulta">
      <>
      <title>Detalhes ca Consulta | Dashboard Paciente</title>
        {/* CARD PRINCIPAL */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          {/* Cabeçalho */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Consulta #{consulta.id}
              </h2>
              <p className="text-slate-500 text-sm">{consulta.especialidade}</p>
            </div>

            <span
              className={`px-4 py-2 rounded-lg text-sm font-semibold w-fit ${getStatusColor(
                consulta.status
              )}`}
            >
              {consulta.status}
            </span>
          </div>

          {/* INFORMAÇÕES */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500">Data</p>
                <p className="font-semibold text-slate-800">
                  {consulta.data} às {consulta.hora}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Médico</p>
                <p className="font-semibold text-slate-800">
                  {consulta.medico}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Tipo de Atendimento</p>
                <p className="font-semibold text-slate-800">{consulta.tipo}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500">Local</p>
                <p className="font-semibold text-slate-800">{consulta.local}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Endereço</p>
                <p className="text-slate-700">{consulta.endereco}</p>
              </div>
            </div>
          </div>

          {/* OBSERVAÇÕES */}
          <div>
            <p className="text-sm text-slate-500 mb-1">Observações</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-700 text-sm">
              {consulta.observacoes}
            </div>
          </div>

          {/* AÇÕES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4 border-t border-slate-200">
            <button
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 transition rounded-lg font-semibold text-slate-700 cursor-pointer"
              onClick={() => window.history.back()}
            >
              Voltar
            </button>

            <a
              href={`tel:${consulta.telefone}`}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-lg font-semibold text-white cursor-pointer flex items-center gap-2 justify-center"
            >
              <i className="fas fa-phone"></i>
              Ligar
            </a>

            {consulta.status !== "Cancelada" && (
              <button className="px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-lg font-semibold text-white cursor-pointer">
                Cancelar Consulta
              </button>
            )}
          </div>
        </div>
      </>
    </PacienteLayout>
  );
}
