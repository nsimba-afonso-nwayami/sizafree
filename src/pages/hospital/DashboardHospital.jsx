import HospitalLayout from "./components/HospitalLayout";
import { Link } from "react-router-dom";

export default function DashboardHospital() {
  // Dados dummy para cards
  const stats = [
    {
      id: 1,
      title: "Pacientes Internados",
      value: 24,
      icon: "fas fa-procedures",
      color: "bg-teal-200 text-teal-800",
    },
    {
      id: 2,
      title: "Consultas Hoje",
      value: 18,
      icon: "fas fa-calendar-check",
      color: "bg-teal-200 text-teal-800",
    },
    {
      id: 3,
      title: "Solicitações Pendentes",
      value: 5,
      icon: "fas fa-inbox",
      color: "bg-teal-200 text-teal-800",
    },
    {
      id: 4,
      title: "Prescrições Emitidas",
      value: 32,
      icon: "fas fa-file-prescription",
      color: "bg-teal-200 text-teal-800",
    },
  ];

  // Dados dummy próximos atendimentos
  const atendimentos = [
    {
      paciente: "Maria dos Santos",
      especialidade: "Clínica Geral",
      horario: "09:00",
      data: "Hoje",
    },
    {
      paciente: "João Manuel",
      especialidade: "Cardiologia",
      horario: "11:30",
      data: "Hoje",
    },
    {
      paciente: "Ana Ribeiro",
      especialidade: "Pediatria",
      horario: "15:00",
      data: "Hoje",
    },
  ];

  // Dados dummy solicitações de consulta
  const solicitacoes = [
    { paciente: "Carlos Mendes", especialidade: "Clínica Geral" },
    { paciente: "Helena Costa", especialidade: "Cardiologia" },
  ];

  return (
    <>
      <title>Dashboard Hospital</title>
      <HospitalLayout title="Dashboard do Hospital">
        {/* RESUMO RÁPIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 rounded-xl shadow-sm border-l-4 border-teal-500 ${stat.color} flex items-center justify-between`}
            >
              <div>
                <p className="text-sm text-slate-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-800">
                  {stat.value}
                </h3>
              </div>
              <i className={`${stat.icon} text-3xl`}></i>
            </div>
          ))}
        </div>

        {/* AÇÕES PRINCIPAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* CALENDÁRIO / ATENDIMENTOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Próximos Atendimentos
            </h2>
            <ul className="divide-y divide-slate-200">
              {atendimentos.map((a, index) => (
                <li key={index} className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium text-slate-800">{a.paciente}</p>
                    <p className="text-sm text-slate-500">
                      {a.especialidade} • {a.horario}
                    </p>
                  </div>
                  <span className="text-sm text-slate-500">{a.data}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/dashboard/hospital/agenda"
              className="mt-4 inline-block text-sm font-semibold text-teal-500 hover:text-teal-600"
            >
              Ver agenda completa →
            </Link>
          </div>

          {/* SOLICITAÇÕES DE CONSULTA */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Solicitações de Consulta
            </h2>
            <ul className="divide-y divide-slate-200">
              {solicitacoes.map((s, index) => (
                <li
                  key={index}
                  className="py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-slate-800">{s.paciente}</p>
                    <p className="text-sm text-slate-500">
                      Pedido para {s.especialidade}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 cursor-pointer text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                      Aceitar
                    </button>
                    <button className="px-3 py-1 cursor-pointer text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg">
                      Recusar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HospitalLayout>
    </>
  );
}
