import type { Veiculo } from "../src/types/veiculo.ts";

interface Props {
  veiculo: Veiculo;
}

export function VeiculoCard({ veiculo }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "10px",
      }}
    >
      <img
        src={veiculo.fotos[0]}
        alt={veiculo.modelo}
        style={{
          width: "100%",
          maxWidth: "350px",
          height: "220px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />

      <h2>{veiculo.modelo}</h2>

      <p>{veiculo.descricao}</p>

      <p>
        Ano: {veiculo.ano} / {veiculo.ano_modelo}
      </p>

      <p>Fabricante ID: {veiculo.Fabricantes_id}</p>

      <strong>
        {veiculo.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
    </div>
  );
}