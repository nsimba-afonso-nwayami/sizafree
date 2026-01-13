import { Link } from "react-router-dom";
import EspecialistaLayout from "./components/EspecialistaLayout";

export default function NotFoundEspecialista() {
  return (
    <>
      <title>Página não encontrada | Dashboard Especialista</title>

      <EspecialistaLayout title="Página não encontrada">
        <main className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 px-6 text-center py-24">
          {/* Ícone animado */}
          <i className="fa-solid fa-user-doctor text-teal-500 text-5xl mb-4 fa-beat"></i>

          {/* Número 404 */}
          <h1 className="text-6xl font-extrabold text-teal-500 mb-4">404</h1>

          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
            Oops! Página não encontrada
          </h2>

          {/* Descrição */}
          <p className="text-slate-500 mb-6 max-w-md text-sm md:text-base">
            A página que você está tentando acessar não existe, foi removida ou
            está temporariamente indisponível.
          </p>

          {/* Botão */}
          <Link
            to="/dashboard/especialista"
            className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer text-sm"
          >
            Voltar para o Dashboard
          </Link>
        </main>
      </EspecialistaLayout>
    </>
  );
}
