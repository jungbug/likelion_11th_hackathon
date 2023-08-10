const starRating = document.querySelector(`#star-rating`)
const button = document.querySelectorAll(`.click_button`)
const inputs = document.querySelectorAll(`.middle-input`)
const costInput = document.querySelector(`.cost-input`)
const confirmButton = document.querySelector(`#confirm-button`)
const bottomTextarea = document.querySelector(`#bottom-textarea`)
let input = null

let starRatingValue = 0
let buttonValue = 0
let inputText = ""
let cost = ""
let bottomInput = ""

const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`
  starRating.innerText = `${target.value / 2}/5`
  starRatingValue = target.value
}


button[0].addEventListener(`click`, () => {
  button[0].classList.add(`active_button`)
  button[1].classList.remove(`active_button`)
  input = inputs[0]
  buttonValue = 0
})

button[1].addEventListener(`click`, () => {
  button[1].classList.add(`active_button`)
  button[0].classList.remove(`active_button`)
  input = inputs[1]
  buttonValue = 1
})

async function getData(assessment1) {
  const res = await fetch('http://localhost:8080/trainer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(assessment1),
  });

  const data = await res.json();
  console.log(data);
}

// inputText = input.value


const assessment = () => {
  const assessment1 = {
    starRatingValue: starRatingValue,
    buttonValue: buttonValue,
    inputText: input.value,
    cost: costInput.value,
    bottomInput: bottomTextarea.value
  };
  console.log(assessment1);
  getData(assessment1);
};

document.querySelector(`.yes`).addEventListener(`click`, assessment)
