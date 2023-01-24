function rockPaperScissors (playermove){
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

console.log(`You choose ${playermove}`);//here is my choise

if(playermove === "r" || playermove === "rock"){
    playermove = rock;
}else if(playermove === "p" || playermove === "paper"){
    playermove = paper;
}else if (playermove === "s" || playermove === "scissors"){
    playermove = scissors;
}
else{
    console.log(`Invalid input. Try again...`);
}

let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

switch(computerRandomNumber){ //switch to if-else!!!
    case 1:
        computerRandomNumber = rock
        break;
    case 2:
        computerRandomNumber = paper
        break;
    case 3:
        computerRandomNumber = scissors
        break;       
}
console.log(`The computer chooses ${computerRandomNumber}`)

if ((playermove === rock && computerRandomNumber === scissors)
||(playermove === paper && computerRandomNumber === rock) 
|| (playermove === scissors && computerRandomNumber === paper)){
    console.log(`You win!`);
}else if((playermove === scissors && computerRandomNumber === rock)
||(playermove === rock && computerRandomNumber === paper)
||(playermove === paper && computerRandomNumber === scissors)){
    console.log(`You lose!`);
}
else{
    console.log(`This game was a draw!`);
}

    

}
rockPaperScissors("paper")