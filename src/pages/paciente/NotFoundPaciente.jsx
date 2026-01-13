import { Link } from "react-router-dom";
import PacienteLayout from "./components/PacienteLayout";

export default function NotFoundPaciente() {
  return (
    <>
      <title>Página não encontrada | Dashboard Paciente</title>
      <PacienteLayout title="Página não encontrada">
        <main className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 px-6 text-center py-24">
          {/* Ícone animado */}
          <i className="fa-solid fa-heart-pulse text-teal-500 text-5xl mb-4 fa-beat"></i>

          {/* Número 404 */}
          <h1 className="text-6xl font-extrabold text-teal-500 mb-4">404</h1>

          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
            Oops! Página não encontrada
          </h2>

          {/* Descrição */}
          <p className="text-slate-500 mb-6 max-w-md text-sm md:text-base">
            A página que você está tentando acessar não existe ou foi movida.
            Verifique o endereço ou volte para a página inicial.
          </p>

          {/* Botão */}
          <Link
            to="/dashboard/paciente"
            className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition cursor-pointer text-sm"
          >
            Voltar para o Dashboard
          </Link>
        </main>
      </PacienteLayout>
    </>
  );
}
