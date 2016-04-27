// this is the js for 2.01 chart.js
// if (localStorage.nameArray) {
//   var parsedNameArray = JSON.parse(localStorage.nameArray);
//   names = parsedNameArray;
//   var parsedChoiceArray = JSON.parse(localStorage.nameChoice);
//   choice = parsedChoiceArray;
//   var parsedClickedArray = JSON.parse(localStorage.nameClicked);
//   clicked = parsedClickedArray;
//   getNumbers();
// }
// put if else here if chart already exists
var pic = [];
var appendImg = document.getElementById('append-img');
var appendImg2 = document.getElementById('append-img2');
var appendImg3 = document.getElementById('append-img3');

var pictureUniqueId = 0;

function Image(name, fileType){
  this.picName = name;
  this.tag = fileType;
  this.path = 'img/' + this.picName + this.tag;
  this.counterClick = 0;
  this.counterAppear = 0;
  this.id = pictureUniqueId;
  pictureUniqueId = pictureUniqueId + 1;
}

pic.push(new Image('bag', '.jpg'));
pic.push(new Image('banana', '.jpg'));
pic.push(new Image('bathroom', '.jpg'));
pic.push(new Image('boots', '.jpg'));
pic.push(new Image('breakfast', '.jpg'));
pic.push(new Image('bubblegum', '.jpg'));
pic.push(new Image('chair', '.jpg'));
pic.push(new Image('cthulhu', '.jpg'));
pic.push(new Image('dog-duck', '.jpg'));
pic.push(new Image('dragon', '.jpg'));
pic.push(new Image('pen', '.jpg'));
pic.push(new Image('pet-sweep', '.jpg'));
pic.push(new Image('scissors', '.jpg'));
pic.push(new Image('shark', '.jpg'));
pic.push(new Image('sweep', '.png'));
pic.push(new Image('tauntaun', '.jpg'));
pic.push(new Image('unicorn', '.jpg'));
pic.push(new Image('usb', '.gif'));
pic.push(new Image('water-can', '.jpg'));
pic.push(new Image('wine-glass', '.jpg'));

var index = random(pic);   //gives us the index of a random Image object in the pic array

var li = document.createElement('li');
li.innerHTML = renderImage(index);
appendImg.appendChild(li);

var index2 = random(pic);

while (index2 === index) {
  index2 = random(pic);
}

var li2 = document.createElement('li');
li2.innerHTML = renderImage(index2);
appendImg2.appendChild(li2);

var index3 = random(pic);

while (index3 === index2 || index3 === index){
  index3 = random(pic);
}

var li3 = document.createElement('li');
li3.innerHTML = renderImage(index3);
appendImg3.appendChild(li3);

function random(allPics){
  return Math.floor(Math.random() * allPics.length);
}

var choosePic = document.getElementById('append-img');
choosePic.addEventListener('click', newImage);

var choosePic2 = document.getElementById('append-img2');
choosePic2.addEventListener('click', newImage);

var choosePic3 = document.getElementById('append-img3');
choosePic3.addEventListener('click', newImage);

function newImage(event){
  for (var i = 0; i < pic.length; i++) {
    if (pic[i].id == event.target.id) {
      pic[i].counterClick++;
    }
  }
  var index = random(pic);
  li.innerHTML = renderImage(index);

  var index2 = random(pic);
  while (index2 === index) {
    index2 = random(pic);
  }
  li2.innerHTML = renderImage(index2);

  var index3 = random(pic);
  while (index3 === index2 || index3 === index){
    index3 = random(pic);
  }
  li3.innerHTML = renderImage(index3);
}

function renderImage(index){
  pic[index].counterAppear++;
  return '<img src=' + pic[index].path + ' id="' + pic[index].id + '" />';
}

var resultsButton = document.getElementById('results-button');
var chartContainer = document.getElementById('results');

resultsButton.addEventListener('click', showResults);

var clicked = [];

var choice = [];

// var chartDrawn = false;

var names = [];
function getNumbers(){
  for (var i = 0; i < pic.length; i++) {
    names.push(pic[i].picName);
    clicked.push(pic[i].counterClick);
    choice.push(pic[i].counterAppear);
  }
}
var ctx = results.getContext('2d');

var data = {
  labels: names,
  datasets: [
    {
      label: 'Times a choice was picked',
      backgroundColor: 'rgb(36, 231, 238)',
      borderColor: 'rgb(0, 10, 124)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: clicked
    },
    {
      label: 'Times a choice was given',
      backgroundColor: 'rgba(54,162,235,0.2)',
      borderColor: 'rgba(54,162,235,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(54,162,235,0.4)',
      hoverBorderColor: 'rgba(54,162,235,1)',
      data: choice
    }
  ]
};
function showResults() {
  if (localStorage.picArray = false){
    clicked = [];
    choice = [];
    names = [];
  }
  getNumbers();
  document.getElementById('results').hidden = false;
  // var canvas = document.createElement('canvas');
  // canvas.setAttribute('id', 'results-chart');
  // chartContainer.appendChild(canvas);
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          type: 'linear',
          ticks:{
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  });
  // myBarChart.update();
  // localStorage.setItem('nameArray', JSON.stringify(names));
  // localStorage.setItem('nameChoice', JSON.stringify(choice));
  // localStorage.setItem('nameClicked', JSON.stringify(clicked));
  localStorage.setItem('picArray', JSON.stringify(pic));
}

(function fuckYou (){
  if (localStorage.picArray) {
    var parsedPicArray = JSON.parse(localStorage.picArray);
    pic = parsedPicArray;
  }})();
