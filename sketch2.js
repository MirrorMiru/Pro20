var bg, tom, jerry


function preload() {
    //load the images here
    bg = loadImage("garden.png")
    cata1 = loadAnimation("cat1.png")
    mousea1 = loadAnimation("mouse1.png")
    cata2 = loadAnimation("cat2.png","cat3.png")
    mousea2 = loadAnimation("mouse2.png","mouse3.png")
    cata3 = loadAnimation("cat4.png")
    mousea3 = loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(840,700,1,1)
    tom.addAnimation("cat",cata1)
    tom.scale = 0.15
    jerry = createSprite(260,700,1,1)
    jerry.addAnimation("mouse",mousea1)
    jerry.scale = 0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width/2 - jerry.width/2)+80   ){
      tom.velocityX = 0
      jerry.velocityX = 0
      tom.addAnimation("done",cata3)
      tom.changeAnimation("done")
      jerry.addAnimation("fin",mousea3)
      jerry.changeAnimation("fin")
      }
     else{
         if(keyCode === 0){
        jerry.changeAnimation("mouse")
         }
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("mouset",mousea2)
      jerry.changeAnimation("mouset")
      jerry.frameDelay = 25
      tom.addAnimation("catm",cata2)
      tom.changeAnimation("catm")
      tom.frameDelay = 25
      tom.velocityX = -2
  }


}
