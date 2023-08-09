const superDiv1 = document.querySelector('#super-div1');

let array = [];

async function getData(){
  const res = await fetch('http://localhost:8080/test/test');
  const data = await res.text();
  console.log(data);
  array = JSON.parse(data);
  usersAssessment();
}

getData();

setTimeout(() => {
  console.log(array);
}, 1000);

let usersAssessment = () => {
  if ("content" in document.createElement("template")) {
    let template = document.querySelector("#user-info");
    let userTamplete = template.content.querySelector(".user-tamplete");
    array.forEach((element) => {
      let clone = document.importNode(userTamplete, true);
      clone.querySelector(".user-star").innerHTML = "★".repeat(element.starRatingValue/2);
      clone.querySelector(".user-period").innerHTML = `${element.buttonValue1}년 ${element.buttonValue2}개월 사용자`;
      clone.querySelector(".text1").innerHTML = element.textarea1;
      clone.querySelector(".price span").innerHTML = element.textarea2;
      clone.querySelector(".type span").innerHTML = element.textarea3;
      clone.querySelector(".environment span").innerHTML = element.textarea4;
      superDiv1.appendChild(clone);
    });
  } else {
    alert("사용하시는 브라우저는 지원하지 않습니다.")
  }
}