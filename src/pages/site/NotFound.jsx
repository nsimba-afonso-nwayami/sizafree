import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Sisa Free</title>

      {/* Header */}
      <Header />

      {/* Conteúdo 404 */}
      <main className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 px-6 text-center py-24">
        {/* Ícone animado */}
        <i className="fa-solid fa-heart-pulse text-teal-500 text-6xl mb-6 fa-beat"></i>

        {/* Número 404 */}
        <h1 className="text-7xl font-extrabold text-teal-500 mb-6">404</h1>

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Oops! Página não encontrada
        </h2>

        {/* Descrição */}
        <p className="text-slate-500 mb-8 max-w-md">
          A página que você está tentando acessar não existe ou foi movida.
          Verifique o endereço ou volte para a página inicial.
        </p>

        {/* Botão */}
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer"
        >
          Voltar para Início
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
