const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(200,200,20,20)
  ground1 = new Ground(200,200,20,20)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display();  
  ground1.display();  
  drawSprites();
}