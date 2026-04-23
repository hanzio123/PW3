import axios from "axios";

    export const api = axios.create({
        baseURL: "https://localhost:3000",
    });

//interceptor de resposta
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro na API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);