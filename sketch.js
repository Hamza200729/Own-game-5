const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var box1
var engine
var world
var boxes = [];

function setup(){
    createCanvas(windowWidth , windowHeight);

    engine = Engine.create()
    world = engine.world
    Engine.run(engine);

    box1 = new Box(100 , 100 , 50 , 50);

}

function mousePressed(){
    boxes.push(new Box(mouseX , mouseY , 50 , 50));
}

function draw(){
    background(0);
    
    box1.show();
   
    for(var i = 0; i < boxes.length; i++){
       boxes[i].show();
    }

   // mousePressed()
}