import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000"});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token"); // o Axios verifica se há um token salvo no navegador
    if (token) req.headers.Authorization = token; // Se existir um token, ele adiciona no cabeçalho da requisição
        return req;
});

export default API;
