import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Servicos() {
  return (
    <>
      <title>Serviços | Siza Free</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            O que oferecemos
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Serviços Digitais para Cuidar da Sua Saúde
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            O Siza Free oferece um ecossistema completo de serviços de saúde
            digital, conectando pacientes, médicos, farmácias e unidades de
            saúde em um só lugar, com praticidade, segurança e inovação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agendar"
              className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition"
            >
              Agendar Consulta
            </Link>

            <Link
              to="/sobre"
              className="px-8 py-4 border border-teal-500 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition"
            >
              Saiba Mais Sobre Nós
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-4">
            Nossos Serviços
          </h1>
          {/* Parágrafo explicativo */}
          <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            Explore a variedade de serviços oferecidos pelo Siza Free,
            conectando pacientes, médicos, farmácias e unidades de saúde em
            Angola de forma digital, prática e segura.
          </p>

          {/* Grid de serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Cards existentes (Telemedicina, Agendamento, etc.) */}
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg border-b-4 border-teal-500 flex flex-col hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mt-6 mx-auto text-2xl shadow-md">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
                  Telemedicina
                </h3>
                <p className="text-slate-600 mb-6 text-center flex-1">
                  Consultas médicas online com médicos nacionais e
                  internacionais, garantindo acesso rápido e seguro à saúde.
                </p>
                <Link
                  to="/telemedicina"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  Saiba Mais
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg border-b-4 border-teal-500 flex flex-col hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mt-6 mx-auto text-2xl shadow-md">
                <i className="fa-solid fa-hospital"></i>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
                  Agendamento Digital
                </h3>
                <p className="text-slate-600 mb-6 text-center flex-1">
                  Agende consultas de forma simples e autónoma em hospitais e
                  clínicas parceiras de Angola.
                </p>
                <Link
                  to="/agendamento"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  Saiba Mais
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg border-b-4 border-teal-500 flex flex-col hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mt-6 mx-auto text-2xl shadow-md">
                <i className="fa-solid fa-pills"></i>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
                  Farmácias Parceiras
                </h3>
                <p className="text-slate-600 mb-6 text-center flex-1">
                  Integração com farmácias locais para facilitar a entrega de
                  medicamentos e acompanhamento de receitas.
                </p>
                <Link
                  to="/farmacias"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  Saiba Mais
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg border-b-4 border-teal-500 flex flex-col hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mt-6 mx-auto text-2xl shadow-md">
                <i className="fa-solid fa-file-medical"></i>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
                  Histórico Clínico Digital
                </h3>
                <p className="text-slate-600 mb-6 text-center flex-1">
                  Armazene e acesse seu histórico clínico de forma segura e
                  digital, disponível em qualquer lugar.
                </p>
                <Link
                  to="/historico-clinico"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  Saiba Mais
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-lg border-b-4 border-teal-500 flex flex-col hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mt-6 mx-auto text-2xl shadow-md">
                <i className="fa-solid fa-user-md"></i>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
                  Especialistas
                </h3>
                <p className="text-slate-600 mb-6 text-center flex-1">
                  Conexão direta com especialistas nacionais e internacionais
                  para consultas e acompanhamento personalizado.
                </p>
                <Link
                  to="/especialistas"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  Saiba Mais
                </Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-lg border-b-4 border-teal-500 flex flex-col hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mt-6 mx-auto text-2xl shadow-md">
                <i className="fa-solid fa-map-marker-alt"></i>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
                  Unidades de Saúde
                </h3>
                <p className="text-slate-600 mb-6 text-center flex-1">
                  Localize facilmente hospitais e centros médicos integrados ao
                  ecossistema Siza Free.
                </p>
                <Link
                  to="/unidades"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-4">
            Como Funciona
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            Entenda o passo a passo de como utilizar os serviços do Siza Free de
            forma simples, segura e digital.
          </p>

          {/* Grid de passos com linha do tempo */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Linha do tempo horizontal para lg */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-teal-200 -z-10"></div>

            {/* Passo 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mb-6 text-2xl shadow-md">
                <i className="fa-solid fa-user-plus"></i>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2 text-center">
                Cadastro
              </h3>
              <p className="text-slate-600 text-center">
                Crie sua conta de forma rápida e segura para acessar todos os
                serviços Siza Free.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mb-6 text-2xl shadow-md">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2 text-center">
                Agendamento
              </h3>
              <p className="text-slate-600 text-center">
                Escolha o serviço ou especialista, selecione a data e horário
                que preferir.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mb-6 text-2xl shadow-md">
                <i className="fa-solid fa-video"></i>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2 text-center">
                Consulta Online
              </h3>
              <p className="text-slate-600 text-center">
                Converse com médicos nacionais ou internacionais via
                telemedicina de forma prática e segura.
              </p>
            </div>

            {/* Passo 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="bg-teal-200 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full mb-6 text-2xl shadow-md">
                <i className="fa-solid fa-file-medical"></i>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2 text-center">
                Histórico Digital
              </h3>
              <p className="text-slate-600 text-center">
                Acompanhe seu histórico clínico digital, acessível a qualquer
                momento, com segurança e privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-linear-to-r from-teal-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-slate-100 mb-8 max-w-2xl mx-auto">
            Com o Siza Free você conecta-se rapidamente a médicos, farmácias e
            hospitais, garantindo atendimento seguro e digital. Crie sua conta e
            agende sua primeira consulta agora!
          </p>
          <Link
            to="/auth/cadastrar"
            className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition cursor-pointer"
          >
            Criar Conta
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
