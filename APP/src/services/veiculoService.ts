
import type { Veiculo } from "../types/veiculo";


//colocar a url da api, e deixar ela publica

const API_URL = "https://ubiquitous-carnival-v65pxx9qrq6rfxv5-3000.app.github.dev/veiculos";

export async function getVeiculos(): Promise<Veiculo[]> {
  const response = await fetch(API_URL);
  return response.json();
}