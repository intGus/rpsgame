function computerPlay(){
    var arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random()*arr.length)];
}

function playerPlay(selection){
    var arr = ["rock", "paper", "scissors"];
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);
    gameResults = evalMatch(playerSelection, computerSelection);
    //if player wins
    if (gameResults == 1){
        scorePlayer += 1;
        console.log(`${playerSelection} wins against ${computerSelection}`)
    //if player loses    
    } else if (gameResults == 2){
        scoreComputer += 1;
        console.log(`${playerSelection} loses against ${computerSelection}`)
    }
    console.log(scorePlayer, scoreComputer);
}

function evalMatch(player1, player2){
    if (player1 == player2){
        console.log('tie');
        return 0
    }
    if ((player1 ==='rock' && player2 ==='scissors') ||
        (player1 ==='scissors'&& player2==='paper') ||
        (player1 ==='paper' && player2 ==='rock')){
            return 1;
    } else {
            return 2;
    }
}

function game(){
    //reset scores
    scorePlayer = 0;
    scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = (prompt("Write rock, paper or scissors")).toLowerCase();
        playRound(playerSelection);
    }
    if (scorePlayer > scoreComputer){
        console.log('Player wins');
    } else if (scorePlayer < scoreComputer){
        console.log('Computer wins');
    } else {
        console.log('tie')
    }
}

let scorePlayer = 0
let scoreComputer = 0