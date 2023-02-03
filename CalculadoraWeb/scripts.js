const buttons = document.querySelectorAll("#buttons button");
const display = document.querySelector("#display");
const history = document.querySelector("#history");
const clearHistoryButton = document.querySelector("#clear-history");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (this.id === "clear") {
      display.value = "";
    } else if (this.id === "delete") {
      display.value = display.value.slice(0, -1);
    } else if (this.id === "equals") {
      history.value += display.value + " = " + eval(display.value) + "\n";
      display.value = eval(display.value);
    } else {
      display.value += this.innerHTML;
    }
  });
});

clearHistoryButton.addEventListener("click", function() {
  history.value = "";
});


function storeHistory(value) {
  let history = localStorage.getItem('history') || '';
  history += value + '\n';
  localStorage.setItem('history', history);
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  historyDisplay.value = localStorage.getItem('history') || '';
}

function clearHistory() {
  localStorage.removeItem('history');
  updateHistoryDisplay();
}

updateHistoryDisplay();

