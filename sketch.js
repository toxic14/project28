
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,chain1;
var world,boy;

function preload(){
  boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,200,30);
	mango2=new mango(1050,150,30);
	mango3=new mango(1100,100,30);
	mango4=new mango(1150,120,30);
  mango5=new mango(1050,210,30);
  mango6=new mango(930,250,30);
	mango7=new mango(1050,50,30);
	mango8=new mango(900,180,30);
  mango9=new mango(1130,200,30);
  mango10=new mango(1010,100,30);
  mango11=new mango(1200,200,30);
	stoneObj=new stone(240,420,20);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	chain1 = new thrown(stoneObj.body,{x:240,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  textFont("georgia");
  textSize(20)
  text("Please press Space-Bar to play again",160,200);
  image(boy ,200,340,200,300);

  chain1.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stoneObj.display();

  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);

}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain1.fly();
}

function keyPressed(){

  if(keyCode===32){
      Matter.Body.setPosition(stoneObj.body,{x:240,y:420});
      chain1.attach(stoneObj.body);
  }
  }