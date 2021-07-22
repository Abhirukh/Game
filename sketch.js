var  sea,ship, ship_moving;
var seaImage;
var shipImage;


function preload(){
  shipImage= loadAnimation("ship-1.png","ship-2.png");
 
  seaImage = loadImage("sea.png")
  
}

function setup(){
  createCanvas(600,600);
  
  // creating trex
 
 
  
  //adding scale and position to ship
 
  
  
    
  sea= createSprite(200,180,900,20);
  sea.addImage(seaImage)

  ship = createSprite(160,260,20,50);

  ship.addAnimation("moving",shipImage);
  ship.scale = 0.4;
}


function draw(){
  //set background color 
  background("white");
  //logging the y position of the ship
  console.log(sea.y)
  
  //jump when space key is pressed
  
  
  if(sea.x<0){
    sea.x=sea.width/2

  }
  sea.velocityX= -4;
 
  
 
 
  

  drawSprites();
}
