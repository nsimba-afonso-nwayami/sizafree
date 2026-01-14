import FarmaciaLayout from "./components/FarmaciaLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function ProdutosFarmacia() {
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const produtosDummy = [
    {
      id: 1,
      nome: "Amoxicilina 500mg",
      categoria: "Antibiótico",
      preco: "3.500 Kz",
      estoque: 120,
      status: "Em estoque",
      imagem:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1VLKHA5ruX3DKEp4lCSjLxEi4Y0jbxbQdimqFYGIy-FcP_QaH2ZA47MkvOJua",
      descricao:
        "Antibiótico indicado para infecções bacterianas. Uso sob prescrição médica.",
    },
    {
      id: 2,
      nome: "Paracetamol 500mg",
      categoria: "Analgésico",
      preco: "1.200 Kz",
      estoque: 18,
      status: "Estoque baixo",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS628tubiUI-n9vKnurNfwffTONPKkgZk5j7OiPkluQqyDwVUOr-XX9STTLKCNF",
      descricao:
        "Analgésico e antitérmico indicado para dores leves e moderadas.",
    },
    {
      id: 3,
      nome: "Ibuprofeno 400mg",
      categoria: "Anti-inflamatório",
      preco: "2.000 Kz",
      estoque: 0,
      status: "Esgotado",
      imagem:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRO8bhBcoBTdOEYf3nG7UeucGS1DBx_vpTOes-aF2q8hWgBobCsw2EFND8e0-sj",
      descricao:
        "Anti-inflamatório não esteroide. Uso conforme orientação médica.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Em estoque":
        return "bg-green-600/20 text-green-800";
      case "Estoque baixo":
        return "bg-yellow-400/30 text-yellow-800";
      case "Esgotado":
        return "bg-red-600/20 text-red-800";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <title>Produtos | Dashboard Farmácia</title>

      <FarmaciaLayout title="Produtos">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por nome ou categoria..."
            className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:flex-1"
          />

          <select className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
            <option value="">Todas as categorias</option>
            <option>Analgésico</option>
            <option>Antibiótico</option>
            <option>Anti-inflamatório</option>
          </select>
        </div>

        {/* GRID DE PRODUTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosDummy.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* IMAGEM */}
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="h-44 w-full object-cover"
              />

              {/* CONTEÚDO */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {produto.nome}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {produto.categoria}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      produto.status
                    )}`}
                  >
                    {produto.status}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-2">
                  Estoque:{" "}
                  <span className="font-medium">{produto.estoque}</span>
                </p>

                <p className="text-lg font-bold text-teal-600 mb-4">
                  {produto.preco}
                </p>

                {/* AÇÕES */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setOpenDetalhes(true)}
                    className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1 text-sm"
                  >
                    <i className="fas fa-eye"></i> Ver detalhes
                  </button>

                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                      Editar
                    </button>
                    <button className="px-3 py-1 text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer">
                      Estoque
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Produto"
          icon="fas fa-pills"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6 items-center bg-teal-50 border border-teal-200 rounded-xl p-6">
              <img
                src="https://img.freepik.com/free-photo/antibiotic-capsules-medicine-blister-pack_23-2148748811.jpg"
                alt="Produto"
                className="w-32 h-32 object-cover rounded-lg"
              />

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Amoxicilina 500mg
                </h2>
                <p className="text-slate-500">Antibiótico</p>

                <span className="inline-block mt-2 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                  Em estoque
                </span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-sm text-slate-500 mb-1">Descrição</p>
              <p className="text-slate-700">
                Antibiótico indicado para tratamento de infecções bacterianas.
                Uso conforme prescrição médica.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg cursor-pointer">
                Editar Produto
              </button>
              <button
                onClick={() => setOpenDetalhes(false)}
                className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </Modal>
      </FarmaciaLayout>
    </>
  );
}
