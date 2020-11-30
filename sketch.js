
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime=0


var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6,obstacle7,obstacle8

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600,600)
 monkey=createSprite(80,515,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,550,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)

  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white")
  
SurvivalTime=SurvivalTime+Math.round(getFrameRate()/60)
  stroke("white")
textSize(20);
fill("black")
text("score:"+SurvivalTime,500,50)


  if (ground.x < 150){
      ground.x = ground.width/2;
    }
  if(keyDown("space") && monkey.y>=460) {
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
  
  bananas();
  spawnObstacles();
  drawSprites();
}

function bananas(){
  if(frameCount%80===0){
  banana=createSprite(400,10,20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.y=random(370,390);
    banana.velocityX=-2
    banana.lifeTime=-1
    bananaGroup.add(banana)
    
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(550,525 ,10,40);
  
   
  obstacle.addImage(obstacleImage);
    
     obstacle.scale = 0.1;
    obstacle.lifetime = 1500;
    obstacle.velocityX=-2

    obstacleGroup.add(obstacle)
    
    
              
    }
    
    
   
  }







