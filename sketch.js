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
  console.log(boxes.length);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (let i = boxes.length - 1; i > 0; i--) {
    console.log(boxes.length);
    if (boxes[i].isInvalid()) {
      World.remove(world,boxes[i]);
      boxes.slice(i);
      console.log("removing box nr" + i)
      console.log(boxes.length);
    };
  }
}


function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, floor(random(20,40)), floor(random(20,40)) ));
}