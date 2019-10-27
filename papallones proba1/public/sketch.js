var socket;
var  gif_createImg;

function preload() {

  gif_createImg = createImg("https://66.media.tumblr.com/fc329bba63f0425865df7b95c73affaa/tumblr_ov8sesIeA31wpgn2yo1_250.gifv");

}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(51);

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);

}

// function mouseDragged(){
//   console.log(mouseX + ',' + mouseY);
// }

function newDrawing(data) {

  gif_createImg.position(mouseX, mouseY);

  // noStroke();
  // fill(255, 0, 100);
  // ellipse(data.x, data.y, 10, 10);
}

function draw() {

  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);

  gif_createImg.position(mouseX, mouseY);

  // noStroke();
  // fill(255);
  // ellipse(mouseX, mouseY, 10, 10);
}
