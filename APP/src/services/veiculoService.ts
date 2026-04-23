//import type { Veiculo } from "../types/veiculo";
//
//const API_URL = "https://shiny-rotary-phone-7vx7gg6p57vjfpv5v-3000.app.github.dev/veiculos";
//
//export async function getVeiculos(): Promise<Veiculo[]> {
//  const response = await fetch(API_URL);
//  return response.json();
//}


import {api} from "./api";
import type { Veiculo } from "../types/veiculo";

export async function  getVeiculos(): Promise<Veiculo[]>{
  const response = await api.get("/veiculos");
  return response.data
}