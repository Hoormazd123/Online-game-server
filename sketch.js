var knife, PLAY=1, END=0, gamestate=1, fruit, score=0,FRUIT;

//gamestates
var end=0;
var play=1;
var gamestate;

//groups
var Mgroup;

function preload(){
  sword=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
    fruit2=loadImage("fruit2.png");
    fruit3=loadImage("fruit3.png");
    fruit4=loadImage("fruit4.png");
  monsterImage=loadImage("alien1.png");
  fruit11=loadImage("fruit1.png");
    fruit22=loadImage("fruit2.png");
    fruit33=loadImage("fruit3.png");
    fruit44=loadImage("fruit4.png");
  //swoosh=loadSound("KnifeSwooshSound.mp3")
  
 // game0ver=loadSound("gameover")
}

function setup(){ 
  createCanvas(500,500); 
knife=createSprite(250,250,20,20);
  knife.addImage(sword);
  knife.scale=0.7;
  NGroup=new Group();
Mgroup=new Group();
  Fgroup=new Group();
}



function draw(){
background("white")
  
 
  knife.x=World.mouseX;
  knife.y=World.mouseY;
  
  fruits();
  
  Fruit2();
    if(NGroup.isTouching(knife)){
      NGroup.destroyEach();
      score=score+1
      
  
}
  if(Fgroup.isTouching(knife)){
      Fgroup.destroyEach();
      score=score+1
      //swoosh.play();
    }
  if(Mgroup.isTouching(knife)){

    gamestate=END
  //  game0ver.play()
    
     }
  
  if(score > 3){
    fruit.velocityX=10
    FRUIT.velocityX=-10
  }
  
  if(score > 9){
    Mgroup.velocityX=-(10+(score/10));
  
  }
  
  monster()

  text(score,5,15)

  drawSprites();
}
function fruits(){
  
  if(World.frameCount%60===0){
  fruit=createSprite(-10,200,20,20)
    fruit.scale=0.2
    r=Math.round(random(1,4))
    if(r == 1){
      fruit.addImage(fruit1)
    } else if(r == 2){
      fruit.addImage(fruit2)
    } else if (r == 3){
      fruit.addImage(fruit3)
    } else if(r == 4){
      fruit.addImage(fruit4)
    }
fruit.y=Math.round(random(50,340));
    fruit.velocityX=7;
    fruit.setLifetime=100;
    NGroup.add(fruit)
  }
    
  
}//End of fruit

function Fruit2(){
  
  if(World.frameCount%60===0){
  FRUIT=createSprite(510,200,20,20)
    FRUIT.scale=0.2
    r=Math.round(random(1,4))
    if(r == 1){
      FRUIT.addImage(fruit11)
    } else if(r == 2){
      FRUIT.addImage(fruit22)
    } else if (r == 3){
      FRUIT.addImage(fruit33)
    } else if(r == 4){
      FRUIT.addImage(fruit44)
    }
    
    FRUIT.y=Math.round(random(50,340));
    FRUIT.velocityX=-7;
    FRUIT.setLifetime=100;
   Fgroup.add(FRUIT)
    
  }//end of if
  

}

function monster(){

  if(frameCount%200===0){
    var monster=createSprite(400,200,20,20)
    monster.addImage("moving", monsterImage)
    monster.Y=Math.round(random(100,300))
    monster.velocityX=-(8+(score/10));
    monster.setlifetime=50;
    Mgroup.add(monster)
  }
}

  
  
    
  

