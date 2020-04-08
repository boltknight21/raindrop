var sun,earth
var sun_img, earth_img
var angleSpeed = 0.2;
var angle = 0;
var sun_radius;

function preload(){
sun_img = loadImage("sun.jpg");
earth_img = loadImage("planet1.png");

}



function setup() {
  createCanvas(800,800);

  sun = createSprite(200,180,100,100);
 sun.addImage("sun",sun_img);
 sun.setCollider("circle",-85,-65,120);
  sun.debug=true;

  earth = createSprite(170,120,10,10);
  earth.addImage("earth",earth_img);
  earth.setCollider("circle",0,0,180);
 earth.debug=true;




earth.rotateToDirection=true;
earth.velocityX = 3;
}

function draw() {
  
 background(5,5,20); 
 earth.rotation = earth.rotation + 2

angleMode(DEGREES);
 translate(width/2,height/2);
 rotate(angle);
 angle = angle+angleSpeed;
 
 if(frameCount%1===0){
   sun.scale=sun.scale+0.001;
 }
 drawSprites();

}

