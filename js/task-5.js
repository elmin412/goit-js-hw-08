const bodyElement = document.body;
const button = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {

  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  outputColor.textContent = randomColor;
  
});

