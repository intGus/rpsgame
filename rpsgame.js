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
    score = evalMatch(playerSelection, computerSelection);
    if (score == 1){
        scorePlayer += 1;
    } else if (score == 2){
        scoreComputer += 1;
    }
    console.log(scorePlayer, scoreComputer);
}

function evalMatch(option1, option2){
    if (option1 == option2){
        console.log('tie');
        return 0
    }
    if (option1=="rock"){
        if (option2=="scissors"){
            console.log('rock wins');
            return 1
        } else if (option2=="paper"){
            console.log('paper wins');
            return 2
        }
    }
    if (option1=="scissors"){
        if (option2=="paper"){
            console.log('scissors wins');
            return 1
        } else if (option2=='rock'){
            console.log('rock wins');
            return 2
        }
    }
    if (option1=="paper"){
        if (option2=="rock"){
            console.log('paper wins');
            return 1
        } else if (option2=="scissors"){
            console.log('scissors wins');
            return 2
        }
    }
}
let scorePlayer = 0
let scoreComputer = 0

function game(){
    scorePlayer = 0;
    scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Write rock, paper or scissors");
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
