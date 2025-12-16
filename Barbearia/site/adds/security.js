export const initSecurity = () => {
    // 1. Desabilita o Clique Direito (Menu de Contexto)
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        return false;
    });

    // 2. Desabilita Teclas de Atalho de Desenvolvedor (F12, Ctrl+Shift+I, etc)
    document.addEventListener('keydown', (event) => {
        // Bloqueia F12
        if (event.key === 'F12' || event.keyCode === 123) {
            event.preventDefault();
            return false;
        }

        // Bloqueia combinações Ctrl+Shift+I, J, C (Inspect, Console, Elements)
        if (event.ctrlKey && event.shiftKey && 
           (event.key === 'I' || event.key === 'J' || event.key === 'C' || 
            event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67)) {
            event.preventDefault();
            return false;
        }

        // Bloqueia Ctrl+U (Ver Código Fonte)
        if (event.ctrlKey && (event.key === 'U' || event.keyCode === 85)) {
            event.preventDefault();
            return false;
        }
    });

    // 3. Tenta limpar o console se alguém conseguir abrir
    setInterval(() => {
        console.clear();
    }, 1000);
    
    // 4. Armadilha simples de Debugger (congela se o console estiver aberto em alguns casos)
    // Cuidado: Isso pode atrapalhar o desenvolvimento, use apenas em produção.
    /*
    setInterval(() => {
        debugger;
    }, 100);
    */
};