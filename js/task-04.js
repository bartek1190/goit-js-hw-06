const counter = document.getElementById("counter");
const value = document.getElementById("value");

let counterValue = 0;

const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue -= 1;
    value.textContent = counterValue;
  }
});
