// module aliases
const Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let boxes = [];

let ground;

function setup() {
  createCanvas(500, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();  
}


function draw() {
  background(51);
  ground.show();
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}

function mouseClicked() {
  boxes.push(new Box(mouseX, mouseY, floor(random(20,40)), floor(random(20,40)) ));
}