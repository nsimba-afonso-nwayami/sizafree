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
import DetalhesConsultaPaciente from "../pages/paciente/DetalhesConsultaPaciente";
import HistoricoPaciente from "../pages/paciente/HistoricoPaciente";
import DocumentosPaciente from "../pages/paciente/DocumentosPaciente";
import PrivacidadePaciente from "../pages/paciente/PrivacidadePaciente";
import NotificacoesPaciente from "../pages/paciente/NotificacoesPaciente";
import NotFoundPaciente from "../pages/paciente/NotFoundPaciente";

//Rotas do especialista
import DashboardEspecialista from "../pages/especialista/DashboardEspecialista";
import PerfilEspecialista from "../pages/especialista/PerfilEspecialista";
import SolicitacoesEspecialista from "../pages/especialista/SolicitacoesEspecialista";
import AgendaEspecialista from "../pages/especialista/AgendaEspecialista";
import PacientesEspecialista from "../pages/especialista/PacientesEspecialista";
import HistoricoEspecialista from "../pages/especialista/HistoricoEspecialista";
import PrescricoesEspecialista from "../pages/especialista/PrescricoesEspecialista";
import NotificacoesEspecialista from "../pages/especialista/NotificacoesEspecialista";
import NotFoundEspecialista from "../pages/especialista/NotFoundEspecialista";

//Rotas do hospital
import DashboardHospital from "../pages/hospital/DashboardHospital";
import PacientesHospital from "../pages/hospital/PacientesHospital";
import HistoricoHospital from "../pages/hospital/HistoricoHospital";
import AgendaHospital from "../pages/hospital/AgendaHospital";
import SolicitacoesHospital from "../pages/hospital/SolicitacoesHospital";
import PrescricoesHospital from "../pages/hospital/PrescricoesHospital";
import ProfissionaisHospital from "../pages/hospital/ProfissionaisHospital";
import RelatoriosHospital from "../pages/hospital/RelatoriosHospital";
import ConfiguracoesHospital from "../pages/hospital/ConfiguracoesHospital";
import NotificacoesHospital from "../pages/hospital/NotificacoesHospital";
import NotFoundHospital from "../pages/hospital/NotFoundHospital";

//Rotas da farmácia
import DashboardFarmacia from "../pages/farmacia/DashboardFarmacia";
import ProfissionaisFarmacia from "../pages/farmacia/ProfissionaisFarmacia";
import PacientesFarmacia from "../pages/farmacia/PacientesFarmacia";
import HistoricoFarmacia from "../pages/farmacia/HistoricoFarmacia";
import AgendaFarmacia from "../pages/farmacia/AgendaFarmacia";
import SolicitacoesFarmacia from "../pages/farmacia/SolicitacoesFarmacia";
import PrescricoesFarmacia from "../pages/farmacia/PrescricoesFarmacia";
import ProdutosFarmacia from "../pages/farmacia/ProdutosFarmacia";
import EstoqueFarmacia from "../pages/farmacia/EstoqueFarmacia";
import VendasFarmacia from "../pages/farmacia/VendasFarmacia";
import PedidosFarmacia from "../pages/farmacia/PedidosFarmacia";
import RelatoriosFarmacia from "../pages/farmacia/RelatoriosFarmacia";
import ConfiguracoesFarmacia from "../pages/farmacia/ConfiguracoesFarmacia";
import NotificacoesFarmacia from "../pages/farmacia/NotificacoesFarmacia";
import NotFoundFarmacia from "../pages/farmacia/NotFoundFarmacia";

//Rotas do verificação
import DashboardVerificacao from "../pages/verificacao/DashboardVerificacao";
import HospitaisVerificacao from "../pages/verificacao/HospitaisVerificacao";
import NotFoundVerificacao from "../pages/verificacao/NotFoundVerificacao";

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
                <Route path="consulta/detalhes" element={<DetalhesConsultaPaciente />} />
                <Route path="historico" element={<HistoricoPaciente />} />
                <Route path="documentos" element={<DocumentosPaciente />} />
                <Route path="privacidade" element={<PrivacidadePaciente />} />
                <Route path="notificacoes" element={<NotificacoesPaciente />} />
                <Route path="*" element={<NotFoundPaciente />} />
            </Route>

            {/*Rotas do especialista */}
            <Route path="/dashboard/especialista/">
                <Route path="" element={<DashboardEspecialista />} />
                <Route path="perfil" element={<PerfilEspecialista />} />
                <Route path="solicitacoes" element={<SolicitacoesEspecialista />} />
                <Route path="agenda" element={<AgendaEspecialista />} />
                <Route path="pacientes" element={<PacientesEspecialista />} />
                <Route path="historico" element={<HistoricoEspecialista />} />
                <Route path="prescricoes" element={<PrescricoesEspecialista />} />
                <Route path="notificacoes" element={<NotificacoesEspecialista />} />
                <Route path="*" element={<NotFoundEspecialista />} />
            </Route>

            {/*Rotas do hospital */}
            <Route path="/dashboard/hospital/">
                <Route path="" element={<DashboardHospital />} />
                <Route path="pacientes" element={<PacientesHospital />} />
                <Route path="historico" element={<HistoricoHospital />} />
                <Route path="agenda" element={<AgendaHospital />} />
                <Route path="solicitacoes" element={<SolicitacoesHospital />} />
                <Route path="prescricoes" element={<PrescricoesHospital />} />
                <Route path="profissionais" element={<ProfissionaisHospital />} />
                <Route path="relatorios" element={<RelatoriosHospital />} />
                <Route path="configuracoes" element={<ConfiguracoesHospital />} />
                <Route path="notificacoes" element={<NotificacoesHospital />} />
                <Route path="*" element={<NotFoundHospital />} />
            </Route>

            {/*Rotas da farmácia */}
            <Route path="/dashboard/farmacia/">
                <Route path="" element={<DashboardFarmacia />} />
                <Route path="profissionais" element={<ProfissionaisFarmacia />} />
                <Route path="pacientes" element={<PacientesFarmacia />} />
                <Route path="historico" element={<HistoricoFarmacia />} />
                <Route path="agenda" element={<AgendaFarmacia />} />
                <Route path="solicitacoes" element={<SolicitacoesFarmacia />} />
                <Route path="prescricoes" element={<PrescricoesFarmacia />} />
                <Route path="produtos" element={<ProdutosFarmacia />} />
                <Route path="estoque" element={<EstoqueFarmacia />} />
                <Route path="vendas" element={<VendasFarmacia />} />
                <Route path="pedidos-online" element={<PedidosFarmacia />} />
                <Route path="relatorios-loja" element={<RelatoriosFarmacia />} />
                <Route path="configuracoes" element={<ConfiguracoesFarmacia />} />
                <Route path="notificacoes" element={<NotificacoesFarmacia />} />
                <Route path="*" element={<NotFoundFarmacia />} />
            </Route>

            {/*Rotas da verificação */}
            <Route path="/dashboard/verificacao/">
                <Route path="" element={<DashboardVerificacao />} />
                <Route path="hospitais" element={<HospitaisVerificacao />} />
                <Route path="*" element={<NotFoundVerificacao />} />
            </Route>
        </Routes>
    )
}