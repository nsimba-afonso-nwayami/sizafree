import { Routes, Route } from "react-router-dom";

/*Rotas do site */
import Home from "../pages/site/Home";
import Servicos from "../pages/site/Servicos";
import Sobre from "../pages/site/Sobre";
import Especialistas from "../pages/site/Especialistas";
import Agendar from "../pages/site/Agendar";
import Telemedicina from "../pages/site/Telemedicina";
import Contato from "../pages/site/Contato";
import NotFound from "../pages/site/NotFound";

/*Rotas de autenticação */
import Login from "../pages/auth/Login";
import Cadastrar from "../pages/auth/Cadastrar";
import CadastrarMedico from "../pages/auth/CadastrarMedico";
import CadastrarFarmacia from "../pages/auth/CadastrarFarmacia";
import CadastrarHospital from "../pages/auth/CadastrarHospital";
import EsqueceuSenha from "../pages/auth/EsqueceuSenha";

export default function AppRoutes () {
    return (
        <Routes>
            {/*Rotas do site */}
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/especialistas" element={<Especialistas />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/telemedicina" element={<Telemedicina />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />

            {/*Rotas de autenticação */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/cadastrar" element={<Cadastrar />} />
            <Route path="/auth/cadastrar/medico" element={<CadastrarMedico />} />
            <Route path="/auth/cadastrar/farmacia" element={<CadastrarFarmacia />} />
            <Route path="/auth/cadastrar/hospital" element={<CadastrarHospital />} />
            <Route path="/auth/esqueceu-senha" element={<EsqueceuSenha />} />
        </Routes>
    )
}