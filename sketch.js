var picka,pickaImg;

function preload(){
 pickaImg = loadImage("pickachu1.jpg");
}
function setup() {
  createCanvas(800,400);
  picka = createSprite(200,200,20,20);
  picka.velocityX = -2;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}