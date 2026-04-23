
import type { Fabricante } from "../types/fabricante";


//colocar a url da api, e deixar ela publica

const API_URL = "https://ubiquitous-carnival-v65pxx9qrq6rfxv5-3000.app.github.dev/fabricantes";

export async function getFabricante(): Promise<Fabricante[]> {
  const response = await fetch(API_URL);
  return response.json();
}