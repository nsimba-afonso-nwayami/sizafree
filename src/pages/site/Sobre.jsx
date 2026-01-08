import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SobreImg from "../../assets/img/sobre.jpg";

export default function Sobre() {
  return (
    <>
      <title>Sobre | Siza Free</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            Ecossistema de Saúde Digital
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6 leading-tight">
            Saúde conectada, feita para Angola
          </h1>

          <p className="text-lg text-slate-600 mb-6">
            O <strong>Siza Free</strong> é uma plataforma de saúde digital
            criada para conectar pacientes, médicos, farmácias e unidades de
            saúde em um único ecossistema seguro, acessível e eficiente.
          </p>

          <p className="text-slate-500">
            Acreditamos que tecnologia pode reduzir distâncias, filas e
            dificuldades no acesso à saúde, promovendo mais qualidade de vida
            para todos.
          </p>
        </div>
      </section>

      {/* Saiba mais sobre nós */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
              Saiba mais sobre nós
            </span>

            <h2 className="text-4xl font-bold text-teal-800 mb-6">
              Uma nova forma de acessar saúde em Angola
            </h2>

            <p className="text-slate-600 mb-4">
              O <strong>Siza Free</strong> nasce da necessidade de aproximar
              pessoas dos serviços de saúde, utilizando tecnologia para
              simplificar processos, reduzir filas e melhorar a experiência do
              paciente.
            </p>

            <p className="text-slate-600 mb-6">
              A plataforma conecta pacientes, médicos, farmácias e unidades de
              saúde em um ecossistema digital seguro, permitindo consultas,
              agendamentos e gestão de histórico clínico de forma integrada.
            </p>

            {/* Mini-cards de números */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                <i className="fa-solid fa-clock text-2xl text-teal-500 mb-3"></i>
                <h3 className="text-3xl font-bold text-teal-700">24/7</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Acesso contínuo à plataforma
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                <i className="fa-solid fa-shield-halved text-2xl text-teal-500 mb-3"></i>
                <h3 className="text-3xl font-bold text-teal-700">100%</h3>
                <p className="text-slate-500 text-sm mt-1">Digital e seguro</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                <i className="fa-solid fa-map-location-dot text-2xl text-teal-500 mb-3"></i>
                <h3 className="text-3xl font-bold text-teal-700">Angola</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Desenvolvido localmente
                </p>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <img
              src={SobreImg}
              alt="Sobre o Siza Free"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-teal-200"></div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 shadow-sm">
            <i className="fa-solid fa-heart-pulse text-5xl text-teal-500 mb-6 animate-pulse"></i>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">
              Nosso Propósito
            </h2>
            <p className="text-slate-600 text-lg">
              Facilitar o acesso à saúde em Angola através de soluções digitais
              confiáveis, humanas e centradas no paciente.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            O que nos move
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Nosso trabalho é guiado por princípios claros que orientam cada
            decisão e cada funcionalidade do Siza Free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Missão */}
          <div className="group bg-white rounded-2xl p-10 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-br from-teal-100/40 to-transparent"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-200 text-teal-700 flex items-center justify-center text-2xl shadow-sm">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-3 text-center">
                Missão
              </h3>
              <p className="text-slate-600 text-center">
                Democratizar o acesso à saúde, conectando pessoas e serviços por
                meio da tecnologia.
              </p>
            </div>
          </div>

          {/* Visão */}
          <div className="group bg-white rounded-2xl p-10 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-br from-teal-100/40 to-transparent"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-200 text-teal-700 flex items-center justify-center text-2xl shadow-sm">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-3 text-center">
                Visão
              </h3>
              <p className="text-slate-600 text-center">
                Tornar-se a principal plataforma de saúde digital em Angola,
                promovendo inovação e confiança.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="group bg-white rounded-2xl p-10 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-br from-teal-100/40 to-transparent"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-200 text-teal-700 flex items-center justify-center text-2xl shadow-sm">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-3 text-center">
                Valores
              </h3>
              <p className="text-slate-600 text-center">
                Ética, privacidade, inovação, acessibilidade e cuidado com as
                pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
