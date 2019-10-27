var socket;
// var  gif_createImg;
//
function preload() {
sadboys = loadImage("https://66.media.tumblr.com/8a50cd194f2c31319ab026a9d7cabd2b/tumblr_pwx4r7p8I71wiatbxo1_400.png");
  // gif_createImg = createImg("https://66.media.tumblr.com/fc329bba63f0425865df7b95c73affaa/tumblr_ov8sesIeA31wpgn2yo1_250.gifv");

}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(0,0,0);

  var i = 0, select=0;
  while (i<20)  {
                    select = floor(random(0,1) *2);
                    image(sadboys, random(0, windowWidth), random(0, windowHeight));
                    rect(random(0, windowWidth), random(0, windowHeight), random(10, 30), random(10, 30));
                    i++;
                  }

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);

}

function newDrawing(data) {

image (sadboys,data.x, data.y, random(10, 30), random(10, 30));
  // gif_createImg.position(data.x, data.y);

  // noStroke();
  // fill(255, 0, 100);
  // ellipse(data.x, data.y, 10, 10);
}


// function mouseDragged(){
//   console.log(mouseX + ',' + mouseY);
// }

function draw() {

  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);


image (sadboys,mouseX, mouseY, random(10, 30), random(10, 30));

  // GIF (NO FUNCIONA BÉ):

  // gif_createImg.position(mouseX, mouseY);

  //DIBUIX:

  // noStroke();
  // fill(255);
  // ellipse(mouseX, mouseY, 10, 10);
}
