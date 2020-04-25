const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrops;

  function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  raindrop= new raindrop(600,400);
}

function draw() {
  //background(255,255,255);
  background(100);
  Engine.update(engine);
  raindrop.display();

  drawSprites();
}