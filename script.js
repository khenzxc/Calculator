let currentInput = '';
const display = document.getElementById('display');

// Lyrics at intervals (in seconds)
const lyricsList = [
  "Bakit ka nag iba?",
  "Meron na bang iba?",
  "Sana sinabi mo",
  "Para di na umasang",
  "May tayo pa sa huli",
  "Sana sinabi mo",
  "Hahayaan naman kitang",
  "Sumaya't umalis",
];
const lyricsIntervals = [8, 6.5, 3, 2, 2.7, 2.5, 2.5, 10]; // seconds per line

let lyricsIndex = 0;
let lyricsTimeout = null;

function input(val) {
  if (display.innerText === '0' || lyricsList.includes(display.innerText)) {
    currentInput = '';
    display.innerText = '';
  }
  currentInput += val;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
  clearLyricsTimeout();
}

function showLyrics() {
  lyricsIndex = 0;
  display.innerText = lyricsList[lyricsIndex];
  clearLyricsTimeout();
  nextLyrics();
}

function nextLyrics() {
  lyricsTimeout = setTimeout(() => {
    lyricsIndex = (lyricsIndex + 1) % lyricsList.length;
    display.innerText = lyricsList[lyricsIndex];
    nextLyrics();
  }, lyricsIntervals[lyricsIndex] * 1000);
}

function clearLyricsTimeout() {
  if (lyricsTimeout) {
    clearTimeout(lyricsTimeout);
    lyricsTimeout = null;
  }
}

function remove() {
  if (lyricsList.includes(display.innerText) || display.innerText === '0') {
    return;
  }
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput.length ? currentInput : '0';
}

// Equal function (lyrics lang ang lalabas)
function equal() {
  showLyrics(); // Ipakita ang lyrics sa display at magpalit-palit
}

// Add event listener for the equal button
document.getElementById('equal-btn').addEventListener('click', equal);