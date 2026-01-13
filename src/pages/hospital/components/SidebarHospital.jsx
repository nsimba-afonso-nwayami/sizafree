import { Link, useNavigate } from "react-router-dom";

export default function SidebarHospital({ sidebarOpen, setSidebarOpen }) {
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
            Painel do Hospital
          </p>

          {/* Navegação */}
          <nav className="space-y-3 text-sm">
            <Link
              to="/dashboard/hospital"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-gauge-high mr-3 text-teal-200"></i>
              Dashboard
            </Link>

            <Link
              to="/dashboard/hospital/pacientes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-user-injured mr-3 text-teal-200"></i>
              Pacientes
            </Link>

            <Link
              to="/dashboard/hospital/historico"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-notes-medical mr-3 text-teal-200"></i>
              Histórico Clínico
            </Link>

            <Link
              to="/dashboard/hospital/agenda"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-calendar-alt mr-3 text-teal-200"></i>
              Agenda de Consultas
            </Link>

            <Link
              to="/dashboard/hospital/solicitacoes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-inbox mr-3 text-teal-200"></i>
              Solicitações de Consulta
            </Link>

            <Link
              to="/dashboard/hospital/prescricoes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-file-prescription mr-3 text-teal-200"></i>
              Prescrições Digitais
            </Link>

            <Link
              to="/dashboard/hospital/profissionais"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-user-md mr-3 text-teal-200"></i>
              Profissionais
            </Link>

            <Link
              to="/dashboard/hospital/relatorios"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-chart-line mr-3 text-teal-200"></i>
              Relatórios
            </Link>

            <Link
              to="/dashboard/hospital/configuracoes"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-cogs mr-3 text-teal-200"></i>
              Configurações
            </Link>
          </nav>
        </div>

        {/* Logout */}
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
