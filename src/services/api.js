import axios from "axios";

const URL_SERVER = "http://pedidoapp.com.br:3001";

const api = axios.create({
    baseURL: URL_SERVER
});

export default api;

