const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var sun,mer;
var c1;

function setup() {
  var canvas = createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;

 

  sun = new Planet(500,500,40);
  mer= new Planet(600,600,15);

  Body.setVelocity(mer, {x: 10, y: 5});

 engine.world.gravity.y = 0;


 c1 = new constraint(sun.body,mer.body,100);

}

function draw() {
  background(0);  

  Engine.update(engine);

  text(mouseX + ',' + mouseY, 10, 15);

  sun.display();
  mer.display();
  c1.display();
}