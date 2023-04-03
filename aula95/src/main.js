import GerarCPF from './modules/GerarCPF'

import './assets/css/style.css';

(function(){
    const gerarCPF = new GerarCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gerarCPF.gerarNovoCPF();
})();
