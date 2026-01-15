import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function VendasFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const vendasDummy = [
    {
      id: "VND-001",
      cliente: "João da Silva",
      data: "20/01/2026",
      total: "4.500 Kz",
      status: "Concluída",
      itens: [
        { nome: "Paracetamol 500mg", qtd: 2, preco: "1.500 Kz" },
        { nome: "Vitamina C", qtd: 1, preco: "1.500 Kz" },
      ],
    },
    {
      id: "VND-002",
      cliente: "Maria Oliveira",
      data: "20/01/2026",
      total: "2.000 Kz",
      status: "Pendente",
      itens: [{ nome: "Ibuprofeno 400mg", qtd: 1, preco: "2.000 Kz" }],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Concluída":
        return "bg-green-600/20 text-green-800";
      case "Pendente":
        return "bg-yellow-400/30 text-yellow-800";
      case "Cancelada":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Vendas | Dashboard Farmácia</title>

      <FarmaciaLayout title="Vendas">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por cliente ou código da venda..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os status</option>
            <option>Concluída</option>
            <option>Pendente</option>
            <option>Cancelada</option>
          </select>
        </div>

        {/* TABELA DE VENDAS */}
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="p-4 text-left">Venda</th>
                <th className="p-4 text-left">Cliente</th>
                <th className="p-4 text-left">Data</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {vendasDummy.map((venda) => (
                <tr key={venda.id} className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">
                    {venda.id}
                  </td>
                  <td className="p-4 text-slate-600">{venda.cliente}</td>
                  <td className="p-4 text-slate-600">{venda.data}</td>
                  <td className="p-4 font-semibold text-slate-800">
                    {venda.total}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        venda.status
                      )}`}
                    >
                      {venda.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setOpenDetalhes(true)}
                        className="px-3 py-1 text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer"
                      >
                        Detalhes
                      </button>
                      <button className="px-3 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                        Recibo
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes da Venda"
          icon="fas fa-cash-register"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Venda VND-001
              </h2>
              <p className="text-slate-500">Cliente: João da Silva</p>

              <span className="inline-block mt-2 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Concluída
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4">
                Itens Vendidos
              </h3>

              <ul className="divide-y divide-slate-200">
                <li className="py-3 flex justify-between">
                  <span>Paracetamol 500mg (x2)</span>
                  <span className="font-medium">1.500 Kz</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>Vitamina C (x1)</span>
                  <span className="font-medium">1.500 Kz</span>
                </li>
              </ul>

              <div className="flex justify-between font-bold text-slate-800 pt-4">
                <span>Total</span>
                <span>4.500 Kz</span>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                Emitir Recibo
              </button>
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
