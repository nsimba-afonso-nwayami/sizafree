import VerificacaoLayout from "./components/VerificacaoLayout";
import { Link } from "react-router-dom";

export default function HospitaisVerificacao() {
  return (
    <>
      <title>Hospitais | Dashboard Verificação</title>

      <VerificacaoLayout title="Verificação de Hospitais">
        {/* CABEÇALHO DA PÁGINA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-slate-500 text-sm max-w-2xl">
            Analise, aprove ou rejeite os pedidos de cadastro de hospitais no
            sistema. Verifique documentos, localização e dados institucionais.
          </p>

          <input
            type="text"
            placeholder="Pesquisar hospital..."
            className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-64"
          />
        </div>

        {/* LISTAGEM DE HOSPITAIS */}
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="text-left px-6 py-4 font-semibold">Hospital</th>
                <th className="text-left px-6 py-4 font-semibold">Cidade</th>
                <th className="text-left px-6 py-4 font-semibold">Tipo</th>
                <th className="text-left px-6 py-4 font-semibold">Status</th>
                <th className="text-right px-6 py-4 font-semibold">Ações</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {/* ITEM */}
              <tr className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-800">
                    Hospital Geral de Luanda
                  </p>
                  <p className="text-xs text-slate-500">
                    CNPJ / Registro enviado
                  </p>
                </td>

                <td className="px-6 py-4 text-slate-600">Luanda</td>

                <td className="px-6 py-4 text-slate-600">Público</td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                    Pendente
                  </span>
                </td>

                <td className="px-6 py-4 text-right space-x-2">
                  <button className="px-3 py-1 text-xs font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition cursor-pointer">
                    Aprovar
                  </button>
                  <button className="px-3 py-1 text-xs font-semibold bg-red-500 hover:bg-red-600 text-white rounded-lg transition cursor-pointer">
                    Rejeitar
                  </button>
                  <Link
                    to="/dashboard/verificacao/hospitais/1"
                    className="px-3 py-1 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition"
                  >
                    Detalhes
                  </Link>
                </td>
              </tr>

              {/* ITEM */}
              <tr className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-800">
                    Hospital Josina Machel
                  </p>
                  <p className="text-xs text-slate-500">
                    Documentação completa
                  </p>
                </td>

                <td className="px-6 py-4 text-slate-600">Luanda</td>

                <td className="px-6 py-4 text-slate-600">Público</td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    Aprovado
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <Link
                    to="/dashboard/verificacao/hospitais/2"
                    className="px-3 py-1 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition"
                  >
                    Ver detalhes
                  </Link>
                </td>
              </tr>

              {/* ITEM */}
              <tr className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-800">
                    Hospital Vida Nova
                  </p>
                  <p className="text-xs text-slate-500">
                    Licença em análise
                  </p>
                </td>

                <td className="px-6 py-4 text-slate-600">Benguela</td>

                <td className="px-6 py-4 text-slate-600">Privado</td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                    Rejeitado
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <Link
                    to="/dashboard/verificacao/hospitais/3"
                    className="px-3 py-1 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition"
                  >
                    Ver detalhes
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </VerificacaoLayout>
    </>
  );
}
