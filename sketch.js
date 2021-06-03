
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg;
var wall1,wall2,wall3,wall4,wall5,wall6;
var star1,star2,star3,star4,star5,star6;
var wall1image,wall2image,wall3image,wall4image,wall5image,wall6image;
var player;
var enemy1,enemy1Image;
var enemy2,enemy2Image;
var enemy3,enemy3Image;
var ground;
var boundry1,boundry2,boundry3;
var door,doorImage;
var victory;
var score=0;

function preload()
{
	bg=loadImage("bg.jpg");
	playerImage=loadImage("ball.png");
	wall1image=loadImage("stair.jpg");
	wall2image=loadImage("stair.jpg");
	wall3image=loadImage("stair.jpg");
	wall4image=loadImage("stair.jpg");
	wall5image=loadImage("stair.jpg");
	wall6image=loadImage("stair.jpg");
	star1image=loadImage("star.png");
	star2image=loadImage("star.png");
	star3image=loadImage("star.png");
	star4image=loadImage("star.png");
	star5image=loadImage("star.png");
	star6image=loadImage("star.png");

	enemy1Image=loadImage("SQUARE.jpg");
	enemy2Image=loadImage("SQUARE.jpg");
	enemy3Image=loadImage("SQUARE.jpg");

	victory=loadImage("victory.jpg")

    doorImage=loadImage("door.jpg");


}

function setup() {
	createCanvas(2500, 800);
	rectMode(CENTER);
	
    wall1=createSprite(800,580,300,150);
	wall1.addImage(wall1image);

	wall2=createSprite(900,530,200,250);
	wall2.addImage(wall2image);

	wall3=createSprite(1250,280,300,150);
	wall3.addImage(wall3image);

    wall4=createSprite(1520,400,250,150);
	wall4.addImage(wall4image);

    wall5=createSprite(1890,580,250,150);
	wall5.addImage(wall5image);

	wall6=createSprite(2100,530,200,250);
	wall6.addImage(wall6image);



	star1=createSprite(730,450,50,50);
	star1.scale=0.2;
	star1.addImage(star1image);

	star2=createSprite(1200,150,50,50);
	star2.scale=0.2;
    star2.addImage(star2image);

	star3=createSprite(1270,150,50,50);
	star3.scale=0.2;
	star3.addImage(star3image);

	star4=createSprite(1500,290,50,50);
	star4.scale=0.2;
    star4.addImage(star4image);

	star5=createSprite(1400,570,50,50);
	star5.scale=0.2;
    star5.addImage(star5image);

	star6=createSprite(1880,450,50,50);
	star6.scale=0.2;
    star6.addImage(star5image);




    enemy1=createSprite(1200,530,50,50);
	enemy1.scale=0.02;
	enemy1.addImage(enemy1Image);
    enemy1.velocityY=-4;

    enemy2=createSprite(1720,450,50,50);
	enemy2.addImage(enemy2Image);
	enemy2.scale=0.02;
    enemy2.velocityY=-5;

    enemy3=createSprite(2100,200,50,50);
	enemy3.addImage(enemy3Image);
	enemy3.scale=0.02;
    enemy3.velocityY=6;

    door=createSprite(2350,450,100,300);
	door.addImage(doorImage);
	door.scale=0.9;


    
    boundry1=createSprite(1720,200,120,10);
    boundry1.visible=false;

    boundry2=createSprite(1720,500,120,10);
    boundry2.visible=false;

    boundry3=createSprite(2100,200,120,10);
    boundry3.visible=false;



	
	ground=createSprite(800,630,5000,10);
    ground.visible=false;

	player=createSprite(200,600,50,50);
	player.scale=0.14;
	player.addImage(playerImage);


	engine = Engine.create();
	world = engine.world;

	score=0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  textSize(20);
  fill("white");
  stroke("black");
  strokeWeight(5);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);


fill("black");
stroke("white");
textSize(40);
text("Let's see ,How much time you can survive!!",600,50);



player.collide(ground);
player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);

enemy1.bounceOff(wall3);
enemy1.bounceOff(ground);

enemy2.bounceOff(boundry1);
enemy2.bounceOff(boundry2);

enemy3.bounceOff(boundry3);
enemy3.bounceOff(wall6);


if(player.isTouching(door)){
background(victory);
textSize(70);
fill("white");
text("** ! YOU WON ! ** ",800,500);
wall1.destroy();
wall2.destroy();
wall3.destroy();
wall4.destroy();
wall5.destroy();
wall6.destroy();
star1.destroy();
star2.destroy();
star3.destroy();
star4.destroy();
star5.destroy();
star6.destroy();

enemy1.destroy();
enemy2.destroy();
enemy3.destroy();

player.destroy();

door.destroy();

survivalTime.destroy();


}


if(player.isTouching(enemy1)){
player.x=200;
player.y=600;
}

if(player.isTouching(enemy2)){
	player.x=200;
	player.y=600;
}

if(player.isTouching(enemy3)){
	player.x=200;
	player.y=600;
}

if(player.isTouching(star1)){
player.scale=0.15;

star1.destroy();
}

if(player.isTouching(star2)){
player.scale=+0.17;

star2.destroy();
}

if(player.isTouching(star3)){
player.scale=+0.18;

star3.destroy();
}

if(player.isTouching(star4)){
player.scale=+0.19;

star4.destroy();
}

if(player.isTouching(star5)){
	player.scale=+0.2;

star5.destroy();
}

if(player.isTouching(star6)){
player.scale=0.7/2;

star6.destroy();
}


if(keyDown("up") ) {
	player.velocityY = -15; 
}

if(keyDown("left") ) {
	player.velocityX =player.velocityY -5 ; 
}

if(keyDown("right") ) {
	player.velocityX =player.velocityY + 5 ; 
}

if(keyDown("down") ) {
	player.velocityY = 0; 
	player.velocityX=0;
}

player.velocityY = player.velocityY + 0.8;



ground.display();
wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();

star1.display();
star2.display();
star3.display();
star4.display();
star5.display();










player.display();


  drawSprites();
 
}


