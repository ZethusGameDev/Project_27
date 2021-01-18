
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pendulum1 = new ground(400,100,700,40)
	
	bob1 = new bob(200,600,50)
	bob2 = new bob(300,600,50);
	bob3 = new bob(400,600,50);
	bob4 = new bob(500,600,50);
	bob5 = new bob(600,600,50);
	
	rope1 = new rope(bob1.body, pendulum1.body, -200, 0);
	rope2 = new rope(bob2.body, pendulum1.body, -100, 0);
	rope3 = new rope(bob3.body, pendulum1.body, 0, 0);
	rope4 = new rope(bob4.body, pendulum1.body, 100, 0);
	rope5 = new rope(bob5.body, pendulum1.body, 200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  //Display for the roof.
  pendulum1.display();

  //Displaying the bobs.
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //Displaying the ropes.
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-300,y:-200});

	 }
   }
  


