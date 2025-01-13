'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0').textContent = 0;
const score1El = document.querySelector('#score--1').textContent = 0;
const diceEl = document.querySelector('.dice');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnOld = document.querySelector('.btn--old');
const btnRoll = document.querySelector('.btn--roll');

diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

// 5 
btnRoll.addEventListener('click',function(){
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
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        

        
    }
})