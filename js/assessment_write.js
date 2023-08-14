const starRating = document.querySelector(`#star-rating`)

const textarea = document.querySelectorAll(`.textarea`)

const buttonContainer = document.querySelectorAll(`.button-container`)

const button = document.querySelectorAll(`.button-container button`)

let starRatingValue = 0

let buttonValue1 = 0
let buttonValue2 = 0
let buttonValue3 = 0

const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`
  starRating.innerText = `${target.value / 2}/5`
  starRatingValue = target.value
}

buttonContainer.forEach((element) => {
  element.addEventListener(`click`, (e) => {
    if (e.target.classList.contains("1")) {
      if (e.target.innerText === `만족`) {
        buttonValue1 = 1
      } else if (e.target.innerText === `보통`) {
        buttonValue1 = 2
      } else if (e.target.innerText === `불만족`) {
        buttonValue1 = 3
      }
    }
    if (e.target.classList.contains("2")) {
      if (e.target.innerText === `만족`) {
        buttonValue2 = 1
      } else if (e.target.innerText === `보통`) {
        buttonValue2 = 2
      } else if (e.target.innerText === `불만족`) {
        buttonValue2 = 3
      }
    }
    if (e.target.classList.contains("3")) {
      if (e.target.innerText === `만족`) {
        buttonValue3 = 1
      } else if (e.target.innerText === `보통`) {
        buttonValue3 = 2
      } else if (e.target.innerText === `불만족`) {
        buttonValue3 = 3
      }
    }
  })
})



button.forEach((element) => {
  element.addEventListener(`click`, () => {
    element.classList.add(`active`)
    try {
      if (element.nextElementSibling) {
        element.nextElementSibling.classList.remove(`active`)
      }
    } catch (e) {
    }
    try {
      if (element.nextElementSibling.nextElementSibling) {
        element.nextElementSibling.nextElementSibling.classList.remove(`active`)
      }
    } catch (e) {
    }
    try {
      if (element.previousElementSibling) {
        element.previousElementSibling.classList.remove(`active`)
      }
    } catch (e) {
    }
    try {
      if (element.previousElementSibling.previousElementSibling) {
        element.previousElementSibling.previousElementSibling.classList.remove(`active`)
      }
    } catch (e) {
    }

  })
})

async function getData(assessment1) {
  const res = await fetch('http://121.152.144.211/gym', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(assessment1),
  });

  const data = await res.json();
  console.log(data);
}

const assessment = () => {
  const assessment1 = {
    starRatingValue,
    buttonValue1,
    buttonValue2,
    buttonValue3,
    textarea1: textarea[0].value,
    textarea2: textarea[1].value,
    textarea3: textarea[2].value,
    textarea4: textarea[3].value,
  };
  console.log(assessment1);
  getData(assessment1);
};


document.querySelector(`.yes`).addEventListener(`click`, assessment)

