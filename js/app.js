var pic = [];
var appendImg = document.getElementById('append-img');
var appendImg2 = document.getElementById('append-img2');
var appendImg3 = document.getElementById('append-img3');

function Image(name, fileType){
  this.picName = name;
  this.tag = fileType;
  this.path = 'img/' + this.picName + this.tag;
  this.counterClick = 0;
  this.counterAppear = 0;
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
li.innerHTML = '<img src=' + pic[index].path + ' />';
appendImg.appendChild(li);

var index2 = random(pic);

while (index2 === index) {
  index2 = random(pic);
}

var li2 = document.createElement('li');
li2.innerHTML = '<img src=' + pic[index2].path + ' />';
appendImg2.appendChild(li2);

var index3 = random(pic);

while (index3 === index2 || index3 === index){
  index3 = random(pic);
}

var li3 = document.createElement('li');
li3.innerHTML = '<img src=' + pic[index3].path + ' />';
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

function newImage(){
  var index = random(pic);
  li.innerHTML = '<img src=' + pic[index].path + ' />';

  var index2 = random(pic);
  while (index2 === index) {
    index2 = random(pic);
  }
  li2.innerHTML = '<img src=' + pic[index2].path + ' />';

  var index3 = random(pic);
  while (index3 === index2 || index3 === index){
    index3 = random(pic);
  }
  li3.innerHTML = '<img src=' + pic[index3].path + ' />';

}
