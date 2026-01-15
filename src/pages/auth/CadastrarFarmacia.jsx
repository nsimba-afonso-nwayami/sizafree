import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CadastrarFarmacia() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    logo: null,
    nome: "",
    telefone: "",
    email: "",
    licenca: "",
    responsavel: "",
    horario: "",
    atendimento: "",
    endereco: "",
    provincia: "",
    docLicenca: null,
    docResponsavel: null,
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
      "logo",
      "nome",
      "telefone",
      "email",
      "licenca",
      "responsavel",
      "horario",
      "atendimento",
      "endereco",
      "provincia",
      "docLicenca",
      "docResponsavel",
    ];

    const algumVazio = camposObrigatorios.some((campo) => !formData[campo]);

    if (algumVazio) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Simulação de sucesso
    navigate("/dashboard/farmacia");
  }

  return (
    <>
      <title>Cadastrar Farmácia | Sisa Free</title>

      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full text-3xl shadow-lg">
              <i className="fa-solid fa-pills"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-teal-800 text-center mb-2">
            Cadastro da Farmácia
          </h2>

          <p className="text-center text-slate-600 mb-8">
            Complete as informações para validação da farmácia no Sisa Free.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Logo / Foto da Farmácia
              </label>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome da Farmácia"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
              <input
                type="text"
                name="licenca"
                placeholder="Nº da Licença / Alvará"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <div>
              <input
                type="text"
                name="responsavel"
                placeholder="Farmacêutico Responsável"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="horario"
                placeholder="Horário de Funcionamento"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
              <select
                name="atendimento"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              >
                <option value="">Tipo de Atendimento</option>
                <option>Presencial</option>
                <option>Delivery</option>
                <option>Presencial e Delivery</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                name="endereco"
                placeholder="Endereço"
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
              <option>Bengo</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="file"
                name="docLicenca"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300"
              />
              <input
                type="file"
                name="docResponsavel"
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
