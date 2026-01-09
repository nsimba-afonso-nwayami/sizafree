export default function HeaderPaciente({ sidebarOpen, setSidebarOpen, title }) {
  return (
    <header
      className="
        bg-teal-800
        fixed top-0 right-0 left-0 md:left-64
        h-16 flex items-center justify-between
        px-4 sm:px-6
        z-30
      "
    >
      <button
        className="md:hidden text-2xl text-white hover:text-teal-200 transition"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <h2 className="text-lg sm:text-xl font-bold text-white">{title}</h2>

      <div className="flex items-center gap-4">
        <button className="relative text-xl text-white hover:text-teal-200 transition">
          <i className="fas fa-bell"></i>
          <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-sm text-teal-200 hidden sm:block">
            Paciente
          </span>
          <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center">
            <i className="fas fa-user text-white"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
