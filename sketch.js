
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1;
var box2;
var box3;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//groundSprite=createSprite(width/2, height-175, width,10);
	//groundSprite.shapeColor=color(255);
//	World.add(world, ground);

	box1Sprite= createSprite(windowWidth-110, 635, 200,15);
	box1Sprite.shapeColor=color("red");

	box2Sprite= createSprite(windowWidth-205, 620 , 15,45);
	box2Sprite.shapeColor=color("red");

	box3Sprite= createSprite(windowWidth-10, 620, 15,45);
	box3Sprite.shapeColor=color("red");

	paper = new Paper(200,height-197 , 35);
	

	//engine = Engine.create();
	world = engine.world;


	

	

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, windowWidth, 15);
  //ground.display();
//   box1.display();
//   box2.display();
//   box3.display();
 //paper.collide(ground);

 drawSprites();
 
}
 function keyPressed(){

	if (keyCode === 38){
	 
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		  
		}
}


 




