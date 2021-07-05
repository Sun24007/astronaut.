var bg, bgImage, sleep, brush, gym, eat, drink, move, astronaut 

function setup() {
  createCanvas(800,500);  
}

function preload(){
   bgImage = loadImage("Astronaut's daily routine/iss.png");
    sleep = loadAnimation("Astronaut's daily routine/sleep.png");
   brush = loadAnimation("Astronaut's daily routine/brush.png");
   gym = loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png", "Astronaut's daily routine/gym11.png", "Astronaut's daily routine/gym12.png");
   eat = loadAnimation("Astronaut's daily routine/eat1.png", "Astronaut's daily routine/eat2.png");
   drink = loadAnimation("Astronaut's daily routine/drink1.png", "Astronaut's daily routine/drink2.png");
   move = loadAnimation("Astronaut's daily routine/move.png", "Astronaut's daily routine/move2.png"); 
}

function draw() {
  background(255,255,255);  
  background(0);
  bg = createSprite(400, 200, 50, 50);
  bg.addImage(bgImage);
  bg.scale = 0.2;

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  drawSprites();
  fill("white")
  textSize(16)
  text("Instructions:", 15, 15)
  //Up Arrow = Brushing
  //Down Arrow = Work out 
  //")
  if(keyCode===(UP_ARROW)){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("working out", gym);
    astronaut.changeAnimation("working out");
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("left")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Drinking", drink);
    astronaut.changeAnimation("Drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = -2
    astronaut.velocityY = 1 
  }
  
}