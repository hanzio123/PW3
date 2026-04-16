import { useEffect, useState } from "react";
import { getVeiculos } from "../services/veiculoService";
import type { Veiculo } from "../types/veiculo";
import { VeiculoCard } from "../components/VeiculoCard";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [valorMinimo, setValorMinimo] = useState<number>(0);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
  }, []);

  const veiculosFiltrados = veiculos.filter(v => v.valor >= valorMinimo);

  return (
    <div>
      <h1>Lista de Veículos</h1>

      {}
      <div style={{ marginBottom: 20 }}>
        <label>Filtrar por valor mínimo (R$): </label>
        <input
          type="number"
          value={valorMinimo}
          onChange={(e) => setValorMinimo(Number(e.target.value))}
          style={{ marginLeft: 8, padding: 5 }}
        />
        <button onClick={() => setValorMinimo(0)} style={{ marginLeft: 8 }}>
          Limpar
        </button>
      </div>

      {veiculosFiltrados.map(veiculo => (
        <VeiculoCard key={veiculo.id} veiculo={veiculo} />
      ))}
    </div>
  );
}