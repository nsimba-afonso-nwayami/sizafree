import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroImg from "../../assets/img/home.jpg";
import FazendoImg from "../../assets/img/fazendo-angola.jpg";
import TeleMedicinaVideo from "../../assets/video/telemedicina.mp4";

export default function Home() {
  return (
    <>
      <title>Siza Free</title>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-200 mb-6">
            Conectando pacientes, médicos, farmácias e centros de saúde
          </h1>
          <p className="text-slate-50 text-lg md:text-xl mb-8">
            Acompanhe seu histórico clínico digital, agende consultas e interaja
            com especialistas e farmácias de forma segura e prática.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/agendar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                         bg-teal-500 text-white font-semibold
                         hover:bg-teal-600 transition w-full sm:w-auto"
            >
              <i className="fa-solid fa-calendar-check"></i>
              Agendar
            </Link>
            <Link
              to="/auth/cadastrar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                         bg-teal-800 text-white font-semibold
                         hover:bg-teal-700 transition w-full sm:w-auto"
            >
              <i className="fa-solid fa-user-plus"></i>
              Cadastrar
            </Link>
          </div>
        </div>
      </section>
      {/* Cards de Destaque */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pacientes */}
          <div className="bg-teal-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <i className="fa-solid fa-user text-4xl text-teal-800 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">
              Pacientes
            </h3>
            <p className="text-slate-800">
              Acesse seu histórico clínico, agende consultas e gerencie
              tratamentos de forma segura.
            </p>
          </div>

          {/* Médicos */}
          <div className="bg-teal-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <i className="fa-solid fa-user-doctor text-4xl text-teal-800 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">
              Médicos
            </h3>
            <p className="text-slate-800">
              Gerencie pacientes, consultas e receituários digitais de forma
              prática e organizada.
            </p>
          </div>

          {/* Farmácias */}
          <div className="bg-teal-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <i className="fa-solid fa-prescription-bottle-medical text-4xl text-teal-800 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">
              Farmácias
            </h3>
            <p className="text-slate-800">
              Receba prescrições digitais e gerencie estoques de medicamentos de
              forma conectada.
            </p>
          </div>

          {/* Centros de Saúde */}
          <div className="bg-teal-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <i className="fa-solid fa-hospital text-4xl text-teal-800 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">
              Centros de Saúde
            </h3>
            <p className="text-slate-800">
              Organize consultas, exames e equipe médica de forma digital e
              integrada.
            </p>
          </div>
        </div>
      </section>
      {/* Formulário: Verificar Disponibilidade */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4 text-center">
            Verifique a disponibilidade para sua consulta
          </h2>
          <p className="text-slate-500 mb-10 text-center">
            Preencha o formulário abaixo e nosso sistema mostrará as opções
            disponíveis com base na especialidade, hospital e data desejada.
          </p>

          <form className="bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="flex flex-col">
              <label htmlFor="nome" className="mb-2 font-medium text-slate-800">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Seu nome completo"
                className="border border-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 font-medium text-slate-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="seuemail@exemplo.com"
                className="border border-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Data da Consulta */}
            <div className="flex flex-col">
              <label htmlFor="data" className="mb-2 font-medium text-slate-800">
                Data da Consulta
              </label>
              <input
                type="date"
                id="data"
                className="border border-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Especialidade */}
            <div className="flex flex-col">
              <label
                htmlFor="especialidade"
                className="mb-2 font-medium text-slate-800"
              >
                Especialidade
              </label>
              <select
                id="especialidade"
                className="border border-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option>Clínico Geral</option>
                <option>Pediatria</option>
                <option>Cardiologia</option>
                <option>Ginecologia</option>
                <option>Ortopedia</option>
              </select>
            </div>

            {/* Hospital */}
            <div className="flex flex-col">
              <label
                htmlFor="hospital"
                className="mb-2 font-medium text-slate-800"
              >
                Hospital
              </label>
              <select
                id="hospital"
                className="border border-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option>Hospital Militar Principal de Luanda</option>
                <option>Hospital Josina Machel</option>
                <option>Hospital Geral de Luanda</option>
                <option>Hospital David Bernardino</option>
                <option>Hospital Pediátrico Dr. David Bernardino</option>
              </select>
            </div>

            {/* Botão enviar */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition w-full cursor-pointer"
              >
                Verificar Disponibilidade
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* vantagens */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4 text-center">
            Benefícios para a população
          </h2>
          <p className="text-slate-500 mb-12 text-center max-w-2xl mx-auto">
            Nosso ecossistema conecta pacientes, médicos e serviços de saúde
            para oferecer atendimento rápido, seguro e acessível.
          </p>

          {/* Grid de Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Expansão do Acesso */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-globe text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Expansão do Acesso
              </h3>
              <p className="text-slate-800">
                Expansão do acesso à saúde em locais de difícil cobertura
                médica.
              </p>
            </div>

            {/* 2. Agendamento Digital */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-calendar-check text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Agendamento Digital
              </h3>
              <p className="text-slate-800">
                Agendamento digital simples e autónomo através da plataforma
                Siza Free.
              </p>
            </div>

            {/* 3. Atendimento Médico */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-user-doctor text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Atendimento Médico
              </h3>
              <p className="text-slate-800">
                Atendimento por médicos nacionais e internacionais via
                telemedicina.
              </p>
            </div>

            {/* 4. Privacidade e Conforto */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-shield-halved text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Privacidade e Conforto
              </h3>
              <p className="text-slate-800">
                Privacidade e conforto durante a realização da consulta.
              </p>
            </div>

            {/* 5. Tempo de Espera Reduzido */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-clock text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Tempo de Espera Reduzido
              </h3>
              <p className="text-slate-800">
                Redução de tempo de espera com atendimentos programados.
              </p>
            </div>

            {/* 6. Ligação Direta */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-link text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Ligação Direta
              </h3>
              <p className="text-slate-800">
                Ligação direta com os serviços disponíveis no sistema Siza Free.
              </p>
            </div>

            {/* 7. Suporte Contínuo */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-headset text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Suporte Contínuo
              </h3>
              <p className="text-slate-800">
                Assistência disponível sempre que você precisar, para dúvidas ou
                urgências.
              </p>
            </div>

            {/* 8. Notificações Inteligentes */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-bell text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Notificações Inteligentes
              </h3>
              <p className="text-slate-800">
                Receba lembretes de consultas, exames e medicamentos diretamente
                no seu dispositivo.
              </p>
            </div>

            {/* 9. Integração de Serviços */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <i className="fa-solid fa-hospital text-4xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">
                Integração de Serviços
              </h3>
              <p className="text-slate-800">
                Conexão direta com laboratórios e farmácias para maior
                praticidade nos cuidados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fazendo por angola */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
          {/* Imagem à esquerda */}
          <div className="flex-1">
            <img
              src={FazendoImg}
              alt="Fazendo por Angola"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Conteúdo à direita */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
              Fazendo por Angola
            </h2>
            <p className="text-slate-800 mb-4">
              O sistema Siza Free é desenvolvido em Angola, com foco em
              soluções que fortalecem o acesso à saúde da população. Conectamos
              pacientes, médicos, farmácias e centros médicos de forma eficiente
              e digital.
            </p>
            <p className="text-slate-500 mb-6">
              Priorizamos tecnologia, qualidade e segurança para oferecer um
              ecossistema de saúde confiável e acessível a todos.
            </p>

            {/* Mini-cards com números */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
              {/* Card 1 */}
              <div className="bg-teal-100 rounded-xl p-4 flex flex-col items-center text-center shadow">
                <i className="fa-solid fa-hospital text-teal-500 text-3xl mb-2"></i>
                <span className="text-2xl font-bold text-teal-800">25+</span>
                <span className="text-slate-800 text-sm">
                  Hospitais conectados
                </span>
              </div>

              {/* Card 2 */}
              <div className="bg-teal-100 rounded-xl p-4 flex flex-col items-center text-center shadow">
                <i className="fa-solid fa-user-doctor text-teal-500 text-3xl mb-2"></i>
                <span className="text-2xl font-bold text-teal-800">120+</span>
                <span className="text-slate-800 text-sm">
                  Médicos cadastrados
                </span>
              </div>

              {/* Card 3 */}
              <div className="bg-teal-100 rounded-xl p-4 flex flex-col items-center text-center shadow">
                <i className="fa-solid fa-users text-teal-500 text-3xl mb-2"></i>
                <span className="text-2xl font-bold text-teal-800">
                  10.000+
                </span>
                <span className="text-slate-800 text-sm">
                  Pacientes atendidos
                </span>
              </div>

              {/* Card 4 */}
              <div className="bg-teal-100 rounded-xl p-4 flex flex-col items-center text-center shadow">
                <i className="fa-solid fa-calendar-check text-teal-500 text-3xl mb-2"></i>
                <span className="text-2xl font-bold text-teal-800">
                  35.000+
                </span>
                <span className="text-slate-800 text-sm">
                  Consultas digitais
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition cursor-pointer"
            >
              <i className="fa-solid fa-arrow-right"></i>
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-16">
            Nossos Serviços
          </h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Card 1: Pacientes */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-teal-700">
                <i className="fa-solid fa-user-injured mr-3"></i>
                Pacientes
              </h3>
              <p className="text-slate-700 mb-6">
                Ferramentas para agendamento de consultas, acompanhamento de
                exames e histórico clínico digital.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-calendar-check text-3xl text-teal-500"></i>
                  <p className="text-xs mt-1">Agendamento</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-file-medical text-3xl text-cyan-500"></i>
                  <p className="text-xs mt-1">Histórico</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-pills text-3xl text-lime-500"></i>
                  <p className="text-xs mt-1">Prescrições</p>
                </div>
              </div>
            </div>

            {/* Card 2: Médicos */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-green-700">
                <i className="fa-solid fa-user-doctor mr-3"></i>
                Médicos
              </h3>
              <p className="text-slate-700 mb-6">
                Plataforma completa para gerenciar consultas, acessar históricos
                e realizar telemedicina.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-video text-3xl text-green-500"></i>
                  <p className="text-xs mt-1">Telemedicina</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-file-medical text-3xl text-lime-500"></i>
                  <p className="text-xs mt-1">Prontuário</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-calendar-days text-3xl text-cyan-500"></i>
                  <p className="text-xs mt-1">Agenda</p>
                </div>
              </div>
            </div>

            {/* Card 3: Centros & Farmácias */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-yellow-700">
                <i className="fa-solid fa-hospital mr-3"></i>
                Centros & Farmácias
              </h3>
              <p className="text-slate-700 mb-6">
                Integração completa com centros médicos e farmácias, facilitando
                consultas, exames e entrega de medicamentos.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-vials text-3xl text-yellow-500"></i>
                  <p className="text-xs mt-1">Exames</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-pills text-3xl text-orange-500"></i>
                  <p className="text-xs mt-1">Farmácias</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <i className="fa-solid fa-hospital-user text-3xl text-red-500"></i>
                  <p className="text-xs mt-1">Centros Médicos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botão Saber Mais */}
          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-block px-8 py-4 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition cursor-pointer"
            >
              Saber Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Telemedicina */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
          {/* Conteúdo à esquerda */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Telemedicina
            </h2>
            <p className="text-slate-800 mb-4">
              Consultas médicas online com profissionais qualificados,
              garantindo segurança, privacidade e conforto sem sair de casa.
              Agende, consulte e acompanhe seu histórico digital de forma
              simples e eficiente.
            </p>
            <p className="text-slate-500 mb-6">
              Conectamos pacientes e médicos em qualquer lugar de Angola, usando
              tecnologia de ponta para oferecer um atendimento confiável.
            </p>

            {/* Mini-cards verticalizados */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center gap-2">
                <i className="fa-solid fa-video text-4xl text-teal-500"></i>
                <h3 className="text-teal-800 font-semibold text-lg">
                  Consultas por Vídeo
                </h3>
                <p className="text-slate-700 text-sm">
                  Converse com médicos de forma online e segura.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center gap-2">
                <i className="fa-solid fa-clock text-4xl text-cyan-500"></i>
                <h3 className="text-teal-800 font-semibold text-lg">
                  Disponível 24/7
                </h3>
                <p className="text-slate-700 text-sm">
                  Acesse consultas a qualquer hora do dia, sem restrições.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center gap-2">
                <i className="fa-solid fa-globe text-4xl text-green-500"></i>
                <h3 className="text-teal-800 font-semibold text-lg">
                  Médicos Internacionais
                </h3>
                <p className="text-slate-700 text-sm">
                  Profissionais qualificados de diversos países à sua
                  disposição.
                </p>
              </div>
            </div>

            {/* Botão CTA */}
            <Link
              to="/telemedicina"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition cursor-pointer"
            >
              <i className="fa-solid fa-arrow-right"></i>
              Saiba Mais
            </Link>
          </div>

          {/* Vídeo à direita */}
          <div className="flex-1">
            <video
              src={TeleMedicinaVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="py-16 bg-linear-to-r from-teal-500 to-teal-800">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comece sua experiência com o Siza Free
          </h2>
          <p className="text-teal-100 text-lg md:text-xl">
            Cadastre-se agora e tenha acesso a consultas, telemedicina e todo o
            histórico clínico digital em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/auth/cadastrar"
              className="px-8 py-3 rounded-lg bg-white text-teal-500 font-semibold hover:bg-teal-100 transition cursor-pointer"
            >
              Cadastrar
            </Link>
            <Link
              to="/agendar"
              className="px-8 py-3 rounded-lg bg-white text-teal-500 font-semibold hover:bg-teal-100 transition cursor-pointer"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
