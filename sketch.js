const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;

function setup() {
  createCanvas(800,400);
  
  block1 = new Box(400,200,50,50);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
block1.display();


  drawSprites();
}