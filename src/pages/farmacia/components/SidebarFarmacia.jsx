import { Link, useNavigate } from "react-router-dom";

export default function SidebarFarmacia({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <aside
        className={`
          bg-teal-800
          w-64 fixed top-0 left-0 h-screen p-6
          transition-transform duration-300 overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 flex flex-col
        `}
      >
        {/* Botão fechar mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white hover:text-teal-200 transition"
          onClick={() => setSidebarOpen(false)}
          title="Fechar Menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Cabeçalho */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1 tracking-wide mt-6 md:mt-0 text-white">
            <span className="text-teal-200">Sisa</span> Free
          </h1>
          <p className="text-sm text-teal-200 mb-8 truncate">
            Painel da Farmácia
          </p>

          {/* Navegação */}
          <nav className="space-y-3 text-sm">
            {/* DASHBOARD */}
            <Link
              to="/dashboard/farmacia"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-gauge-high mr-3 text-teal-200"></i>
              Dashboard
            </Link>

            {/* FUNCIONALIDADES MÉDICAS */}
            <p className="px-3 text-teal-200 uppercase text-xs mt-4 mb-2 font-semibold">
              Gestão Médica
            </p>

            <Link
              to="/dashboard/farmacia/profissionais"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-user-md mr-3 text-teal-200"></i>
              Profissionais
            </Link>

            <Link
              to="/dashboard/farmacia/pacientes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-user-injured mr-3 text-teal-200"></i>
              Pacientes
            </Link>

            <Link
              to="/dashboard/farmacia/historico"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-notes-medical mr-3 text-teal-200"></i>
              Histórico
            </Link>

            <Link
              to="/dashboard/farmacia/agenda"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-calendar-alt mr-3 text-teal-200"></i>
              Agenda de Atendimentos
            </Link>

            <Link
              to="/dashboard/farmacia/solicitacoes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-inbox mr-3 text-teal-200"></i>
              Solicitações
            </Link>

            <Link
              to="/dashboard/farmacia/prescricoes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-file-prescription mr-3 text-teal-200"></i>
              Prescrições Digitais
            </Link>

            {/* LOJA / FARMÁCIA */}
            <p className="px-3 text-teal-200 uppercase text-xs mt-6 mb-2 font-semibold">
              Loja & Estoque
            </p>

            <Link
              to="/dashboard/farmacia/produtos"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-capsules mr-3 text-teal-200"></i>
              Produtos
            </Link>

            <Link
              to="/dashboard/farmacia/estoque"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-warehouse mr-3 text-teal-200"></i>
              Estoque
            </Link>

            <Link
              to="/dashboard/farmacia/vendas"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-shopping-cart mr-3 text-teal-200"></i>
              Vendas
            </Link>

            <Link
              to="/dashboard/farmacia/pedidos-online"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-laptop-medical mr-3 text-teal-200"></i>
              Pedidos Online
            </Link>

            <Link
              to="/dashboard/farmacia/relatorios-loja"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-chart-line mr-3 text-teal-200"></i>
              Relatórios da Loja
            </Link>

            {/* CONFIGURAÇÕES */}
            <p className="px-3 text-teal-200 uppercase text-xs mt-6 mb-2 font-semibold">
              Configurações
            </p>

            <Link
              to="/dashboard/farmacia/configuracoes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-cogs mr-3 text-teal-200"></i>
              Configurações
            </Link>

            <Link
              to="/dashboard/farmacia/notificacoes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-bell mr-3 text-teal-200"></i>
              Notificações
            </Link>
          </nav>
        </div>

        {/* LOGOUT */}
        <div className="pt-6 border-t border-teal-700">
          <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer w-full p-3 rounded-lg text-white hover:bg-red-500/20 transition font-semibold"
          >
            <i className="fas fa-sign-out-alt mr-3"></i>
            Sair
          </button>
        </div>
      </aside>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
