const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundimage
var cannonbase
var cannon
var tower,towerimage
var angle
var cannonball
function preload() {
 backgroundimage = loadImage("assets/background.gif")
 
 towerimage = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)
 cannon = new Cannon(180,110,130,100,angle)
 cannonball = new Cannonball(cannon.x,cannon.y)
}

function draw() {
  image(backgroundimage,0,0,width,height)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 push()
 imageMode(CENTER) 
 image(towerimage,tower.position.x,tower.position.y,160,310)
 pop()  
 cannonball.display()
 cannon.display()
}
function keyReleased(){
  if(keyCode == DOWN_ARROW){
    cannonball.shoot()
  }
}