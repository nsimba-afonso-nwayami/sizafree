import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Agendar() {
  return (
    <>
      <title>Agendar | Siza Free</title>

      {/* Header */}
      <Header />

      {/* Seção de Agendamento */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-teal-800 mb-4 text-center">
            Agendar Consulta
          </h1>
          <p className="text-slate-600 mb-8 text-center">
            Preencha o formulário abaixo para agendar sua consulta com nossos
            especialistas. Receba atendimento médico seguro, humano e de
            qualidade.
          </p>

          <form className="grid gap-6">
            {/* Nome */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="(xx) xxxx-xxxx"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            {/* Especialista */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Selecionar Especialista
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              >
                <option value="">Selecione o especialista</option>
                <option>Dr. Carlos Silva - Clínico Geral</option>
                <option>Dra. Ana Mendes - Pediatra</option>
                <option>Dr. João Pires - Cardiologista</option>
                <option>Dra. Sofia Costa - Ginecologista</option>
                <option>Dr. Miguel Rocha - Ortopedista</option>
              </select>
            </div>

            {/* Hospital */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Selecionar Hospital
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              >
                <option value="">Selecione o hospital</option>
                <option>Hospital da Polana</option>
                <option>Hospital Josina Machel</option>
                <option>Hospital Militar Principal</option>
                <option>Hospital Divina Providência</option>
                <option>Hospital Geral de Luanda</option>
              </select>
            </div>

            {/* Data */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Data da Consulta
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            {/* Hora */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Horário
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-lg transition cursor-pointer"
            >
              Agendar Consulta
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
