import type {Veiculo} from '../types/veiculo';

interface Props {
  veiculo: Veiculo;
}

export function VeiculoCard({ veiculo }: Props) {   
    return (
        <div style={{border:"1px solid #ccc", margin: 10, padding:10}}>
            <h2>{veiculo.modelo}</h2>
            <p>{veiculo.descricao}</p>
            
            <p>📸 Quantidade de fotos: {veiculo.fotos.length}</p>
            <p>
                Ano: {veiculo.ano} / {veiculo.ano_modelo}
            </p>

            <strong>{veiculo.valor.toLocaleString('pt-BR', {
                style: 'currency', 
                currency: 'BRL' 
                })} 
                </strong>
        </div>
    );
}