let counterValue = 0;
const decrementButton = document.querySelector("[data-action = 'decrement']");
const incrementButton = document.querySelector("[data-action = 'increment']");

const valueElement = document.getElementById("value");

function counterValueCount() {
  valueElement.textContent = counterValue;
}
function increment() {
  counterValue++;
  counterValueCount();
}
function decrement() {
  counterValue--;
  counterValueCount();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
