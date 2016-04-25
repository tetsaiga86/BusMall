var pic = [];
var appendImg = document.getElementById('append-img');
var appendImg2 = document.getElementById('append-img2');
var appendImg3 = document.getElementById('append-img3');

function image(name, fileType){
  this.picName = name;
  this.tag = fileType;
  this.path = 'img/' + this.picName + this.tag;
}

pic.push(new image('bag', '.jpg'));
pic.push(new image('banana', '.jpg'));
pic.push(new image('bathroom', '.jpg'));
pic.push(new image('boots', '.jpg'));
pic.push(new image('breakfast', '.jpg'));
pic.push(new image('bubblegum', '.jpg'));
pic.push(new image('chair', '.jpg'));
pic.push(new image('cthulhu', '.jpg'));
pic.push(new image('dog-duck', '.jpg'));
pic.push(new image('dragon', '.jpg'));
pic.push(new image('pen', '.jpg'));
pic.push(new image('pet-sweep', '.jpg'));
pic.push(new image('scissors', '.jpg'));
pic.push(new image('shark', '.jpg'));
pic.push(new image('sweep', '.png'));
pic.push(new image('tauntaun', '.jpg'));
pic.push(new image('unicorn', '.jpg'));
pic.push(new image('usb', '.gif'));
pic.push(new image('water-can', '.jpg'));
pic.push(new image('wine-glass', '.jpg'));

var index = random(pic);   //gives us the index of a random image object in the pic array

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
