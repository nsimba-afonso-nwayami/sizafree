import { Link } from "react-router-dom";

export default function CadastrarEspecialista() {
  return (
    <>
      <title>Cadastrar Especialista | Sisa Free</title>

      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full text-3xl shadow-lg">
              <i className="fa-solid fa-user-doctor"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-teal-800 text-center mb-2">
            Cadastro de Especialista
          </h2>

          <p className="text-center text-slate-600 mb-8">
            Complete as informações profissionais para validação no Sisa Free.
          </p>

          <form className="space-y-6">
            {/* DADOS BÁSICOS */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Nome */}
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome completo"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="Ex: 9XX XXX XXX"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Digite o email"
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            {/* Foto de perfil */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Foto de Perfil
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            {/* Especialidade */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Especialidade
              </label>
              <select className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition">
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

            {/* Registro e Experiência */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Nº da Ordem / Registro Profissional
                </label>
                <input
                  type="text"
                  placeholder="Ex: CRM-123456"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Anos de Experiência
                </label>
                <input
                  type="number"
                  placeholder="Ex: 5"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Tipo de atendimento */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Tipo de Atendimento
                </label>
                <select className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition">
                  <option value="">Selecione</option>
                  <option>Presencial</option>
                  <option>Online</option>
                  <option>Presencial e Online</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Hospital / Clínica
                </label>
                <input
                  type="text"
                  placeholder="Nome da instituição"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Província */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Província
              </label>
              <select className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition">
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

            {/* Documentos */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Documento Profissional
                </label>
                <input
                  type="file"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Documento de Identificação
                </label>
                <input
                  type="file"
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl font-bold bg-teal-500 hover:bg-teal-600 transition text-white"
            >
              Enviar para Verificação
            </button>

            <p className="text-center text-sm text-slate-600 mt-4">
              Já possui conta?{" "}
              <Link to="/auth/login" className="text-teal-500 hover:underline">
                Entrar
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
