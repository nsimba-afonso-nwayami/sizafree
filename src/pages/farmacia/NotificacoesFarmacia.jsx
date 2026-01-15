import { useState } from "react";
import FarmaciaLayout from "./components/FarmaciaLayout";

export default function NotificacoesFarmacia() {
  // Estados dos switches
  const [pedidos, setPedidos] = useState(true);
  const [prescricoes, setPrescricoes] = useState(true);
  const [estoque, setEstoque] = useState(false);
  const [alertas, setAlertas] = useState(true);

  // Notificações dummy
  const notificacoes = [
    {
      id: 1,
      tipo: "Pedido Online",
      descricao: "Novo pedido online realizado por João da Silva.",
      data: "18/01/2026",
      icone: "fas fa-shopping-cart",
      cor: "text-teal-500",
    },
    {
      id: 2,
      tipo: "Prescrição",
      descricao:
        "Nova prescrição digital enviada para separação de medicamentos.",
      data: "19/01/2026",
      icone: "fas fa-file-prescription",
      cor: "text-blue-500",
    },
    {
      id: 3,
      tipo: "Estoque",
      descricao: "O produto Amoxicilina 500mg está com estoque baixo.",
      data: "17/01/2026",
      icone: "fas fa-boxes-stacked",
      cor: "text-red-500",
    },
    {
      id: 4,
      tipo: "Alerta",
      descricao: "Manutenção programada do sistema hoje às 22:00.",
      data: "16/01/2026",
      icone: "fas fa-bell",
      cor: "text-yellow-500",
    },
  ];

  return (
    <>
      <title>Notificações | Dashboard Farmácia</title>

      <FarmaciaLayout title="Notificações">
        {/* CONFIGURAÇÕES DE NOTIFICAÇÃO */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-xl font-bold text-teal-800 mb-4">
            Configurações de Notificação
          </h2>
          <p className="text-slate-500 mb-6">
            Escolha quais notificações deseja receber no sistema.
          </p>

          <div className="grid gap-4">
            {/* Pedidos Online */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">Pedidos Online</p>
                <p className="text-sm text-slate-500">
                  Alertas sobre novos pedidos realizados
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={pedidos}
                  onChange={() => setPedidos(!pedidos)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    pedidos ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    pedidos ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Prescrições */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">Prescrições</p>
                <p className="text-sm text-slate-500">
                  Avisos sobre novas prescrições digitais
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={prescricoes}
                  onChange={() => setPrescricoes(!prescricoes)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    prescricoes ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    prescricoes ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Estoque */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <p className="font-medium text-slate-800">Estoque</p>
                <p className="text-sm text-slate-500">
                  Alertas de produtos com estoque baixo
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={estoque}
                  onChange={() => setEstoque(!estoque)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    estoque ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    estoque ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Alertas do Sistema */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-800">Alertas do Sistema</p>
                <p className="text-sm text-slate-500">
                  Manutenções e atualizações da plataforma
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={alertas}
                  onChange={() => setAlertas(!alertas)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    alertas ? "bg-teal-500" : "bg-slate-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    alertas ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>
          </div>
        </div>

        {/* LISTA DE NOTIFICAÇÕES */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-teal-800 mb-4">
            Notificações Recentes
          </h2>

          <ul className="divide-y divide-slate-200">
            {notificacoes.map((noti) => (
              <li
                key={noti.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex gap-4 items-start">
                  <i className={`${noti.icone} ${noti.cor} text-lg mt-1`}></i>
                  <div>
                    <p className="font-medium text-slate-800">{noti.tipo}</p>
                    <p className="text-sm text-slate-500">{noti.descricao}</p>
                  </div>
                </div>
                <span className="text-sm text-slate-500">{noti.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </FarmaciaLayout>
    </>
  );
}
