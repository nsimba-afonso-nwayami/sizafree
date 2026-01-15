import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-teal-600 to-teal-900 text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-8">
        {/* Logo e descrição */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 drop-shadow-md">
            <i className="fa-solid fa-heart-pulse text-white"></i>
            Sisa
          </h3>
          <p className="text-teal-100 drop-shadow-sm">
            Conectando pacientes, médicos, farmácias e centros médicos através
            de histórico clínico digital em Angola.
          </p>

          {/* Redes sociais */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-white border-2 border-white rounded-full p-3 flex items-center justify-center 
                         hover:text-teal-500 hover:border-teal-500 transition duration-300
                         shadow-sm hover:shadow-lg"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-white border-2 border-white rounded-full p-3 flex items-center justify-center 
                         hover:text-teal-500 hover:border-teal-500 transition duration-300
                         shadow-sm hover:shadow-lg"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-white border-2 border-white rounded-full p-3 flex items-center justify-center 
                         hover:text-teal-500 hover:border-teal-500 transition duration-300
                         shadow-sm hover:shadow-lg"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-white border-2 border-white rounded-full p-3 flex items-center justify-center 
                         hover:text-teal-500 hover:border-teal-500 transition duration-300
                         shadow-sm hover:shadow-lg"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Links de navegação */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2 text-white drop-shadow-sm">
            Navegação
          </h4>
          <Link
            to="/"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Início
          </Link>
          <Link
            to="/servicos"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Serviços
          </Link>
          <Link
            to="/sobre"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Sobre Nós
          </Link>
          <Link
            to="/telemedicina"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Telemedicina
          </Link>
          <Link
            to="/contato"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Contato
          </Link>
        </div>

        {/* Contato / Informações */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2 text-white drop-shadow-sm">
            Contato
          </h4>
          <a
            href="mailto:contato@sizafree.com"
            className="text-teal-100 hover:text-white transition drop-shadow-sm"
          >
            Email: contato@sisafree.com
          </a>
          <a
            href="tel:+244923000000"
            className="text-teal-100 hover:text-white transition drop-shadow-sm"
          >
            Telefone: +244 923 000 000
          </a>
          <p className="text-teal-100 drop-shadow-sm">
            Endereço: Luanda, Angola
          </p>
        </div>

        {/* Outros links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2 text-white drop-shadow-sm">
            Outros Links
          </h4>
          <Link
            to="/politica-dados"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Política de Dados
          </Link>
          <Link
            to="/privacidade"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Privacidade
          </Link>
          <Link
            to="/termos-uso"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            Termos de Uso
          </Link>
          <Link
            to="/faq"
            className="hover:text-teal-300 transition drop-shadow-sm"
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* Copyright com borda mais visível */}
      <div className="mt-12 border-t-2 border-teal-300/80 pt-6 text-center text-teal-200 text-sm drop-shadow-sm">
        &copy; {new Date().getFullYear()} Sisa Free. Todos os direitos reservados.
      </div>
    </footer>
  );
}
