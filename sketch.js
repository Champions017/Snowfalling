const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var BGImage;
var flake1,flake2,flake3,flake4,flake5,flake6,flake7,flake8,flake9,flake10;

var boy,boyImg,boyImg2;
var ground;
var sound;

function preload(){
  BGImage = loadImage("snow1.png")
  boyImg1 = loadAnimation("boy1.png");
  boyImg2 = loadAnimation("boy2.png")
  sound = loadSound("music.mp3")
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  flake1 = new Snowflake(Math.round(random(0,1150)),-50,40,40)
  flake1.scale = 0.15;

  flake2 = new Snowflake(Math.round(random(0,1150)),-60,40,40)
  flake2.scale = 0.15;
  
  flake3 = new Snowflake(Math.round(random(0,1150)),-20,40,40)
  flake3.scale = 0.15;

  flake4 = new Snowflake(Math.round(random(0,1150)),-70,40,40)
  flake4.scale = 0.15;

  flake5 = new Snowflake(Math.round(random(0,1150)),-90,40,40)
  flake5.scale = 0.15;

  flake6 = new Snowflake(Math.round(random(0,1150)),-20,40,40)
  flake6.scale = 0.15;

  flake7 = new Snowflake(Math.round(random(0,1150)),-40,40,40)
  flake7.scale = 0.15;

  flake8 = new Snowflake(Math.round(random(0,1150)),-20,40,40)
  flake8.scale = 0.15;

  flake9 = new Snowflake(Math.round(random(0,1150)),-50,40,40)
  flake9.scale = 0.15;

  flake10 = new Snowflake(Math.round(random(0,1150)),-100,40,40)
  flake10.scale = 0.15;

  boy = createSprite(100,500,180,200);
  boy.addAnimation("facingright",boyImg1);
  boy.addAnimation("facingleft",boyImg2);
  boy.scale = 0.5;
  boy.setCollider("rectangle",0,0,150,400)

  ground = createSprite(600,600,width,5);

  sound.play();
  
}

function draw() {

  background(BGImage); 
  
  Engine.update(engine);

  flake1.display();
  flake2.display();
  flake3.display();
  flake4.display();
  flake5.display();
  flake6.display();
  flake7.display();
  flake8.display();
  flake9.display();
  flake10.display();

  boy.display();
  
  //ground.display();


  if(flake1.body.position.y > 700){
    Matter.Body.setPosition(flake1.body,{x: Math.round(random(0,1150)),y: -50});
  }
  if(flake2.body.position.y > 700){
    Matter.Body.setPosition(flake2.body,{x: Math.round(random(0,1150)),y: -60});
  }
  if(flake3.body.position.y > 700){
    Matter.Body.setPosition(flake3.body,{x: Math.round(random(0,1150)),y: -20});
  }
  if(flake4.body.position.y > 700){
    Matter.Body.setPosition(flake4.body,{x: Math.round(random(0,1150)),y: -70});
  }
  
  if(flake5.body.position.y > 700){
    Matter.Body.setPosition(flake5.body,{x: Math.round(random(0,1150)),y: -90});
  }
  
  if(flake6.body.position.y > 700){
    Matter.Body.setPosition(flake6.body,{x: Math.round(random(0,1150)),y: -20});
  }

  if(flake7.body.position.y > 700){
    Matter.Body.setPosition(flake7.body,{x: Math.round(random(0,1150)),y: -40});
  }

  if(flake8.body.position.y > 700){
    Matter.Body.setPosition(flake8.body,{x: Math.round(random(0,1150)),y: -20});
  }
  
  if(flake9.body.position.y > 700){
    Matter.Body.setPosition(flake9.body,{x: Math.round(random(0,1150)),y: -50});
  }
  
  if(flake10.body.position.y > 700){
    Matter.Body.setPosition(flake10.body,{x: Math.round(random(0,1150)),y: -100});
  }

  boy.collide(ground)

  if(keyDown("right") || keyDown("d")){
    boy.x = boy.x + 7
    boy.changeAnimation("facingright",boyImg)
  }
  else if(keyDown("left") || keyDown("a")){
    boy.x = boy.x - 7
    boy.changeAnimation("facingleft",boyImg2)
  }
  else if(keyDown ("space")||keyDown("w")||keyDown("up")){
    if(boy.y >= 490)
      boy.velocityY = -14
  }
  
    boy.velocityY = boy.velocityY + 1
}