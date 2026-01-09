import { useState } from "react";
import PacienteLayout from "./components/PacienteLayout";

export default function PerfilPaciente() {
  const [previewImage, setPreviewImage] = useState(
    "https://via.placeholder.com/120"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <PacienteLayout title="Perfil do Paciente">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* ===== Informações do Paciente ===== */}
        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Foto */}
            <div className="shrink-0">
              <img
                src={previewImage}
                alt="Paciente"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-teal-500 object-cover"
              />
            </div>

            {/* Informações */}
            <div className="flex-1 space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                António Manuel
              </h2>
              <p className="text-sm md:text-base text-slate-500">
                Paciente registrado desde: 15/03/2021
              </p>
              <p className="text-sm md:text-base text-slate-500">
                Email: antonio.manuel@email.com
              </p>
              <p className="text-sm md:text-base text-slate-500">
                Telefone: +244 923 456 789
              </p>
              <p className="text-sm md:text-base text-slate-500">
                Endereço: Rua das Flores, Nº 123, Bairro Jardim, Luanda – Angola
              </p>
            </div>
          </div>
        </section>

        {/* ===== Formulário de Editar Perfil ===== */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
          <h3 className="text-xl font-semibold text-teal-800 mb-4">
            Editar Perfil
          </h3>
          <form className="space-y-4">
            {/* Upload de Foto */}
            <div>
              <label className="block text-sm text-slate-700 font-medium mb-1">
                Foto de Perfil
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="António Manuel"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="antonio.manuel@email.com"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Telefone
                </label>
                <input
                  type="text"
                  placeholder="+244 923 456 789"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Endereço
                </label>
                <input
                  type="text"
                  placeholder="Rua das Flores, Nº 123, Bairro Jardim"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition"
            >
              Salvar Alterações
            </button>
          </form>
        </div>

        {/* ===== Formulário Alterar Senha ===== */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
          <h3 className="text-xl font-semibold text-teal-800 mb-4">
            Alterar Senha
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-slate-700 font-medium mb-1">
                Senha Atual
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-700 font-medium mb-1">
                Nova Senha
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-700 font-medium mb-1">
                Confirmar Nova Senha
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition"
            >
              Alterar Senha
            </button>
          </form>
        </div>
      </div>
    </PacienteLayout>
  );
}
