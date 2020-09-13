var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = createSprite(400, 200, 50, 50);
    speed = random(55,90);

  weight = createSprite();
    weight = random(400,1500);

  car = createSprite(50,200,50,50);
  //car.velocityX = speed;
  car.shapeColor = "pink";
    
  wall = createSprite(1500,200,60,height/2);
  wall.color(80,80,80);

}

function draw() {
  background(0,0,0);  

/*if(car.isTouching(wall)) {
   car.shapeColor = color(215,0,0);
  }
  else {
   car.shapeColor = color(154,109,106);
  }*/

  if(wall.x - car.x < (car.width+wall.width)) {
    car.velocityX = 0;
    var deformation= 0.5 * weight * speed * speed/22509;
 
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