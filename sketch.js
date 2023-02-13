var runner, coin;
var floor, background, backgroundImage;
var runnerAnimation;
var edges;
var cone, coneImage, coneGroup;
var gameState="play";
var score=0;
function preload(){
    runnerAnimation= loadAnimation("blue.png","green.png");
    backgroundImage= loadImage("background.png");
    coneImage= loadImage("cone.png");
}

function setup() {
 createCanvas(1000,400);   
 score=0;

 runner=createSprite(200,200);
 runner.addAnimation(runnerAnimation);

 edges= createEdgeSprites();
 
 coneGroup= new Group();
}

function draw() {

 background(backgroundImage);

 runner.collide(edges);

 textSize(20);
 text("Score: "+ score, 20, 20);

if(gameState=="play"){
 score=score+Math.round(getFrameRate()/60);

 if(keyDown("space") && runner.y>=350){
    runner.velocityY = -16;
  }
  runner.velocityY = runner.velocityY + 0.5;

  if(runner.isTouching(coneGroup)){
    gameState="End";
  }
}

if(gameState=="End"){
    text("Game Over", 450, 200);
    textWeight=20;
    runner.destroy();
    coneGroup.destroy();

}

 spawnCones();
 drawSprites();
}

function spawnCones(){
    if(frameCount%200==0){
    cone= createSprite(1000,370);
    cone.addImage(coneImage);
    cone.velocityX=-5;
    cone.scale=0.1;
    coneGroup.add(cone);
    }

}