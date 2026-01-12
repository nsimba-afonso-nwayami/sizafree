import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Agendar() {
  return (
    <>
      <title>Agendar | Sisa Free</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            Agendamento
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Agende Sua Consulta
          </h1>

          <p className="text-lg text-slate-600">
            Escolha o especialista, a unidade de saúde e o melhor horário para
            você. O Sisa Free conecta você ao cuidado médico de forma simples,
            segura e digital.
          </p>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-teal-800 mb-4 text-center">
            Dados da Consulta
          </h2>
          <p className="text-slate-600 mb-10 text-center">
            Preencha corretamente as informações abaixo para concluir o
            agendamento da sua consulta.
          </p>

          <form className="grid gap-6">
            {/* Nome */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
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
                placeholder="Ex: 9XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            {/* Especialista */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Especialista
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              >
                <option value="">Selecione o especialista</option>
                <option>Dr. Carlos Silva – Clínico Geral</option>
                <option>Dra. Ana Mendes – Pediatra</option>
                <option>Dr. João Pires – Cardiologista</option>
                <option>Dra. Sofia Costa – Ginecologista</option>
                <option>Dr. Miguel Rocha – Ortopedista</option>
              </select>
            </div>

            {/* Unidade de Saúde */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Unidade de Saúde
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              >
                <option value="">Selecione a unidade</option>
                <option>Hospital Geral de Luanda</option>
                <option>Hospital Josina Machel</option>
                <option>Hospital Militar Principal</option>
                <option>Hospital Divina Providência</option>
                <option>Clínica Girassol</option>
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

            {/* Horário */}
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
              className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-lg transition cursor-pointer"
            >
              Confirmar Agendamento
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
