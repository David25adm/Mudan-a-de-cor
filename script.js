document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const titulo = document.getElementById('titulo');

    let corAtual = 'blue';
    botao.addEventListener('click', () => {

        if (corAtual === 'blue') {
            titulo.style.color = 'red';
            
        corAtual = 'red';} else {
            titulo.style.color = 'blue';
            corAtual = 'blue';
        }
    });
});