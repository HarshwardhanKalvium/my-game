// Home.js
let button = document.getElementById("button");

button.onclick = () => {
  let userName = document.getElementById("user-name").value;
  let playerName = document.getElementById("player-name").value;
  if (playerName.trim() === "" || userName.trim() === ""){
      alert("Please enter your warrior name to proceed further.");
  } else {
    localStorage.setItem("userName", userName);
    localStorage.setItem("playerName", playerName);
    location.href = "./Game.html";
  }
};