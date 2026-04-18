let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

// 🔥 LEVEL UP
function levelUp() {
    userSeq = [];
    level++;
    h2.textContent = "Level " + level;

    let randomNum = Math.floor(Math.random() * btns.length);
    let randomColor = btns[randomNum];

    let randbtn = document.querySelector("." + randomColor);

    gameSeq.push(randomColor);

    btnflash(randbtn);
}

// 🔥 CHECK SEQUENCE
function checkSeq() {
    let i = userSeq.length - 1;

    if (userSeq[i] !== gameSeq[i]) {
        gameOver();
        return;
    }

    if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 1000);
    }
}

// 🔥 BUTTON PRESS
function btnpress() {
    let btn = this;
    btnflash(btn);

    // ❗ class se color lo (ID nahi hai)
    let userColor = btn.classList[1];

    userSeq.push(userColor);

    checkSeq();
}

// 🔥 GAME OVER + RESET
function gameOver() {
    h2.textContent = "Game Over! Your Score was " + level + " | Press any key to restart";

    // red flash effect
    document.body.classList.add("game-over");
    setTimeout(() => {
        document.body.classList.remove("game-over");
    }, 200);

    resetGame();
}

// 🔥 RESET GAME
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// 🔥 EVENT LISTENERS
let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}