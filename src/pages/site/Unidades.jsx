import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import UnidadeImg1 from "../../assets/img/hospital1.jpg";
import UnidadeImg2 from "../../assets/img/hospital2.jpg";
import UnidadeImg3 from "../../assets/img/hospital3.jpg";
import UnidadeImg4 from "../../assets/img/hospital4.jpg";

export default function Unidades() {
  return (
    <>
      <title>Unidades de Saúde | Sisa Free</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            Nossas Unidades
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Unidades de Saúde
          </h1>

          <p className="text-lg text-slate-600">
            Conheça nossas unidades de saúde em Angola. Cada unidade oferece atendimento de qualidade, seguro e humanizado, pronta para cuidar de você e da sua família.
          </p>
        </div>
      </section>

      {/* Unidades */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={UnidadeImg1}
                alt="Hospital Central de Luanda"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-hospital"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Hospital Central de Luanda
              </h3>
              <p className="text-slate-500 mb-4">Hospital Geral - Luanda</p>
              <Link
                to="/unidade/1"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Unidade
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={UnidadeImg2}
                alt="Clínica do Coração"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-hospital"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Clínica do Coração
              </h3>
              <p className="text-slate-500 mb-4">Clínica Especializada - Luanda</p>
              <Link
                to="/unidade/2"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Unidade
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={UnidadeImg3}
                alt="Laboratório Central"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-hospital"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Laboratório Central
              </h3>
              <p className="text-slate-500 mb-4">Laboratório - Luanda</p>
              <Link
                to="/unidade/3"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Unidade
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={UnidadeImg4}
                alt="Clínica Siza Free"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-hospital"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Clínica Sisa Free
              </h3>
              <p className="text-slate-500 mb-4">Clínica Geral - Luanda</p>
              <Link
                to="/unidade/4"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Unidade
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
