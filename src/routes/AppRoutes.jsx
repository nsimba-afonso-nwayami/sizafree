import { Routes, Route } from "react-router-dom";
import Home from "../pages/site/Home";
import Servicos from "../pages/site/Servicos";
import Sobre from "../pages/site/Sobre";
import Especialistas from "../pages/site/Especialistas";
import Agendar from "../pages/site/Agendar";
import NotFound from "../pages/site/NotFound";

export default function AppRoutes () {
    return (
        <Routes>
            {/*Rotas do site */}
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/especialistas" element={<Especialistas />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}