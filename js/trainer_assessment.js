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
  buttonValue = 1
})

button[1].addEventListener(`click`, () => {
  button[1].classList.add(`active_button`)
  button[0].classList.remove(`active_button`)
  input = inputs[1]
  buttonValue = 2
})

async function getData(assessment1) {
  const url = "https://ae58-121-152-144-211.ngrok-free.app"
  const res = await fetch(url+'/trainer', {
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

// inputText = input.value

const regex = /[시씨슈쓔쉬쉽쒸쓉]([0-9]*|[0-9]+ *)[바발벌빠빡빨뻘파팔펄]|[섊좆좇졷좄좃좉졽썅춍]|ㅅㅣㅂㅏㄹ?|ㅂ[0-9]*ㅅ|[ㅄᄲᇪᄺᄡᄣᄦᇠ]|[ㅅㅆᄴ][0-9]*[ㄲㅅㅆᄴㅂ]|[존좉좇][0-9 ]*나|[자보][0-9]+지|보빨|[봊봋봇봈볻봁봍] *[빨이]|[후훚훐훛훋훗훘훟훝훑][장앙]|후빨|[엠앰]창|애[미비]|애자|[^탐]색기|([샊샛세쉐쉑쉨쉒객갞갟갯갰갴겍겎겏겤곅곆곇곗곘곜걕걖걗걧걨걬] *[끼키퀴])|새 *[키퀴]|[병븅]신|미친[가-닣닥-힣]|[믿밑]힌|[염옘]병|[샊샛샜샠섹섺셋셌셐셱솃솄솈섁섂섓섔섘]기|[섹섺섻쎅쎆쎇쎽쎾쎿섁섂섃썍썎썏][스쓰]|지랄|니[애에]미|갈[0-9]*보[^가-힣]|[뻐뻑뻒뻙뻨][0-9]*[뀨큐킹낑)|꼬추|곧휴|[가-힣]슬아치|자박꼼|[병븅]딱|빨통|[사싸](이코|가지|까시)|육시[랄럴]|육실[알얼할헐]|즐[^가-힣]|찌(질이|랭이)|찐따|찐찌버거|창[녀놈]|[가-힣]{2,}충[^가-힣]|[가-힣]{2,}츙|부녀자|화냥년|환[양향]년|호[구모]|조[선센][징]|조센|[쪼쪽쪾]([발빨]이|[바빠]리)|盧|무현|찌끄[레래]기|(하악){2,}|하[앍앜]|[낭당랑앙항남담람암함][ ]?[가-힣]+[띠찌]|느[금급]마|文在|在寅|(?<=[^\n])[家哥]|속냐|[tT]l[qQ]kf|Wls/
// https://github.com/curioustorvald/KoreanCursewordRegex 참고

const assessment = () => {
  if (regex.test(bottomTextarea.value)) {
    alert(`욕설이 포함되어 있습니다.`)
    return
  }
  if((starRatingValue === 0) || (buttonValue === 0) || (costInput.value === "") || (bottomTextarea.value === "") || (input === null)) {
    alert(`모든 항목을 입력해주세요.`)
    return
  }

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
