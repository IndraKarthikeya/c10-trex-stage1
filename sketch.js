/** @format */

//variables are declared here
var canvas, edges;
var trex, trex_running;
var ground, ground_Image;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_Image = loadImage("ground2.png");
}

function setup() {
  canvas = createCanvas(600, 200);
  canvas.position(200, 200);

  trex = createSprite(50, 160, 30, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(300, 180, 600, 20);
  ground.velocityX = -4;
  ground.addImage(ground_Image);

  edges = createEdgeSprites();
}

function draw() {
  background("lightgrey");
  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8;
  //trex.collide(edges[3]);
  trex.collide(ground);
  if (ground.x < 0) {
    ground.x = 300;
  }

  drawSprites();
}
