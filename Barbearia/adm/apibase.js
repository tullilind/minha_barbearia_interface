import axios from 'axios';

// 1. Configuração da API
const api = axios.create({
    baseURL: 'https://apisbarbearia.appguardiaomais.com.br', 
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    }
});

// 2. Interceptador para o ADMIN
// Ele pega o 'adm_token' para não misturar com o token de cliente
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adm_token');
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
