import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CadastrarEspecialista() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    especialidade: "",
    registro: "",
    experiencia: "",
    atendimento: "",
    hospital: "",
    provincia: "",
    foto: null,
    docProfissional: null,
    docIdentificacao: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const camposObrigatorios = [
      "nome",
      "telefone",
      "email",
      "especialidade",
      "registro",
      "experiencia",
      "atendimento",
      "hospital",
      "provincia",
      "foto",
      "docProfissional",
      "docIdentificacao",
    ];

    const algumVazio = camposObrigatorios.some((campo) => !formData[campo]);

    if (algumVazio) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Simulação de sucesso
    navigate("/dashboard/especialista");
  }

  return (
    <>
      <title>Cadastrar Especialista | Sisa Free</title>

      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Foto de Perfil
              </label>
              <input
                type="file"
                name="foto"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Especialidade
              </label>
              <select
                name="especialidade"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              >
                <option value="">Selecione</option>
                <option>Clínico Geral</option>
                <option>Cardiologia</option>
                <option>Pediatria</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="registro"
                placeholder="Registro"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />

              <input
                type="number"
                name="experiencia"
                placeholder="Anos de experiência"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="atendimento"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              >
                <option value="">Tipo de atendimento</option>
                <option>Presencial</option>
                <option>Online</option>
              </select>

              <input
                type="text"
                name="hospital"
                placeholder="Hospital / Clínica"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <select
              name="provincia"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
            >
              <option value="">Selecione a província</option>
              <option>Luanda</option>
              <option>Benguela</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="file"
                name="docProfissional"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
              <input
                type="file"
                name="docIdentificacao"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl font-bold bg-teal-500 hover:bg-teal-600 text-white"
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
