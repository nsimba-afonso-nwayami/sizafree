import EspecialistaLayout from "./components/EspecialistaLayout";
import { Link } from "react-router-dom";

export default function PerfilEspecialista() {
  return (
    <>
      <title>Perfil | Dashboard Especialista</title>

      <EspecialistaLayout title="Perfil do Especialista">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* ===== Informações do Especialista ===== */}
          <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Foto */}
              <div className="shrink-0">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq4pQEtkz5KjM8K9eMz0LdCrjYpk2p7DxNXacv_ih_0sc-oJ5KlpwvIbU1c-cl"
                  alt="Especialista"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-teal-500 object-cover"
                />
              </div>

              {/* Informações */}
              <div className="flex-1 space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Dr. Carlos Silva
                </h2>

                <p className="text-sm md:text-base text-slate-500">
                  Especialidade: Clínica Geral
                </p>

                <p className="text-sm md:text-base text-slate-500">
                  Registro Profissional: CRM 123456
                </p>

                <p className="text-sm md:text-base text-slate-500">
                  Email: especialista@sisa.com
                </p>

                <p className="text-sm md:text-base text-slate-500">
                  Telefone: +244 900 000 000
                </p>

                <p className="text-sm md:text-base text-slate-500">
                  Unidade: Hospital Geral de Luanda
                </p>

                <span className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
                  <i className="fas fa-check-circle"></i>
                  Perfil Verificado
                </span>
              </div>
            </div>
          </section>

          {/* ===== Formulário de Editar Perfil ===== */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Editar Dados Profissionais
            </h3>

            <form className="space-y-4">
              {/* Upload de Foto */}
              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Foto de Perfil
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Carlos Silva"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Especialidade
                  </label>

                  <select className="w-full px-3 py-2 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition">
                    <option value="">Selecione a especialidade</option>

                    <optgroup label="Clínicas Gerais">
                      <option>Clínico Geral</option>
                      <option>Medicina Interna</option>
                      <option>Medicina Familiar</option>
                    </optgroup>

                    <optgroup label="Especialidades Médicas">
                      <option>Cardiologia</option>
                      <option>Dermatologia</option>
                      <option>Endocrinologia</option>
                      <option>Gastroenterologia</option>
                      <option>Geriatria</option>
                      <option>Hematologia</option>
                      <option>Infectologia</option>
                      <option>Nefrologia</option>
                      <option>Neurologia</option>
                      <option>Oncologia</option>
                      <option>Pneumologia</option>
                      <option>Reumatologia</option>
                    </optgroup>

                    <optgroup label="Cirúrgicas">
                      <option>Cirurgia Geral</option>
                      <option>Cirurgia Plástica</option>
                      <option>Cirurgia Cardiovascular</option>
                      <option>Cirurgia Pediátrica</option>
                      <option>Neurocirurgia</option>
                      <option>Ortopedia e Traumatologia</option>
                      <option>Urologia</option>
                    </optgroup>

                    <optgroup label="Mulher e Criança">
                      <option>Ginecologia</option>
                      <option>Obstetrícia</option>
                      <option>Pediatria</option>
                      <option>Neonatologia</option>
                    </optgroup>

                    <optgroup label="Diagnóstico e Apoio">
                      <option>Anestesiologia</option>
                      <option>Radiologia</option>
                      <option>Patologia Clínica</option>
                    </optgroup>

                    <optgroup label="Saúde Mental">
                      <option>Psiquiatria</option>
                    </optgroup>

                    <optgroup label="Outras Áreas da Saúde">
                      <option>Enfermagem</option>
                      <option>Farmácia</option>
                      <option>Medicina do Trabalho</option>
                      <option>Medicina Desportiva</option>
                      <option>Medicina Legal</option>
                      <option>Saúde Pública</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Província
                  </label>

                  <select className="w-full px-3 py-2 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition">
                    <option value="">Selecione a província</option>
                    <option>Bengo</option>
                    <option>Benguela</option>
                    <option>Bié</option>
                    <option>Cabinda</option>
                    <option>Cuando</option>
                    <option>Cubango</option>
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
                    <option>Moxico Leste</option>
                    <option>Namibe</option>
                    <option>Uíge</option>
                    <option>Zaire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Documento Profissional
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Ex: Carteira profissional, CRM, Ordem
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Documento de Identificação
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Ex: BI, Passaporte ou Cartão de Eleitor
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Email Profissional
                  </label>
                  <input
                    type="email"
                    placeholder="especialista@sisa.com"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="text"
                    placeholder="+244 900 000 000"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Registro Profissional
                  </label>
                  <input
                    type="text"
                    placeholder="CRM 123456"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-1">
                    Unidade / Clínica
                  </label>
                  <input
                    type="text"
                    placeholder="Hospital Geral de Luanda"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition"
              >
                Salvar Alterações
              </button>
            </form>
          </div>

          {/* ===== Formulário Alterar Senha ===== */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Alterar Senha
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Senha Atual
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Nova Senha
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700 font-medium mb-1">
                  Confirmar Nova Senha
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition"
              >
                Alterar Senha
              </button>
            </form>
          </div>
        </div>
      </EspecialistaLayout>
    </>
  );
}
