import EspecialistaLayout from "./components/EspecialistaLayout";
import { Link } from "react-router-dom";

export default function DashboardEspecialista() {
  return (
    <>
      <title>Dashboard Especialista</title>
      <EspecialistaLayout title="Dashboard do Especialista">
        {/* RESUMO RÁPIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Consultas Hoje</p>
                <h3 className="text-2xl font-bold text-slate-800">8</h3>
              </div>
              <i className="fas fa-calendar-day text-teal-500 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Solicitações Pendentes</p>
                <h3 className="text-2xl font-bold text-slate-800">5</h3>
              </div>
              <i className="fas fa-inbox text-teal-500 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Pacientes Ativos</p>
                <h3 className="text-2xl font-bold text-slate-800">32</h3>
              </div>
              <i className="fas fa-user-injured text-teal-500 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Prescrições Emitidas</p>
                <h3 className="text-2xl font-bold text-slate-800">14</h3>
              </div>
              <i className="fas fa-file-prescription text-teal-500 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* AÇÕES PRINCIPAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CALENDÁRIO / ATENDIMENTOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Próximos Atendimentos
            </h2>

            <ul className="divide-y divide-slate-200">
              <li className="py-3 flex justify-between">
                <div>
                  <p className="font-medium text-slate-800">Maria dos Santos</p>
                  <p className="text-sm text-slate-500">
                    Clínica Geral • 09:00
                  </p>
                </div>
                <span className="text-sm text-slate-500">Hoje</span>
              </li>

              <li className="py-3 flex justify-between">
                <div>
                  <p className="font-medium text-slate-800">João Manuel</p>
                  <p className="text-sm text-slate-500">Cardiologia • 11:30</p>
                </div>
                <span className="text-sm text-slate-500">Hoje</span>
              </li>

              <li className="py-3 flex justify-between">
                <div>
                  <p className="font-medium text-slate-800">Ana Ribeiro</p>
                  <p className="text-sm text-slate-500">Pediatria • 15:00</p>
                </div>
                <span className="text-sm text-slate-500">Hoje</span>
              </li>
            </ul>

            <Link
              to="/dashboard/especialista/agenda"
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
              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-slate-800">Carlos Mendes</p>
                  <p className="text-sm text-slate-500">
                    Pedido para Clínica Geral
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

              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-slate-800">Helena Costa</p>
                  <p className="text-sm text-slate-500">
                    Pedido para Cardiologia
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
            </ul>
          </div>
        </div>
      </EspecialistaLayout>
    </>
  );
}
