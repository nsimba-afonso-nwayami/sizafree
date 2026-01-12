import { Routes, Route } from "react-router-dom";

/*Rotas do site */
import Home from "../pages/site/Home";
import Servicos from "../pages/site/Servicos";
import Sobre from "../pages/site/Sobre";
import Especialistas from "../pages/site/Especialistas";
import Unidades from "../pages/site/Unidades";
import Farmacias from "../pages/site/Farmacias";
import Agendar from "../pages/site/Agendar";
import Telemedicina from "../pages/site/Telemedicina";
import Contato from "../pages/site/Contato";
import NotFound from "../pages/site/NotFound";

/*Rotas de autenticação */
import Login from "../pages/auth/Login";
import Cadastrar from "../pages/auth/Cadastrar";
import CadastrarEspecialista from "../pages/auth/CadastrarEspecialista";
import CadastrarFarmacia from "../pages/auth/CadastrarFarmacia";
import CadastrarHospital from "../pages/auth/CadastrarHospital";
import EsqueceuSenha from "../pages/auth/EsqueceuSenha";

//Rotas do paciente
import DashboardPaciente from "../pages/paciente/DashboardPaciente";
import PerfilPaciente from "../pages/paciente/PerfilPaciente";
import ConsultasPaciente from "../pages/paciente/ConsultasPaciente";
import NotFoundPaciente from "../pages/paciente/NotFoundPaciente";

export default function AppRoutes () {
    return (
        <Routes>
            {/*Rotas do site */}
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/especialistas" element={<Especialistas />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/farmacias" element={<Farmacias />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/telemedicina" element={<Telemedicina />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />

            {/*Rotas de autenticação */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/cadastrar" element={<Cadastrar />} />
            <Route path="/auth/cadastrar/especialista" element={<CadastrarEspecialista />} />
            <Route path="/auth/cadastrar/farmacia" element={<CadastrarFarmacia />} />
            <Route path="/auth/cadastrar/hospital" element={<CadastrarHospital />} />
            <Route path="/auth/esqueceu-senha" element={<EsqueceuSenha />} />

            {/*Rotas do paciente */}
            <Route path="/dashboard/paciente/">
                <Route path="" element={<DashboardPaciente />} />
                <Route path="perfil" element={<PerfilPaciente />} />
                <Route path="consultas" element={<ConsultasPaciente />} />
                <Route path="*" element={<NotFoundPaciente />} />
            </Route>
        </Routes>
    )
}