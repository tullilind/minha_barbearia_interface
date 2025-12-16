listarUnidades: async () => {
    try {
        // 1. PEGA O CRACHÁ (TOKEN) DO BOLSO
        const token = localStorage.getItem('token');

        // 2. MOSTRA O CRACHÁ PARA O SEGURANÇA NA HORA DE ENTRAR
        const response = await api.get('/api/unidades?ativo=true', {
            headers: { 
                'Authorization': `Bearer ${token}` 
            }
        });
        
        return response.data;
    } catch (error) {
        console.error("Erro ao listar:", error);
        return { sucesso: false, erro: "Erro de conexão ou Permissão negada" };
    }
},