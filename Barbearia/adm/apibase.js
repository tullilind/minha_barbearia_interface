import axios from 'axios';

// 1. CONFIGURAÇÃO DA API
const api = axios.create({
    baseURL: 'https://apisbarbearia.appguardiaomais.com.br', 
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    }
});

// 2. INTERCEPTADOR DE SEGURANÇA (ADMIN)
// Coloca o token automaticamente em todas as chamadas
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