import FarmaciaLayout from "./components/FarmaciaLayout";
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
  Legend,
} from "recharts";

export default function RelatoriosFarmacia() {
  // DADOS DUMMY
  const vendasMensais = [
    { mes: "Jan", valor: 320000 },
    { mes: "Fev", valor: 280000 },
    { mes: "Mar", valor: 350000 },
    { mes: "Abr", valor: 410000 },
    { mes: "Mai", valor: 390000 },
  ];

  const produtosVendidos = [
    { nome: "Paracetamol", quantidade: 120 },
    { nome: "Amoxicilina", quantidade: 90 },
    { nome: "Ibuprofeno", quantidade: 75 },
    { nome: "Vitamina C", quantidade: 60 },
  ];

  const tiposPedidos = [
    { nome: "Presencial", valor: 65 },
    { nome: "Online", valor: 35 },
  ];

  const cores = ["#14b8a6", "#0f766e"];

  return (
    <>
      <title>Relatórios da Loja | Dashboard Farmácia</title>

      <FarmaciaLayout title="Relatórios da Loja">
        {/* RESUMO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Faturação Mensal</p>
            <h3 className="text-2xl font-bold text-slate-800">AOA 410.000</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Pedidos Online</p>
            <h3 className="text-2xl font-bold text-slate-800">86</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Produtos Vendidos</p>
            <h3 className="text-2xl font-bold text-slate-800">345</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <p className="text-sm text-slate-500">Ticket Médio</p>
            <h3 className="text-2xl font-bold text-slate-800">AOA 4.800</h3>
          </div>
        </div>

        {/* GRÁFICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* VENDAS MENSAIS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Vendas Mensais
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={vendasMensais}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="#14b8a6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* PRODUTOS MAIS VENDIDOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Produtos Mais Vendidos
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={produtosVendidos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="quantidade"
                  fill="#14b8a6"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* TIPOS DE PEDIDOS */}
        <div className="bg-white p-6 rounded-xl shadow-sm max-w-xl">
          <h2 className="text-lg font-bold text-teal-800 mb-4">
            Tipos de Pedidos
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={tiposPedidos}
                dataKey="valor"
                nameKey="nome"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {tiposPedidos.map((_, index) => (
                  <Cell key={index} fill={cores[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </FarmaciaLayout>
    </>
  );
}
