let array = [];

let starRating = 10

let good = 1;
let normal = 0;
let bad = 0;

let good1 = 1;
let normal1 = 0;
let bad1 = 0;

let good2 = 1;
let normal2 = 0;
let bad2 = 0;


HorizontalBarGraph = function(el, series) {
  this.el = d3.select(el);
  this.series = series;
};

HorizontalBarGraph.prototype.draw = function() {
  var x = d3.scale.linear()
    .domain([0, d3.max(this.series, function(d) { return d.value })])
    .range([0, 100]);

  var segment = this.el
    .selectAll(".horizontal-bar-graph-segment")
      .data(this.series)
    .enter()
      .append("div").classed("horizontal-bar-graph-segment", true);

  segment
    .append("div").classed("horizontal-bar-graph-label", true)
      .text(function(d) { return d.label });

  segment
    .append("div").classed("horizontal-bar-graph-value", true)
      .append("div").classed("horizontal-bar-graph-value-bar", true)
        .style("background-color", function(d) { return d.color })
        .text(function(d) { return d.inner_label ? d.inner_label : "" })
        .transition()
          .duration(1000)
          .style("min-width", function(d) { return x(d.value) + "%" });

};

let graphFunction = (good,normal,bad) => {
  let graph = new HorizontalBarGraph('#my-graph', [
    {label: "만족", value: good, color: "#6ea6df" },
    {label: "보통", value: normal,  color: "#84c26d" },
    {label: "불만족",value: bad,  color: "#e17a69" }
  ]);
  graph.draw();
}

let graphFunction1 = (good1,normal1,bad1) => {
  let graph1 = new HorizontalBarGraph('#my-graph1', [
    {label: "만족", value: good1, color: "#6ea6df" },
    {label: "보통", value: normal1,  color: "#84c26d" },
    {label: "불만족",value: bad1,  color: "#e17a69" }
  ]);
  graph1.draw();
}

let graphFunction2 = (good2,normal2,bad2) => {
  let graph2 = new HorizontalBarGraph('#my-graph2', [
    {label: "만족", value: good2, color: "#6ea6df" },
    {label: "보통", value: normal2,  color: "#84c26d" },
    {label: "불만족",value: bad2,  color: "#e17a69" }
  ]);
  graph2.draw();
}

let usersAssessment = () => {
  array.forEach((element) => {
    starRating += element.starRatingValue;
    if(element.buttonValue1 == 1){
      good += 1;
    } else if(element.buttonValue1 == 2){
      normal += 1;
    } else if(element.buttonValue1 == 3){
      bad += 1;
    }

    if(element.buttonValue2 == 1){
      good1 += 1;
    } else if(element.buttonValue2 == 2){
      normal1 += 1;
    } else if(element.buttonValue2 == 3){
      bad1 += 1;
    }

    if(element.buttonValue3 == 1){
      good2 += 1;
    } else if(element.buttonValue3 == 2){
      normal2 += 1;
    } else if(element.buttonValue3 == 3){
      bad2 += 1;
    }
  })
  drawStar();
  graphFunction(good,normal,bad);
  graphFunction1(good1,normal1,bad1);
  graphFunction2(good2,normal2,bad2);
}

async function getData(){
  const url = "https://ae58-121-152-144-211.ngrok-free.app"
  const res = await fetch(url+'/gym/req');
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


// graph.draw();
// graph1.draw();
// graph2.draw();