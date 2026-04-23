import { useEffect, useState } from "react";
import { getFabricante } from "../services/fabricanteService";
import type { Fabricante } from "../types/fabricante";

export function FabricanteList() {
  const [fabricantes, setFabricantes] = useState<Fabricante[]>([]);

  useEffect(() => {
    getFabricante().then(setFabricantes);
  }, []);

  return (
    <div>
      <h1>Lista de Fabricantes</h1>

      {fabricantes.map((fabricante) => (
        <div key={fabricante.id}>
          <h2>{fabricante.nome}</h2>
          <p>{fabricante.logo}</p>
        </div>
      ))}
    </div>
  );
}

