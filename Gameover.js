// Gameover.js
let score = localStorage.getItem("gameScore");
let scoreBox = document.getElementById("score-board").innerText=score;
document.getElementById("replay-btn").onclick=()=>{
    location.href="./Game.html"
}

//changing the text if score is above
let scoreboardHeading = document.getElementById("scoreboard-heading")
let scoreboardQuote = document.getElementById("quote")
let replayBtn = document.getElementById("replay-btn")
let noNeedText = document.getElementById("not-needed")
if(score > 5){
    scoreboardHeading.innerText="Winner!!"
    scoreboardQuote.innerText="The battle is over. You have won!"
    replayBtn.innerText="Next battle"
    noNeedText.innerText= null;
}

//display user name on this page
let userName = localStorage.getItem("userName");
let playerName = localStorage.getItem("playerName");
document.getElementById("heading").innerText = `${playerName}, the Warrior!`;
document.getElementById("score-board").innerText = score;
