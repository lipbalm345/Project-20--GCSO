var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = createSprite(2500,14);
    speed = random(223,321);

  weight = createSprite(2500,14);
    weight = random(30,52);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "pink";
    
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0,0,0);  

/*if(car.isTouching(wall)) {
   car.shapeColor = color(215,0,0);
  }
  else {
   car.shapeColor = color(154,109,106);
  }*/

  if(wall.x - car.x < (car.width + wall.width)) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
 
    if(deformation > 180) {
    car.shapeColor = color(255,0,0);
}
  if(deformation < 180 && deformation > 100) {
  car.shapeColor = color(230,230,0);
}
  if(deformation < 100) {
  car.shapeColor = color(0,255,0);
}
  }

  drawSprites();
}