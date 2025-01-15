'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0').textContent = 0;
const score1El = document.querySelector('#score--1').textContent = 0;
const diceEl = document.querySelector('.dice');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--old');
const btnRoll = document.querySelector('.btn--roll');
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
let playing;
const scores;
let currentScore;
let activePlayer;
const init = function(){
    playing = false;
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent=0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

// 5 
btnRoll.addEventListener('click',function(){
    if(playing){
    // 1. generate a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    // 3. Check for 1
    if(dice !== 1){
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        // switch to the next player
        switchPlayer();
    }
}
})


btnHold.addEventListener('click',function(){
    if(playing){
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score >= 100
    if(scores[activePlayer] >= 100){
        // finish the game
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');

        
    }
    else{
    // Switch to the next player
    switchPlayer();
    }
}
})

btnNew.addEventListener('click', init())