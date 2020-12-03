
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyimg,boy;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree;
var stone;
var rubber;
var ground;

function preload(){
 
 treeImg=loadImage("ghyt/tree.png");
 boyImg=loadImage("ghyt/boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1=new Mango (200,200,10,10);
	mango2=new Mango (200,250,10,10);
	mango3=new Mango (250,200,10,10);
	mango4=new Mango (250,250,10,10);
	mango5=new Mango (280,220,10,10);
	mango6=new Mango (230,280,10,10);

    stone=new Stone (100,300,5,5);

	rubber = new Sling(stone.body,{x : 200 ,y: 100 });

    ground=new Ground(200,400,600,20);

	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background(0);
  
Image(treeImg,300,200,50,50)
Image(boyImg,100,300,20,50)

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();

stone.display();

rubber.display();

ground.display();

if (stone.isTouching)


  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();

}

function keyPressed(){
if (keyCode===32){
Matter.Body.setPosition(stone.body,{x:235,y:420})
launcherObject.attach(stone.body);
}
}

