// Pegando o Mario.
const mario = document.querySelector('.obj_mario');

// Pegando o Pipe.
const pipe = document.querySelector('.obj_pipe');

// Adicionando a class act_jump no Mario.
const jump = () =>{
    mario.classList.add('act_jump');

    // Removendo a class act_jump do Mario, após 500ms
    setTimeout(() => {
        mario.classList.remove('act_jump');
    }, 500);
}

// Verificando colisão do Mario com o Pipe.
const loop = setInterval(()=>{

    // Pegando o valor do deslocamento esquerdo do Pipe.
    const pipePosition = pipe.offsetLeft;

    // Pegando o valor do pulo do Mario.
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Verificando colisão do Mario com Pipe.
    if(pipePosition <= 120 && pipePosition > 0 && marioPostion < 80){
        // Parando animação do Pipe.
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Parando animação do Mario (Pulo)
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPostion}px`;

        // Animação game-over Mario.
        mario.src = './Assets/game-over.png'
        mario.style.width = "70px"
        mario.style.marginLeft = '52px'

        // Encerrando o loop.
        clearInterval(loop);
    }
    
}, 10);

// Executando a animação ao apertar qualquer botão do teclado.
document.addEventListener('keydown', jump)