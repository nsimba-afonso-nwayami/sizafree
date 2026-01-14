import FarmaciaLayout from "./components/FarmaciaLayout";
import { Link } from "react-router-dom";

export default function NotFoundFarmacia() {
  return (
    <>
      <title>Página não encontrada | Dashboard Farmácia</title>
      <FarmaciaLayout title="Página não encontrada">
      </FarmaciaLayout>
    </>
  );
}