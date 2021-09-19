var tom,tom1Img,tom2Img,tom3Img,tom4Img;
var jerry,jerry1Img,jerry2Img,jerry3Img,jerry4Img;
var garden,gardenImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload() {
    tom1Img = loadAnimation("Imágenes/tomOne.png");
    tom2Img = loadAnimation ("Imágenes/tomTwo.png");
    tom3Img = loadAnimation ("Imágenes/tomThree.png");
    tom4Img = loadAnimation ("Imágenes/tomFour.png");
    jerry1Img = loadAnimation ("Imágenes/jerryOne.png");
    jerry2Img = loadAnimation ("Imágenes/jerryTwo.png");
    jerry3Img = loadAnimation ("Imágenes/jerryThree.png");
    jerry4Img = loadAnimation ("Imágenes/jerryFour.png");
    gardenImg = loadImage ("Imágenes/garden.png");

}

function setup(){
createCanvas(1000,800);
tom = createSprite(850,600);
tom.addAnimation("gatoSentado",tom1Img);
tom.scale = 0.2

jerry = createSprite(250,600);
jerry.addAnimation("jerryQueso",jerry1Img);
jerry.scale = 0.2
}

function draw() {
background(gardenImg);
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX=0
    tom.addAnimation("UltimaImgenGato",tom3Img);
    tom.changeAnimation("UltimaImagenGato");
    tom.x=300;
    tom.scale=0.2;

}
  drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        jerry.addAnimation("ratonMolestando",jerry2Img);
        jerry.changeAnimation("ratonMolestando");
        jerry.frameDelay = 25;

        tom.velocityX = -5;
        tom.addAnimation("gatoCaminando",tom2Img);
        tom.changeAnimation("gatoCaminando");
    
    }

    if(keyCode === RIGHT_ARROW){
      jerry.addAnimation("ratonlupa",jerry4Img);
      jerry.changeAnimation("ratonlupa");
      jerry.frameDelay = 25;

      tom.velocityX = 0;
      tom.addAnimation("gatoParado",tom4Img);
      tom.changeAnimation("gatoParado");
  

    

}

if(keyCode === UP_ARROW){
  jerry.addAnimation("ratonMolestando2",jerry3Img);
  jerry.changeAnimation("ratonMolestando2");
  jerry.frameDelay = 25;

  tom.velocityX = -5;
  tom.addAnimation("gatoCaminando2",tom3Img);
  tom.changeAnimation("gatoCaminando2");




}
}

