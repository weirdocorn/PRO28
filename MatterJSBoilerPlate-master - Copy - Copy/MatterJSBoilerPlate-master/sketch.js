var paper, ground, bucket, slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var dustbinIMG = loadImage("dustbingreen.png");
	var paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new ground(400,670,800,20);
	bucket = createSprite(766,632,76,76);
	bucket.addImage("dustbinIMG");
	paper = new Paper(30,675,70);
	paper.addImage("paperIMG");
	slingshot = new SlingShot(paper.body,{x:120,y:125});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  jump();

  bucket.display();
  ground.display()
  paper.display();
  drawSprites();
 
}

function jump(){
	if(keyDown("up arrow")){
		paper.velocityY = -2;
		paper.velocityX = 0;
		if(paper.y === 60){
			paper.velocityY = -2;
			paper.velocityX = 0;
		}
	}
}

function mouseDrag(){
    Matter.body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}