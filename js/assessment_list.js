const superDiv1 = document.querySelector('#super-div1');

let array = [];

let starRating = 10

const drawStar = () => {
  starRating = (starRating/(array.length+1))
  document.querySelector(`.star span`).style.width = `${starRating * 10}%`
}

drawStar();

async function getData(){
  const url = "https://ae58-121-152-144-211.ngrok-free.app"
  const res = await fetch(url+'/gym/req');
  const data = await res.text();
  array = JSON.parse(data);
  usersAssessment();
}

getData();

setTimeout(() => {
  console.log(array);
}, 300);

let usersAssessment = () => {
  if ("content" in document.createElement("template")){
    let template = document.querySelector("#user-info");
    let userTamplete = template.content.querySelector(".user-tamplete");
    console.log(userTamplete) 
    array.forEach((element) => {
      starRating += element.starRatingValue;
      let clone = document.importNode(userTamplete, true);
      clone.querySelector(".user-star").innerHTML = "★".repeat(element.starRatingValue/2);
      clone.querySelector(".user-period").innerHTML = `${element.buttonValue1}년 ${element.buttonValue2}개월 사용자`;
      clone.querySelector(".text1").innerHTML = element.textarea1;
      clone.querySelector(".price span").innerHTML = element.textarea2;
      clone.querySelector(".type span").innerHTML = element.textarea3;
      clone.querySelector(".environment span").innerHTML = element.textarea4;
      superDiv1.appendChild(clone);
    })
    drawStar();
  } else {
    alert("사용하시는 브라우저는 지원하지 않습니다.")
  }
}