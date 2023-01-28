
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const score = document.querySelector('.score-number')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    } , 500);
}

const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    let scoreNumber = +score.textContent;
    scoreNumber += 1;
    score.innerHTML = scoreNumber;
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

const newGame = () => {
    location.reload();
}

document.addEventListener('keydown', jump);

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        newGame();
    }
});