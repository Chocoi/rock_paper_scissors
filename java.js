let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector (".score-board");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById ("r");
const paperDiv = document.getElementById ("p");
const scissorsDiv = document.getElementById ("s");

function getcomputerPlay(){
    const choices = [ 'r', 'p', 's'];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function convertToWord(letter){
    if (letter === "r"){
    return "Rock";
    }else if (letter === "p"){
        return "Paper";
    }else if (letter === "s"){
        return "Scissors";
    }
}

function win(userPlay, computerPlay){
 userScore++;
 userScoreSpan.innerHTML = userScore;
 computerScoreSpan.innerHTML = computerScore;
 resultP.innerHTML = `${convertToWord (userPlay)}  beats  ${convertToWord(computerPlay)}  You win!! :D`;
}

function lose(userPlay, computerPlay){
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord (userPlay)}  loses to  ${convertToWord(computerPlay)} , Boo you lost!!`;
}

function draw(userPlay,computerPlay){
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord (userPlay)} against ${convertToWord(computerPlay)} , it's a draw!`;
}

function game(userPlay){
const computerPlay = getcomputerPlay();
switch(userPlay + computerPlay){
    case "rs":
    case "pr":
    case "sp":
    win(userPlay, computerPlay);

    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userPlay, computerPlay);
    break;
        case "rr":
        case "pp":
        case "ss":
        draw(userPlay, computerPlay);
        break;
}
}

function main(){
    rockDiv.addEventListener ('click', function(){
        game("r");
    })

    paperDiv.addEventListener ('click', function(){
        game("p");
    })

    scissorsDiv.addEventListener ('click', function(){
        game("s")
    })
}

main();

console.log(hello);



