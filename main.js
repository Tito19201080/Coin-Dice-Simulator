// ========================= COIN FLIP SIMULATOR =========================

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

// ========================= DICE SIMULATOR =========================

// HTML Variables
let diceOutEl = document.getElementById("dice-output");
let diceSide1El = document.getElementById("side-1");
let diceSide2El = document.getElementById("side-2");
let diceSide3El = document.getElementById("side-3");
let diceSide4El = document.getElementById("side-4");
let diceSide5El = document.getElementById("side-5");
let diceSide6El = document.getElementById("side-6");

// Count Variables
let side1 = 0;
let side2 = 0;
let side3 = 0;
let side4 = 0;
let side5 = 0;
let side6 = 0;

// Button Event Listener
document.getElementById("dice-btn").addEventListener("click", diceFunc);

function diceFunc() {
  // Generate Random Number
  let diceNum = Math.random() * 6;
  let diceNumFix = diceNum.toFixed(0);
  console.log(diceNumFix);

  // Simulate Dice Roll
  if (diceNumFix == 1 || diceNumFix == 0) {
    diceOutEl.innerHTML = "<img src='img/1.png' />";
    side1 += 1;
    diceSide1El.innerHTML = side1;
  } else if (diceNumFix == 2) {
    diceOutEl.innerHTML = "<img src='img/2.png' />";
    side2 += 1;
    diceSide2El.innerHTML = side2;
  } else if (diceNumFix == 3) {
    diceOutEl.innerHTML = "<img src='img/3.png' /> ";
    side3 += 1;
    diceSide3El.innerHTML = side3;
  } else if (diceNumFix == 4) {
    diceOutEl.innerHTML = "<img src='img/4.png' />";
    side4 += 1;
    diceSide4El.innerHTML = side4;
  } else if (diceNumFix == 5) {
    diceOutEl.innerHTML = "<img src='img/5.png' />";
    side5 += 1;
    diceSide5El.innerHTML = side5;
  } else if (diceNumFix == 6) {
    diceOutEl.innerHTML = "<img src='img/6.png' />";
    side6 += 1;
    diceSide6El.innerHTML = side6;
  }
}
