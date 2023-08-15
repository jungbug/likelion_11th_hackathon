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

const regex = /[시씨슈쓔쉬쉽쒸쓉]([0-9]*|[0-9]+ *)[바발벌빠빡빨뻘파팔펄]|[섊좆좇졷좄좃좉졽썅춍]|ㅅㅣㅂㅏㄹ?|ㅂ[0-9]*ㅅ|[ㅄᄲᇪᄺᄡᄣᄦᇠ]|[ㅅㅆᄴ][0-9]*[ㄲㅅㅆᄴㅂ]|[존좉좇][0-9 ]*나|[자보][0-9]+지|보빨|[봊봋봇봈볻봁봍] *[빨이]|[후훚훐훛훋훗훘훟훝훑][장앙]|후빨|[엠앰]창|애[미비]|애자|[^탐]색기|([샊샛세쉐쉑쉨쉒객갞갟갯갰갴겍겎겏겤곅곆곇곗곘곜걕걖걗걧걨걬] *[끼키퀴])|새 *[키퀴]|[병븅]신|미친[가-닣닥-힣]|[믿밑]힌|[염옘]병|[샊샛샜샠섹섺셋셌셐셱솃솄솈섁섂섓섔섘]기|[섹섺섻쎅쎆쎇쎽쎾쎿섁섂섃썍썎썏][스쓰]|지랄|니[애에]미|갈[0-9]*보[^가-힣]|[뻐뻑뻒뻙뻨][0-9]*[뀨큐킹낑)|꼬추|곧휴|[가-힣]슬아치|자박꼼|[병븅]딱|빨통|[사싸](이코|가지|까시)|육시[랄럴]|육실[알얼할헐]|즐[^가-힣]|찌(질이|랭이)|찐따|찐찌버거|창[녀놈]|[가-힣]{2,}충[^가-힣]|[가-힣]{2,}츙|부녀자|화냥년|환[양향]년|호[구모]|조[선센][징]|조센|[쪼쪽쪾]([발빨]이|[바빠]리)|盧|무현|찌끄[레래]기|(하악){2,}|하[앍앜]|[낭당랑앙항남담람암함][ ]?[가-힣]+[띠찌]|느[금급]마|文在|在寅|(?<=[^\n])[家哥]|속냐|[tT]l[qQ]kf|Wls/
// https://github.com/curioustorvald/KoreanCursewordRegex 참고

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
  const url = "https://ae58-121-152-144-211.ngrok-free.app"
  const res = await fetch(url+'/gym', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(assessment1),
  });

  const data = await res.json();
  console.log(data);
  window.history.back(-1);
}

const assessment = () => {
  if (regex.test(textarea[0].value) || regex.test(textarea[1].value) || regex.test(textarea[2].value) || regex.test(textarea[3].value)) {
    alert(`욕설이 포함되어 있습니다.`)
    return
  }
  
  if (starRatingValue === 0 || buttonValue1 === 0 || buttonValue2 === 0 || buttonValue3 === 0 || textarea[0].value === `` || textarea[1].value === `` || textarea[2].value === `` || textarea[3].value === ``) {
    alert(`모든 항목을 선택해주세요.`)
    return
  }
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
