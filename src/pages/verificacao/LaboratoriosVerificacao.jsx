import VerificacaoLayout from "./components/VerificacaoLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function LaboratoriosVerificacao() {
  return (
    <>
      <title>Laboratórios | Dashboard Verificação</title>

      <VerificacaoLayout title="Verificação de Laboratórios"></VerificacaoLayout>
    </>
  );
}
