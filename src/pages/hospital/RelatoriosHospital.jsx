import HospitalLayout from "./components/HospitalLayout";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function RelatoriosHospital() {
  // Dados dummy
  const consultasMes = [
    { mes: "Jan", total: 120 },
    { mes: "Fev", total: 98 },
    { mes: "Mar", total: 150 },
    { mes: "Abr", total: 170 },
    { mes: "Mai", total: 140 },
  ];

  const statusConsultas = [
    { nome: "Confirmadas", valor: 65 },
    { nome: "Pendentes", valor: 20 },
    { nome: "Canceladas", valor: 15 },
  ];

  const especialidades = [
    { nome: "Clínica Geral", total: 80 },
    { nome: "Cardiologia", total: 45 },
    { nome: "Pediatria", total: 30 },
    { nome: "Ortopedia", total: 25 },
  ];

  const prescricoes = [
    { mes: "Jan", total: 90 },
    { mes: "Fev", total: 70 },
    { mes: "Mar", total: 110 },
    { mes: "Abr", total: 130 },
    { mes: "Mai", total: 95 },
  ];

  const COLORS = ["#14b8a6", "#facc15", "#ef4444"];

  return (
    <>
      <title>Relatórios | Dashboard Hospital</title>

      <HospitalLayout title="Relatórios">
        {/* RESUMO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Consultas no Mês</p>
            <h3 className="text-2xl font-bold text-slate-800">170</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Pacientes Atendidos</p>
            <h3 className="text-2xl font-bold text-slate-800">142</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Prescrições Emitidas</p>
            <h3 className="text-2xl font-bold text-slate-800">95</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Profissionais Ativos</p>
            <h3 className="text-2xl font-bold text-slate-800">38</h3>
          </div>
        </div>

        {/* GRÁFICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CONSULTAS POR MÊS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Consultas por Mês
            </h2>

            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={consultasMes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#14b8a6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* STATUS DAS CONSULTAS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Status das Consultas
            </h2>

            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={statusConsultas}
                  dataKey="valor"
                  nameKey="nome"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {statusConsultas.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* CONSULTAS POR ESPECIALIDADE */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Consultas por Especialidade
            </h2>

            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={especialidades}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#14b8a6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* PRESCRIÇÕES */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Prescrições Emitidas
            </h2>

            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={prescricoes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#0f766e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </HospitalLayout>
    </>
  );
}
