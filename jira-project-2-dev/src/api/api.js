import axios from "axios";

const host = import.meta.env.VITE_API_HOST;
const port = import.meta.env.VITE_API_PORT;

const api = axios.create({
    baseURL: `${host}:${port}`,
    timeout: 5000,
})
