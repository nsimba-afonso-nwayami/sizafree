import PacienteLayout from "./components/PacienteLayout";
import { Link } from "react-router-dom";

export default function DashboardPaciente() {
  return (
    <PacienteLayout title="Dashboard do Paciente">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Consultas Agendadas */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <i className="fas fa-calendar-check text-3xl text-teal-600"></i>
          <div>
            <p className="text-sm text-slate-500">Consultas Agendadas</p>
            <h3 className="text-2xl font-bold text-slate-800">2</h3>
          </div>
        </div>

        {/* Medicamentos Ativos */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <i className="fas fa-pills text-3xl text-teal-500"></i>
          <div>
            <p className="text-sm text-slate-500">Medicamentos Ativos</p>
            <h3 className="text-2xl font-bold text-slate-800">4</h3>
          </div>
        </div>

        {/* Documentos Médicos */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <i className="fas fa-file-medical text-3xl text-teal-700"></i>
          <div>
            <p className="text-sm text-slate-500">Documentos Médicos</p>
            <h3 className="text-2xl font-bold text-slate-800">12</h3>
          </div>
        </div>

        {/* Profissionais Próximos */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <i className="fas fa-user-doctor text-3xl text-teal-600"></i>
          <div>
            <p className="text-sm text-slate-500">Profissionais Próximos</p>
            <h3 className="text-2xl font-bold text-slate-800">8</h3>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Próximas Consultas */}
        <div className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          {/* Header com CTA */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-teal-800 flex items-center gap-2">
              <i className="fas fa-stethoscope text-teal-500"></i>
              Próximas Consultas
            </h3>

            <Link
              to="/dashboard/paciente/consultas"
              className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-lg transition"
            >
              <i className="fas fa-plus"></i>
              Agendar Consulta
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-slate-500 border-b border-slate-200">
                  <th className="p-3 text-left">Data</th>
                  <th className="p-3 text-left">Especialidade</th>
                  <th className="p-3 text-left">Profissional</th>
                  <th className="p-3 text-left">Local</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-3 font-semibold text-teal-600">
                    20/01/2026
                  </td>
                  <td className="p-3 text-slate-700">Cardiologia</td>
                  <td className="p-3 text-slate-700">Dr. Paulo Mendes</td>
                  <td className="p-3 text-slate-700">Hospital Central</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-3 font-semibold text-teal-600">
                    28/01/2026
                  </td>
                  <td className="p-3 text-slate-700">Clínica Geral</td>
                  <td className="p-3 text-slate-700">Dra. Ana Silva</td>
                  <td className="p-3 text-slate-700">Clínica Vida</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <button className="text-sm text-teal-600 hover:text-teal-700 font-semibold">
              Ver todas as consultas →
            </button>
          </div>
        </div>

        {/* Lembretes */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm space-y-4">
          <h3 className="text-xl font-semibold text-teal-800 flex items-center gap-2">
            <i className="fas fa-bell text-teal-500"></i>
            Lembretes de Saúde
          </h3>

          {/* Lembrete 1 */}
          <div className="p-3 bg-teal-50 border-l-4 border-teal-400 rounded">
            <p className="font-semibold text-sm text-slate-700">
              Tomar Medicação
            </p>
            <p className="text-xs text-slate-500">Losartana – Hoje às 20h</p>
          </div>

          {/* Lembrete 2 */}
          <div className="p-3 bg-teal-50 border-l-4 border-teal-500 rounded">
            <p className="font-semibold text-sm text-slate-700">
              Consulta Amanhã
            </p>
            <p className="text-xs text-slate-500">Cardiologia – 09h00</p>
          </div>

          {/* Lembrete 3 */}
          <div className="p-3 bg-teal-50 border-l-4 border-teal-600 rounded">
            <p className="font-semibold text-sm text-slate-700">
              Exame Disponível
            </p>
            <p className="text-xs text-slate-500">
              Resultado de Análises Clínicas
            </p>
          </div>

          <button className="w-full mt-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition">
            Gerir Lembretes
          </button>
        </div>
      </div>
    </PacienteLayout>
  );
}
