import React, { useEffect, useState } from "react";

export default function SmallModal({ isOpen, onClose, title, icon, children }) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShow(true);
    else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white w-96 max-w-full relative transform transition-all duration-300 rounded-xl shadow-lg p-6 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white text-xl">
              <i className={icon}></i>
            </div>
          )}
          <h2 className="text-xl font-bold text-teal-800">{title}</h2>
          <button
            onClick={onClose}
            className="ml-auto cursor-pointer text-slate-500 hover:text-teal-500 text-3xl font-bold transition-colors"
            title="Fechar"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Conteúdo */}
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}
