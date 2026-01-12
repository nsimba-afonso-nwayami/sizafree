import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Contato() {
  return (
    <>
      <title>Contato | Sisa Free</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            Fale Connosco
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Entre em Contato
          </h1>

          <p className="text-lg text-slate-600">
            Estamos aqui para ajudar! Envie sua mensagem ou dúvida e nossa
            equipe retornará o mais rápido possível.
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl shadow-lg p-10">
          <form className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="9XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Assunto
              </label>
              <input
                type="text"
                placeholder="Assunto da mensagem"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Mensagem
              </label>
              <textarea
                placeholder="Escreva sua mensagem aqui..."
                rows="5"
                className="w-full resize-none px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Informações de Contato com ícones */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
            Nossas Informações
          </h2>
          <p className="text-slate-600 mb-8">
            Caso prefira, você também pode nos contatar diretamente pelos nossos
            canais abaixo.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-12 text-teal-700">
            <div className="flex flex-col items-center md:items-start">
              <i className="fa-solid fa-envelope text-2xl mb-2"></i>
              <h3 className="font-semibold text-lg">E-mail</h3>
              <p>contato@sisafree.com</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <i className="fa-solid fa-phone text-2xl mb-2"></i>
              <h3 className="font-semibold text-lg">Telefone</h3>
              <p>+244 999 999 999</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <i className="fa-solid fa-location-dot text-2xl mb-2"></i>
              <h3 className="font-semibold text-lg">Endereço</h3>
              <p>Luanda, Angola</p>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa Sisa Free"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d13.2345678!3d-8.834567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51abcd1234567%3A0xabcdef123456!2sLuanda%2C%20Angola!5e0!3m2!1spt-PT!2sus!4v1234567890"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-linear-to-r from-teal-500 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-slate-100 mb-8 max-w-2xl mx-auto">
            Cadastre-se no Sisa Free e conecte-se rapidamente a médicos,
            farmácias e hospitais para atendimento seguro e digital.
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
