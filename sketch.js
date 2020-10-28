const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var dustbinImg,dustbin;

function preload(){
    dustbinImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    dustbin = createSprite(964,520,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.45;

   dustbin1 = new Dustbin(902,505,10,120);
    dustbin2 = new Dustbin(962,565,130,10);
    dustbin3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

    

    
    ground.display();
    crumpledPaper.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}
