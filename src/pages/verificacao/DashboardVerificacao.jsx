import VerificacaoLayout from "./components/VerificacaoLayout";
import { Link } from "react-router-dom";

export default function DashboardVerificacao() {
  return (
    <>
      <title>Dashboard Verificação</title>

      <VerificacaoLayout title="Dashboard de Verificação">
        {/* RESUMO RÁPIDO */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Hospitais Pendentes</p>
                <h3 className="text-2xl font-bold text-slate-800">12</h3>
              </div>
              <i className="fas fa-hospital text-teal-500 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Farmácias Pendentes</p>
                <h3 className="text-2xl font-bold text-slate-800">8</h3>
              </div>
              <i className="fas fa-prescription-bottle-medical text-teal-500 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div>
              <p className="text-sm text-slate-500">Especialistas Pendentes</p>
              <h3 className="text-2xl font-bold text-slate-800">23</h3>
            </div>
            <i className="fas fa-user-doctor text-teal-500 text-2xl absolute right-6 top-6"></i>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Laboratórios Pendentes</p>
                <h3 className="text-2xl font-bold text-slate-800">5</h3>
              </div>
              <i className="fas fa-vials text-teal-500 text-2xl"></i>
            </div>
          </div>
        </section>

        {/* AÇÕES PRINCIPAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SOLICITAÇÕES RECENTES */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Últimas Solicitações de Verificação
            </h2>

            <ul className="divide-y divide-slate-200">
              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-slate-800">
                    Hospital Geral de Luanda
                  </p>
                  <p className="text-sm text-slate-500">
                    Hospital • Documentos pendentes
                  </p>
                </div>
                <span className="text-sm font-semibold text-yellow-600">
                  Pendente
                </span>
              </li>

              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-slate-800">Farmácia Vida+</p>
                  <p className="text-sm text-slate-500">
                    Farmácia • Nova solicitação
                  </p>
                </div>
                <span className="text-sm font-semibold text-yellow-600">
                  Pendente
                </span>
              </li>

              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-slate-800">Dr. João Mendes</p>
                  <p className="text-sm text-slate-500">
                    Especialista • Clínica Geral
                  </p>
                </div>
                <span className="text-sm font-semibold text-yellow-600">
                  Pendente
                </span>
              </li>
            </ul>

            <Link
              to="/dashboard/verificacao/historico"
              className="mt-4 inline-block text-sm font-semibold text-teal-500 hover:text-teal-600"
            >
              Ver todas as solicitações →
            </Link>
          </div>

          {/* ATALHOS RÁPIDOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-teal-800 mb-4">
              Verificações Rápidas
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/dashboard/verificacao/hospitais"
                className="p-4 rounded-lg border hover:border-teal-500 hover:bg-teal-50 transition"
              >
                <i className="fas fa-hospital text-teal-500 text-xl mb-2"></i>
                <p className="font-semibold text-slate-800">Hospitais</p>
                <p className="text-sm text-slate-500">Analisar e aprovar</p>
              </Link>

              <Link
                to="/dashboard/verificacao/farmacias"
                className="p-4 rounded-lg border hover:border-teal-500 hover:bg-teal-50 transition"
              >
                <i className="fas fa-prescription-bottle-medical text-teal-500 text-xl mb-2"></i>
                <p className="font-semibold text-slate-800">Farmácias</p>
                <p className="text-sm text-slate-500">Verificar registros</p>
              </Link>

              <Link
                to="/dashboard/verificacao/especialistas"
                className="p-4 rounded-lg border hover:border-teal-500 hover:bg-teal-50 transition"
              >
                <i className="fas fa-user-doctor text-teal-500 text-xl mb-2"></i>
                <p className="font-semibold text-slate-800">Especialistas</p>
                <p className="text-sm text-slate-500">Validar profissionais</p>
              </Link>

              <Link
                to="/dashboard/verificacao/laboratorios"
                className="p-4 rounded-lg border hover:border-teal-500 hover:bg-teal-50 transition"
              >
                <i className="fas fa-vials text-teal-500 text-xl mb-2"></i>
                <p className="font-semibold text-slate-800">Laboratórios</p>
                <p className="text-sm text-slate-500">Analisar licenças</p>
              </Link>
            </div>
          </div>
        </div>
      </VerificacaoLayout>
    </>
  );
}
