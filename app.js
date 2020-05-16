/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, activePlayer, roundScore;

score=[0,0];
roundScore=0;
activePlayer=0;



// document.querySelector('#current-'+ activePlayer).textContent = dice;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-0').textContent=0;


document.querySelector('.btn-roll').addEventListener('click',function(){
    // random numb
    var dice = Math.floor(Math.random()*6)+1;

    // display the result
    var diceDOM =document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //update the round
    if(dice !==1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;

    }
    else{
        //next player
        activePlayer ===0? activePlayer =1: activePlayer =0;
        roundScore =0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';
    }
})