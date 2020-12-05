var car,wall ; 
var speed,weight ; 

function setup() {
createCanvas(800,400);
 


  speed=random(55,90);
  weight=random(400,1500);

 car =  createSprite(50,200,50,50);
 car.shapeColor="orange"
 wall = createSprite(400,200,20,120);
 wall.shapeColor = "red";
}


function draw() {
  background("white");  

  car.velocityX = speed ; 

  if(wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car.shapeColor = "green";
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = "blue";
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = "purple";
      }
    } 
  drawSprites();
}