import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import EspecialistaImg1 from "../../assets/img/especialista1.jpg";
import EspecialistaImg2 from "../../assets/img/especialista2.jpg";
import EspecialistaImg3 from "../../assets/img/especialista3.jpg";
import EspecialistaImg4 from "../../assets/img/especialista4.jpg";
import EspecialistaImg5 from "../../assets/img/especialista5.jpg";
import EspecialistaImg6 from "../../assets/img/especialista6.jpg";
import EspecialistaImg7 from "../../assets/img/especialista7.jpg";
import EspecialistaImg8 from "../../assets/img/especialista8.jpg";

export default function Especialistas() {
  return (
    <>
      <title>Especialistas | Sisa Free</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            Nossa Equipe
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Especialistas Dedicados
          </h1>

          <p className="text-lg text-slate-600">
            Conheça os especialistas que cuidarão da sua saúde com excelência e
            dedicação. Agende sua consulta hoje e receba atendimento médico
            seguro, humano e de qualidade.
          </p>
        </div>
      </section>

      {/* Pesquisa e Filtro */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Pesquisar especialista
              </label>
              <input
                type="text"
                placeholder="Digite o nome do médico"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Especialidade
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none">
                <option>Selecione a especialidade</option>
                <option>Clínica Geral</option>
                <option>Pediatria</option>
                <option>Cardiologia</option>
                <option>Ginecologia</option>
                <option>Ortopedia</option>
                <option>Neurologia</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer">
                Buscar Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Especialistas */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg1}
                alt="Dr. Carlos Silva"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay e ícone */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dr. Carlos Silva
              </h3>
              <p className="text-slate-500 mb-4">Clínico Geral</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg2}
                alt="Dra. Ana Mendes"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dra. Ana Mendes
              </h3>
              <p className="text-slate-500 mb-4">Pediatra</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg3}
                alt="Dr. João Pires"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dr. João Pires
              </h3>
              <p className="text-slate-500 mb-4">Cardiologista</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg4}
                alt="Dra. Sofia Costa"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dra. Sofia Costa
              </h3>
              <p className="text-slate-500 mb-4">Ginecologista</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg5}
                alt="Dr. Miguel Rocha"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dr. Miguel Rocha
              </h3>
              <p className="text-slate-500 mb-4">Ortopedista</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg6}
                alt="Dra. Luísa Fernandes"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dra. Luísa Fernandes
              </h3>
              <p className="text-slate-500 mb-4">Neurologista</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Card 7 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg7}
                alt="Dr. Paulo Nunes"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dr. Paulo Nunes
              </h3>
              <p className="text-slate-500 mb-4">Clínico Geral</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Card 8 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={EspecialistaImg8}
                alt="Dra. Helena Martins"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Dra. Helena Martins
              </h3>
              <p className="text-slate-500 mb-4">Pediatra</p>
              <Link
                to="/agendar"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
