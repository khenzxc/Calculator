let currentInput = '';
const display = document.getElementById('display');

function input(val) {
  if (display.innerText === '0') {
    currentInput = '';
    display.innerText = '';
  }
  currentInput += val;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function remove() {
  if (display.innerText === '0') {
    return;
  }
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput.length ? currentInput : '0';
}

// Calculate and show result
function equal() {
  try {
    // Evaluate the expression safely
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch (e) {
    display.innerText = 'Error';
    currentInput = '';
  }
}

// Add event listener for the equal button
document.getElementById('equal-btn').addEventListener('click', equal);