
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(850, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(440,575,40);
	bob5 = new bob(480,575,40);
	
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)

	
	Engine.run(engine);
	keyPressed();

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roofObject.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  fill("orange")
  bob5.display();
  fill("red");
  bob1.display();
  fill("blue");
  bob2.display();
  fill("lime");
  bob3.display();
  fill("yellow");
  bob4.display();
  console.log(bob1)
  fill("pink");
  textSize(55)
  text("NEWTON’S CRADLE",150,100);
  text()
  
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:45});
	}
}





