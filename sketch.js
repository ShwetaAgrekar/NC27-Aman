
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2;
var string1, string2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 600,50);

	bob1 = new Bob(200, 400, 50,50);
	string1 = new Chain(roof.body, bob1.body, {x : bob1.body.position.x, y : roof.body.position.y});

	bob2 = new Bob(300, 400, 50,50);
	string2 = new Chain(roof.body, bob2.body, {x : bob2.body.position.x, y : roof.body.position.y});

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roof.display();

  bob1.display();
  string1.display();

  bob2.display();
  string2.display();
}



