import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import FarmaciaImg1 from "../../assets/img/farmacia1.jpg";
import FarmaciaImg2 from "../../assets/img/farmacia2.jpg";
import FarmaciaImg3 from "../../assets/img/farmacia3.jpg";
import FarmaciaImg4 from "../../assets/img/farmacia4.jpg";

export default function Farmacias() {
  return (
    <>
      <title>Farmácias | Sisa Free</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-200 text-teal-700">
            Nossas Farmácias
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Farmácias Disponíveis
          </h1>

          <p className="text-lg text-slate-600">
            Encontre farmácias próximas a você em Angola. Todas oferecem
            atendimento confiável, produtos de qualidade e suporte farmacêutico
            especializado.
          </p>
        </div>
      </section>

      {/* Pesquisa e Filtro */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 grid md:grid-cols-4 gap-6">
            {/* Pesquisa por nome */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Pesquisar farmácia
              </label>
              <input
                type="text"
                placeholder="Digite o nome da farmácia"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Filtro por tipo */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tipo de farmácia
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none">
                <option>Selecione</option>
                <option>Farmácia de Manipulação</option>
                <option>Farmácia Popular</option>
                <option>Farmácia Comunitária</option>
                <option>Drogaria</option>
              </select>
            </div>

            {/* Filtro por província */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Província
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none">
                <option value="">Selecione a província</option>
                <option>Bengo</option>
                <option>Benguela</option>
                <option>Bié</option>
                <option>Cabinda</option>
                <option>Cuando Cubango</option>
                <option>Cuanza Norte</option>
                <option>Cuanza Sul</option>
                <option>Cunene</option>
                <option>Huambo</option>
                <option>Huíla</option>
                <option>Icolo e Bengo</option>
                <option>Luanda</option>
                <option>Lunda Norte</option>
                <option>Lunda Sul</option>
                <option>Malanje</option>
                <option>Moxico</option>
                <option>Namibe</option>
                <option>Uíge</option>
                <option>Zaire</option>
              </select>
            </div>

            {/* Botão de busca */}
            <div className="flex items-end">
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer">
                Buscar Farmácia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Farmácias */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={FarmaciaImg1}
                alt="Farmácia Central"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-pills"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Farmácia Central
              </h3>
              <p className="text-slate-500 mb-4">Luanda</p>
              <Link
                to="/farmacia/1"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Farmácia
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={FarmaciaImg2}
                alt="Drogaria Siza"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-pills"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">Drogaria Sisa</h3>
              <p className="text-slate-500 mb-4">Benguela</p>
              <Link
                to="/farmacia/2"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Farmácia
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={FarmaciaImg3}
                alt="Farmácia Saúde"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-pills"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Farmácia Saúde
              </h3>
              <p className="text-slate-500 mb-4">Huambo</p>
              <Link
                to="/farmacia/3"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Farmácia
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
              <img
                src={FarmaciaImg4}
                alt="Farmácia Popular"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-700/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-teal-600 flex items-center justify-center text-xl shadow-lg animate-pulse">
                  <i className="fa-solid fa-pills"></i>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-800">
                Farmácia Popular
              </h3>
              <p className="text-slate-500 mb-4">Huíla</p>
              <Link
                to="/farmacia/4"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Ver Farmácia
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
