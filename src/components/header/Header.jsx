import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-50 border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <i className="fa-solid fa-heart-pulse text-teal-500"></i>
          <span className="text-teal-800">Siza</span>
          <span className="text-teal-500">Free</span>
        </Link>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-slate-800"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-slate-50 md:bg-transparent
            border-t md:border-0 border-slate-200
            overflow-hidden
            transform transition-transform duration-300 origin-top
            ${open ? "scale-y-100" : "scale-y-0"}
            md:scale-y-100
            flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4 md:p-0
          `}
        >
          {/* Links */}
          <Link
            to="/"
            className="text-slate-800 font-medium hover:text-teal-500 transition w-full md:w-auto text-center md:text-left"
          >
            Início
          </Link>
          <Link
            to="/servicos"
            className="text-slate-800 font-medium hover:text-teal-500 transition w-full md:w-auto text-center md:text-left"
          >
            Serviços
          </Link>
          <Link
            to="/sobre"
            className="text-slate-800 font-medium hover:text-teal-500 transition w-full md:w-auto text-center md:text-left"
          >
            Sobre Nós
          </Link>
          <Link
            to="/especialistas"
            className="text-slate-800 font-medium hover:text-teal-500 transition w-full md:w-auto text-center md:text-left"
          >
            Especialistas
          </Link>
          <Link
            to="/unidades"
            className="text-slate-800 font-medium hover:text-teal-500 transition w-full md:w-auto text-center md:text-left"
          >
            Unidades de Saúde
          </Link>

          {/* Botões CTA */}
          <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0 w-full md:w-auto">
            <Link
              to="/agendar"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg
                         bg-teal-500 text-white font-semibold
                         hover:bg-teal-600 transition w-full md:w-auto"
            >
              <i className="fa-solid fa-calendar-check"></i>
              Agendar
            </Link>
            <Link
              to="/cadastrar"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg
                         bg-teal-800 text-white font-semibold
                         hover:bg-teal-700 transition w-full md:w-auto"
            >
              <i className="fa-solid fa-user-plus"></i>
              Cadastrar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
