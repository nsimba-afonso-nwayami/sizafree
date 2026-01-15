import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function EstoqueFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const estoqueDummy = [
    {
      id: 1,
      produto: "Amoxicilina 500mg",
      lote: "AMX-2024-01",
      validade: "12/2025",
      quantidade: 120,
      status: "Disponível",
    },
    {
      id: 2,
      produto: "Paracetamol 500mg",
      lote: "PAR-2024-02",
      validade: "06/2024",
      quantidade: 18,
      status: "Estoque baixo",
    },
    {
      id: 3,
      produto: "Ibuprofeno 400mg",
      lote: "IBU-2023-11",
      validade: "01/2024",
      quantidade: 0,
      status: "Esgotado",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Disponível":
        return "bg-green-600/20 text-green-800";
      case "Estoque baixo":
        return "bg-yellow-400/30 text-yellow-800";
      case "Esgotado":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Estoque | Dashboard Farmácia</title>

      <FarmaciaLayout title="Estoque">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por produto ou lote..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todos os status</option>
            <option>Disponível</option>
            <option>Estoque baixo</option>
            <option>Esgotado</option>
          </select>
        </div>

        {/* TABELA DE ESTOQUE */}
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="p-4 text-left">Produto</th>
                <th className="p-4 text-left">Lote</th>
                <th className="p-4 text-left">Validade</th>
                <th className="p-4 text-left">Quantidade</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {estoqueDummy.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">
                    {item.produto}
                  </td>
                  <td className="p-4 text-slate-600">{item.lote}</td>
                  <td className="p-4 text-slate-600">{item.validade}</td>
                  <td className="p-4 font-semibold text-slate-800">
                    {item.quantidade}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
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
                        Ajustar
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
          title="Detalhes do Estoque"
          icon="fas fa-boxes-stacked"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Amoxicilina 500mg
              </h2>
              <p className="text-slate-500">Lote AMX-2024-01</p>

              <span className="inline-block mt-2 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Disponível
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white border border-slate-200 rounded-xl p-6">
              <div>
                <p className="text-sm text-slate-500">Quantidade Atual</p>
                <p className="font-semibold text-slate-800">120 unidades</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Validade</p>
                <p className="font-semibold text-slate-800">12/2025</p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                Ajustar Estoque
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
