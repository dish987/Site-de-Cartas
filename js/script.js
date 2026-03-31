const containers = {
    sombra: document.querySelector('.containerSombras'),
    fogo: document.querySelector('.containerFogo'),
    agua: document.querySelector('.containerAgua'),
    terra: document.querySelector('.containerTerra'),
    luz: document.querySelector('.containerLuz'),
    ar: document.querySelector('.containerAr')
};

function mostrarCategoria(escolha) {
    for (let chave in containers) {
        const elemento = containers[chave];
        
        if (elemento) {
            if (chave === escolha) {
                elemento.style.display = elemento.style.display === 'none' ? 'flex' : 'none';
            } else {
                elemento.style.display = 'none';
            }
        }
    }
}

const botoes = document.querySelectorAll('.btn-elemento');

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        const classes = Array.from(this.classList);
        const elemento = classes.find(c => c !== 'btn-elemento' && c !== 'active');

            if (elemento) {
                const classeAnimacao = `click-${elemento}`;

                this.classList.add(classeAnimacao);

                setTimeout(() => {
                    this.classList.remove(classeAnimacao);
                }, 600); 
            }
        });
    });