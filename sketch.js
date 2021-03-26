
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var rope,ground,stone,mango,tree,boy ;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
    world = engine.world;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new    Tree  (1000,400,400,600);
	mango= new    Mango (1000,100,100,100);
	boy  = new     Boy  (100,600,120,300);
	stone = new   Stone (300,600,100,100);
	rope = new Rope(stone.body,{x:100,y:600});
	ground = new  Ground(600,680,1200,20);

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(247,247,247);


 
  tree.display();
  boy.display();
  stone.display();
  mango.display(); 
  rope.display(); 
  ground.display();
  
  drawSprites();
 
  
}
/*
function detectollision (){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var  distance = dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y); 
     if  (distance<=lmango.r+lstone.r )
	 {
		Matter.body.setStatic(lmango,false); 
	 }
}*/