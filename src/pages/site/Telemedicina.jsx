import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TelemedicinaVideo from "../../assets/video/telemedicina.mp4"; // mesmo vídeo da home

export default function Telemedicina() {
  return (
    <>
      <title>Telemedicina | Sisa Free</title>

      {/* Header */}
      <Header />

      {/* Hero / Introdução */}
      <section className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            Telemedicina
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Consultas Médicas Online
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            Converse com médicos nacionais e internacionais de forma prática e
            segura, sem sair de casa. A Telemedicina do Sisa Free conecta você a
            profissionais qualificados para cuidar da sua saúde em qualquer
            lugar.
          </p>

          <Link
            to="/agendar"
            className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition"
          >
            Agendar Consulta
          </Link>
        </div>

        {/* Vídeo */}
        <div className="mt-12 max-w-4xl mx-auto">
          <video
            src={TelemedicinaVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl shadow-lg"
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Por que usar Telemedicina?
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            A Telemedicina do Sisa Free permite consultas rápidas, seguras e
            eficientes, reduzindo deslocamentos, otimizando seu tempo e
            garantindo acompanhamento médico de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="bg-teal-50 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-xl transition">
            <i className="fa-solid fa-clock text-teal-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-teal-800 mb-2">
              Economia de Tempo
            </h3>
            <p className="text-slate-600 text-center">
              Consulte médicos sem sair de casa e evite longas esperas.
            </p>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-xl transition">
            <i className="fa-solid fa-video text-teal-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-teal-800 mb-2">
              Consultas Online
            </h3>
            <p className="text-slate-600 text-center">
              Atendimento médico por vídeo, garantindo conforto e segurança.
            </p>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-xl transition">
            <i className="fa-solid fa-shield-halved text-teal-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-teal-800 mb-2">
              Segurança e Privacidade
            </h3>
            <p className="text-slate-600 text-center">
              Suas informações médicas são protegidas com tecnologia de ponta.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-linear-to-r from-teal-500 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para sua consulta online?
          </h2>
          <p className="text-slate-100 mb-8 text-lg">
            Agende agora e conecte-se com médicos especializados em poucos
            cliques.
          </p>
          <Link
            to="/agendar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition cursor-pointer"
          >
            Agendar Consulta
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
