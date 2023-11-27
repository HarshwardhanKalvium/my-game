//printing the jumble word and hint
let jumbleWord = document.getElementById("word");
let hintOfWord = document.getElementById("hint-text");
let words = [
    {
        word: "Saitama",
        hint: "Strongest in the world"
    },
    {
        word: "Ayanokoji",
        hint: "masterpiece of white room"
    },
    {
        word: "Zoro",
        hint: "want's to be the greatest swordsman"
    },
    {
        word: "Sung Jinwoo",
        hint: "The shadow monarch"
    },
    {
        word: "Na hwa jin",
        hint: "Best Badass teacher ever"
    },
    {
        word: "Homelander",
        hint: "Superman's evil parody"
    },
    {
        word: "Soldier boy",
        hint: "The only guy who was right in season 3"
    },
    {
        word: "Batman",
        hint: "Bilioner oraphan wwith parental issues"
    },
    {
        word: "Joker",
        hint: "Why so serious?"
    },
    {
        word: "Gojo saturo",
        hint: "daijoubu datte kimi yowai mo"
    },
    {
        word: "Darth Vader",
        hint: "Dark Lord of the Sith"
    },
    {
        word: "wolverine",
        hint: "Wepon X"
    },
    {
        word: "Willy Wonka",
        hint: "Owner of the wonka factory"
    },
    {
        word: "Thor",
        hint: "If I'm wrong, then.. What more could I lose?"
    },
    {
        word: "Iron Man",
        hint: "I love you 3000"
    },
    {
        word: "Captain America",
        hint: "I Can Do This All Day"
    },
    {
        word: "garou",
        hint: "Good? Evil? I Reject Them Both"
    },
    {
        word: "Hanuman",
        hint: "Ram doot mai maat janki"
    },
    {
        word: "Thanos",
        hint: "Reality Is Often Disappointing"
    },
    {
        word: "Vendetta",
        hint: "Give man a mask and he will tell the truth"
    },
    {
        word: "Madara Uchiha",
        hint: "Ghost of Uchiha"
    },
    {
        word: "Jon snow",
        hint: "The Prince that was Promised, Lord Commander"
    },
    {
        word: "nagato",
        hint: "This World Shall Know Pain"
    },
]

let randomWordObject;
function create(){
    randomWordObject = words[Math.floor(Math.random() * words.length)];
    let shuffledWord = randomWordObject.word.split("").sort(() => Math.random() - 0.5).join("");
    jumbleWord.innerText = shuffledWord;
    hintOfWord.innerText = randomWordObject.hint;
}

create();


//Check if the guess is right
let checkTheGuess = document.getElementById("check-btn");
let playerGuess = document.getElementById("input");
let count = 0
checkTheGuess.onclick=()=>{
    if(playerGuess.value.toLowerCase() === randomWordObject.word.toLowerCase()){
        count++;
        // console.log(count)
        correctPopup();
    }
    else{
        incorrectPopup();
    }
    create();
    startTimer()
    playerGuess.value = null;
}

//Refresh button functionality
let refreshBtn = document.getElementById("refresh-btn")
refreshBtn.onclick = ()=>{
  create();
  playerGuess.value = null;
}


// Time left functionality
let timer = document.getElementById("countdown")
let time = 30;
let score = 0;
let timerId;

function startTimer(){
    time = 30;
    time.innerText=time;
    timerId=setInterval(()=>{
        time--;
        if(time == 0){
            location.href="./Gameover.html";
        }
    timer.innerText = time;
    localStorage.setItem("gameScore",count);
    },1000)
}

startTimer();


function resetTime(timerId){
    clearInterval(timerId)
    startTimer();
}

// popup

function correctPopup() {
    document.getElementById('correct-message').style.display = 'block';
}
function incorrectPopup() {
    document.getElementById('incorrect-message').style.display = 'block';
}

// Function to close the popup
let nextButton = document.getElementsByClassName("next-btn");

for (let i = 0; i < nextButton.length; i++) {
    nextButton[i].onclick = () => {
        document.getElementById('correct-message').style.display = 'none';
        document.getElementById('incorrect-message').style.display = 'none';
    };
}


//background sound

let currentAudio = null;

function playAudio(audioSrc) {
    // Pause the currently playing audio
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create a new audio element and play it
    currentAudio = new Audio(audioSrc);
    currentAudio.play();
    currentAudio.loop = true;
}

let firstMusic = document.getElementById("music-1");
firstMusic.onclick = () => {
    playAudio("./songs/1.mp3");
};

let secondMusic = document.getElementById("music-2");
secondMusic.onclick = () => {
    playAudio("./songs/2.mp3");
};
let thirddMusic = document.getElementById("music-3");
thirddMusic.onclick = () => {
    playAudio("./songs/3.mp3");
};
let fourthMusic = document.getElementById("music-4");
fourthMusic.onclick = () => {
    playAudio("./songs/4.mp3");
};
let fifthMusic = document.getElementById("music-5");
fifthMusic.onclick = () => {
    playAudio("./songs/5.mp3");
};
let sixthMusic = document.getElementById("music-6");
sixthMusic.onclick = () => {
    playAudio("./songs/6.mp3");
};
let seventhMusic = document.getElementById("music-7");
seventhMusic.onclick = () => {
    playAudio("./songs/7.mp3");
};
let eighthMusic = document.getElementById("music-8");
eighthMusic.onclick = () => {
    playAudio("./songs/8.mp3");
};
let ninethMusic = document.getElementById("music-9");
ninethMusic.onclick = () => {
    playAudio("./songs/9.mp3");
};
let tenthMusic = document.getElementById("music-10");
tenthMusic.onclick = () => {
    playAudio("./songs/10.mp3");
};


//audio stop functionality
let audioIcon = document.getElementById("audio-icon");

audioIcon.onclick = () => {
    if (currentAudio.paused) {
        // If paused, play the audio
        currentAudio.play();
        audioIcon.src = "./covers/audio icon.png";
    } else {
        // If playing, pause the audio
        currentAudio.pause();
        audioIcon.src = "./covers/audio cut icon.jpg";
    }
};
