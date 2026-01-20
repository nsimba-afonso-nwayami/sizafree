import VerificacaoLayout from "./components/VerificacaoLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function DocumentosVerificacao() {
  return (
    <>
      <title>Documentos | Dashboard Verificação</title>

      <VerificacaoLayout title="Verificação de Documentos"></VerificacaoLayout>
    </>
  );
}
