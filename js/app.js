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

// var resultsButton = document.getElementById('results-button');
// var resultsTable = document.getElementById('results-table');
// resultsButton.addEventListener('click', showResults);
//
// function showResults() {
//   resultsTable.innerHTML = '';
//   for (var i = 0; i < pic.length; i++) {
//     showResultRow(i);
//   }
// }
//
// function showResultRow(rowIndex){
//   var tr = document.createElement('tr');
//   var picName = document.createElement('td');
//   var clicks = document.createElement('td');
//   var shown = document.createElement('td');
//   picName.textContent = pic[rowIndex].picName;
//   clicks.textContent = pic[rowIndex].counterClick;
//   shown.textContent = pic[rowIndex].counterAppear;
//   tr.appendChild(picName);
//   tr.appendChild(clicks);
//   tr.appendChild(shown);
//   resultsTable.appendChild(tr);
// }
