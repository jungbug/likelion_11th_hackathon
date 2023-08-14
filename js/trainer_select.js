let array = [];

let starRating = 10

let usersAssessment = () => {
  array.forEach((element) => {
    starRating += element.starRatingValue;
  })
  drawStar();
}

async function getData(){
  const res = await fetch('//121.152.144.211:8080/gym/req');
  const data = await res.text();
  array = JSON.parse(data);
  usersAssessment();
}

getData();

const drawStar = () => {
  starRating = (starRating/(array.length+1))
  document.querySelector(`.star span`).style.width = `${starRating * 10}%`
}

drawStar();