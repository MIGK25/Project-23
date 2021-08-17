const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playEr, Playerbase;
var computer, ComputerBase;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  Playerbase = new playerBase(300, random(450, height - 300), 180, 150);
  playEr = new player(285, Playerbase.body.position.y - 153, 50, 180);
 
  ComputerBase = new computerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new computerPlayer(
    width - 280,
    ComputerBase.body.position.y - 153,
    50,
    180
  );    
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  Playerbase.display();
  playEr.display();
  

  ComputerBase.display();
  computer.display();
  
}