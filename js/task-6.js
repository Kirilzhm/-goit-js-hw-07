function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector(`#boxes`);

function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.classList.add(`box`);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }
  boxesContainer.innerHTML = ``;
  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = ``;
}
const buttonCreate = document.querySelector(`button[data-create]`);
buttonCreate.addEventListener(`click`, () => {
  const input = document.querySelector(`input`);
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount)
  }
  input.value = ``;
});

const buttonDestroy = document.querySelector(`button[data-destroy]`);
buttonDestroy.addEventListener(`click`, () => {
  destroyBoxes();
});