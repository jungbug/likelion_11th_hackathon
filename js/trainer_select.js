let array = [];

let starRating = 10

const drawStar = () => {
  starRating = (starRating/(array.length+1))
  document.querySelector(`.star span`).style.width = `${starRating * 10}%`
}

drawStar();

let usersAssessment = () => {
  array.forEach((element) => {
    starRating += element.starRatingValue;
  })
  drawStar();
}

async function getData(){
  const url = "https://ae58-121-152-144-211.ngrok-free.app"
  const res = await fetch(url+'/trainer/req');
  const data = await res.text();
  array = JSON.parse(data);
  usersAssessment();
}

getData();

