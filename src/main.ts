// CMPM 121 – Refactored Counter App

// ------------------------------
// CONSTANTS
// ------------------------------
const INCREMENT_ID = "increment";
const DECREMENT_ID = "decrement";
const RESET_ID = "reset";
const COUNTER_ID = "counter";
const TITLE_TEXT = "CMPM 121 Project";

// ------------------------------
// APPLICATION STATE
// ------------------------------
let counter = 0;

// ------------------------------
// UI SETUP
// ------------------------------
function setupUI() {
  document.body.innerHTML = `
    <h1>${TITLE_TEXT}</h1>
    <p>Counter: <span id="${COUNTER_ID}">0</span></p>
    <button id="${INCREMENT_ID}">Increment</button>
    <button id="${DECREMENT_ID}">Decrement</button>
    <button id="${RESET_ID}">Reset</button>
  `;
}

// ------------------------------
// UPDATE THE DISPLAY
// ------------------------------
function updateUI() {
  const counterDisplay = document.getElementById(COUNTER_ID);
  if (!counterDisplay) return;

  counterDisplay.textContent = String(counter);
  document.title = `Clicked ${counter}`;
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

// ------------------------------
// EVENT SETUP
// ------------------------------
function setupEvents() {
  const incButton = document.getElementById(INCREMENT_ID);
  const decButton = document.getElementById(DECREMENT_ID);
  const resetButton = document.getElementById(RESET_ID);

  if (!incButton || !decButton || !resetButton) return;

  incButton.addEventListener("click", () => {
    counter++;
    updateUI();
  });

  decButton.addEventListener("click", () => {
    counter--;
    updateUI();
  });

  resetButton.addEventListener("click", () => {
    counter = 0;
    updateUI();
  });
}

// ------------------------------
// APP STARTER
// ------------------------------
function start() {
  setupUI();
  setupEvents();
  updateUI();
}

start();
