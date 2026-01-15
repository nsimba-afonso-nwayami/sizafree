import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function PedidosFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const pedidosDummy = [
    {
      id: "PED-1001",
      cliente: "João da Silva",
      telefone: "+244 923 456 789",
      data: "20/01/2026",
      total: "6.500 Kz",
      status: "Novo",
      itens: [
        { nome: "Paracetamol 500mg", qtd: 2, preco: "1.500 Kz" },
        { nome: "Vitamina C", qtd: 1, preco: "3.500 Kz" },
      ],
    },
    {
      id: "PED-1002",
      cliente: "Maria Oliveira",
      telefone: "+244 922 111 222",
      data: "20/01/2026",
      total: "2.000 Kz",
      status: "Em Preparação",
      itens: [{ nome: "Ibuprofeno 400mg", qtd: 1, preco: "2.000 Kz" }],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Novo":
        return "bg-blue-500/20 text-blue-800";
      case "Em Preparação":
        return "bg-yellow-400/30 text-yellow-800";
      case "Pronto":
        return "bg-teal-500/20 text-teal-800";
      case "Entregue":
        return "bg-green-600/20 text-green-800";
      case "Cancelado":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Pedidos Online | Dashboard Farmácia</title>

      <FarmaciaLayout title="Pedidos Online">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por cliente ou número do pedido..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os status</option>
            <option>Novo</option>
            <option>Em Preparação</option>
            <option>Pronto</option>
            <option>Entregue</option>
            <option>Cancelado</option>
          </select>
        </div>

        {/* LISTA DE PEDIDOS */}
        <div className="flex flex-col gap-4">
          {pedidosDummy.map((pedido) => (
            <div
              key={pedido.id}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <p className="font-semibold text-slate-800">
                    {pedido.cliente}
                  </p>
                  <p className="text-sm text-slate-500">
                    {pedido.id} • {pedido.data}
                  </p>
                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <i className="fas fa-phone text-teal-500"></i>
                    {pedido.telefone}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      pedido.status
                    )}`}
                  >
                    {pedido.status}
                  </span>

                  <span className="font-bold text-slate-800">
                    {pedido.total}
                  </span>
                </div>
              </div>

              {/* AÇÕES */}
              <div className="flex flex-wrap justify-between items-center gap-3 mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                    Aceitar
                  </button>
                  <button className="px-3 py-1 text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES DO PEDIDO */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Pedido"
          icon="fas fa-shopping-cart"
        >
          <div className="space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Pedido PED-1001
              </h2>
              <p className="text-slate-500">Cliente: João da Silva</p>

              <span className="inline-block mt-2 px-4 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-800">
                Novo
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4">
                Produtos do Pedido
              </h3>

              <ul className="divide-y divide-slate-200">
                <li className="py-3 flex justify-between">
                  <span>Paracetamol 500mg (x2)</span>
                  <span className="font-medium">1.500 Kz</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>Vitamina C (x1)</span>
                  <span className="font-medium">3.500 Kz</span>
                </li>
              </ul>

              <div className="flex justify-between font-bold text-slate-800 pt-4">
                <span>Total</span>
                <span>6.500 Kz</span>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                Marcar como Pronto
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
