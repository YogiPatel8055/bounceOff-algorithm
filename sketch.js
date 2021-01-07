var fixrect, movingrect;
function setup() {
createCanvas(1200,800);
fixrect=createSprite(400,100, 90, 50);
fixrect.shapeColor="green";
fixrect.debug=true;
fixrect.velocityY=5;

movingrect=createSprite(400,800,50,90);
movingrect.shapeColor="green";
movingrect.debug=true;
movingrect.velocityY=-5;

}

function draw() {
  background(0);  

  //movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;



  if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2&&
    fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2
    ){
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixrect.velocityX=fixrect.velocityX*(-1);
    }
    if(movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2&&
      fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2){
      movingrect.velocityY=movingrect.velocityY*(-1);
      fixrect.velocityY=fixrect.velocityY*(-1);
      }
  drawSprites();
}