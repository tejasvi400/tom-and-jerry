var cat, catRunning , cat_collided;
var rat , ratImage;
var garden, gardenImage;


function preload() {
    //load the images here
    catImage=loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomeFour.png");
    ratImage=loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
    gardenImage=loadAnimation("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites herese
    cat=createSprite(300,400,10,10);//
    cat.addAimation("cat",catImage);

    rat.createSprite(550,350,10,10);
    rat.addAimation("rat",ratImage);
    

}

function draw() {
    background("black");
    //Write condition here to evalute if tom and jerry collide
    
           
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat",catImage);
}

}
