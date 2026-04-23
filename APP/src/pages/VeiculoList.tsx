import { useEffect, useState } from "react";
import { getVeiculos } from "../services/veiculoService";
import type { Veiculo } from "../types/veiculo";

import { VeiculoCard } from "../../components/VeiculoCard";
import { ListaVazia } from "../../components/ListaVazia";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVeiculos()
      .then((dados) => {
        console.log(dados);
        setVeiculos(dados || []);
      })
      .catch((erro) => {
        console.log("Erro:", erro);
        setVeiculos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Carregando...</h2>;

  if (!veiculos || veiculos.length === 0) {
    return <ListaVazia />;
  }

  return (
    <div>
      <h1>Lista de Veículos</h1>

      {veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v} />
      ))}
    </div>
  );
}