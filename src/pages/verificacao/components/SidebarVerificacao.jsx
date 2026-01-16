import { Link, useNavigate } from "react-router-dom";

export default function SidebarVerificacao({ sidebarOpen, setSidebarOpen }) {
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
            Painel de Verificacao
          </p>

          {/* Navegação */}
          <nav className="space-y-3 text-sm">
            <Link
              to="/dashboard/verificacao"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-gauge-high mr-3 text-teal-200"></i>
              Dashboard
            </Link>

            <Link
              to="/dashboard/verificacao/hospitais"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-hospital mr-3 text-teal-200"></i>
              Hospitais
            </Link>

            <Link
              to="/dashboard/verificacao/farmacias"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-prescription-bottle-medical mr-3 text-teal-200"></i>
              Farmácias
            </Link>

            <Link
              to="/dashboard/verificacao/especialistas"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-user-doctor mr-3 text-teal-200"></i>
              Especialistas
            </Link>

            <Link
              to="/dashboard/verificacao/laboratorios"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-vials mr-3 text-teal-200"></i>
              Laboratórios
            </Link>

            <Link
              to="/dashboard/verificacao/documentos"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-file-circle-check mr-3 text-teal-200"></i>
              Documentos
            </Link>

            <Link
              to="/dashboard/verificacao/historico"
              className="block p-3 rounded-lg text-white hover:bg-teal-700 transition font-medium"
            >
              <i className="fas fa-clock-rotate-left mr-3 text-teal-200"></i>
              Histórico
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
