var bg, bgImg;
var robot, robotImg;
//var enemy, enemyImg;
//var heart1Img, heart2Img, heart3Img;
//var score =0;

function preload(){
  
	
	bgImg = loadImage("Images/background_landscape09.png")
	robotImg = loadImage("Images/robot_18.png")
	//enemyImg = loadImage("Images/virus03_04.png");
	//heart1Img = loadImage("Images/heart_1.png");
	//heart2Img = loadImage("Images/heart_2.png");
	//heart3Img = loadImage("Images/heart_3.png");
	
  
  }

  function setup() {

  
	createCanvas(800, 500);
  
	//adding the background image
	bg = createSprite(400,250);
  bg.addImage(bgImg)
  bg.scale = 2;

  robot = createSprite(400, 450);
  robot.addImage(robotImg);
  robot.scale = 0.25;

  //enemyGroup = new Group();
  //bulletGroup = new Group();

  /*heart1 = createSprite(650, 50, 20, 20);
heart1.addImage(heart1Img);
heart1.scale = 0.25;
heart1.visible = false;

heart2 = createSprite(675, 50, 20, 20);
heart2.addImage(heart2Img);
heart2.scale = 0.25;
heart2.visible = false;

heart3 = createSprite(700, 50, 20, 20);
heart3.addImage(heart3Img);
heart3.scale = 0.25;
heart3.visible =true;*/
  
}

function draw() {
	background(0); 
/*	if(keyDown("LEFT_ARROW")||touches.length>0){
		robot.x = robot.x-30
	  }
	  if(keyDown("RIGHT_ARROW")||touches.length>0){
	   robot.x = robot.x+30
	  }
	  


	if(keyWentDown("space")){
		bullet = createSprite(robot.x, 450, 5, 15);
		bullet.velocityY= -10;
		bulletGroup.add(bullet);
	bullet.shapeColor  = "blue";
	//	bulletCount-= 1;
	   
	  }
	  if(enemyGroup.isTouching(bulletGroup)){
		for (var i=0; i<enemyGroup.length; i++){
		  if(enemyGroup[i].isTouching(bulletGroup)){
			enemyGroup[i].destroy();
			bulletGroup.destroyEach();
			score+=5;
			
		  }
		}
	}
	  

spawnEnemy();*/
	drawSprites();
	//textSize(20);
	//strokeWeight(4);
	//fill ("maroon");
	
//	text("SCORE " +score, 630, 100);
}

/*function spawnEnemy(){
	if(frameCount % 60 ===0){
		var enemy = createSprite(random(20, 780), 50);
		enemy.addImage(enemyImg);
		
		enemy.scale = 0.15;
		enemy.velocityY = 2;
	enemy.lifetime = 500;
	enemyGroup.add(enemy);
	} }*/
/*var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg;
var bulletCount=50;
var life =3;
var score =0;
var zombieKilled = 0;
//var gameState

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png")
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

 zombieGroup = new Group();
bulletGroup = new Group();


 //creating hearts for life
heart1 = createSprite(displayWidth-210, 40, 20, 20);
heart1.addImage(heart1Img);
heart1.scale = 0.4;
heart1.visible = false;

heart2 = createSprite(displayWidth-170, 40, 20, 20);
heart2.addImage(heart2Img);
heart2.scale = 0.4;
heart2.visible = false;

heart3 = createSprite(displayWidth-130, 40, 20, 20);
heart3.addImage(heart3Img);
heart3.scale = 0.4;
//heart3.visible =false;




}



function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150, player.y-25, 15, 5);
  bullet.velocityX= 10;
  bulletGroup.add(bullet);
  bulletCount-= 1;
  player.addImage(shooter_shooting);
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)}
  
//destroy zombie and reduce shooter's life
if(zombieGroup.isTouching(player)){
  console.log("check");
  for (var i=0; i<zombieGroup.length; i++){
    if(zombieGroup[i].isTouching(player)){
      zombieGroup[i].destroy();
      life-=1;
    }
  }
}
if(life===3){
  heart3.visible = true;
  heart2.visible = false;
  heart1.visible = false;
}
if(life===2){
  heart3.visible = false;
  heart2.visible = true;
  heart1.visible = false;
}
if(life===1){
  heart3.visible = false;
  heart2.visible = false;
  heart1.visible = true;
}
if(life===0){
  heart3.visible = false;
  heart2.visible = false;
  heart1.visible = false;
  //gameState = END;
}
if(zombieGroup.isTouching(bulletGroup)){
  for (var i=0; i<zombieGroup.length; i++){
    if(zombieGroup[i].isTouching(bulletGroup)){
      zombieGroup[i].destroy();
      bulletGroup.destroyEach();
      zombieKilled +=5;
    }
  }

}




spawnZombie();
drawSprites();
strokeWeight(5);
fill("yellow");
textSize(25);
text("Bullet Count:"+ bulletCount, displayWidth-180, 100);
text("score :" + zombieKilled, displayWidth-180, 150);
if(zombieKilled===100){
  text("YOU WIN" , 500, 500);
}}
function spawnZombie(){
  if(frameCount % 60 ===0){
  var zombie= createSprite(displayWidth-50, random(displayHeight-650, displayHeight-200), 50, 50);
  zombie.velocityX = -3;
  zombie.addImage(zombieImg);
  zombie.scale = 0.15;
  zombie.lifetime = 500;
  zombieGroup.add(zombie);
}

}*/