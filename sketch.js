// Insert global (can be used in all functions) variables here


var gameState = 0;

var bgImg;
var bg;

var bin;

var waste;
var bananaImg;
var appleImg;
var pizzaImg;
var cardboardImg;



var wasteBinImg;
var recycleBinImg;
var compostBinImg;
var softPlasticsBinImg;


function preload(){

   bgImg = loadImage("assets/jungle.png");

   wasteBinImg = loadImage("assets/wasteBin.png");
   recycleBinImg = loadImage("assets/recycleBin.png");
   compostBinImg = loadImage("assets/compostBin.png")
   softPlasticsBinImg = loadImage("assets/softPlasticsBin.png")

   bananaImg = loadImage("assets/banana.png")
   appleImg = loadImage("assets/apple.png")
   pizzaImg = loadImage("assets/pizza.png")
   cardboardImg = loadImage("assets/cardboard.png")


}

function setup(){
    createCanvas(1690, 840);

    

    bin = createSprite(820, 600, 50, 50);
    bin.addImage(wasteBinImg);
    bin.scale = 0.2;
    bin.x = World.mouseX


    

}

function draw(){
    image(bgImg, 0, 0, width, height);

    bin.x = World.mouseX
    
    spawnWaste();

    elimination();

    if(bin !== undefined){
    
    if(keyDown("1")){

        bin.addImage(wasteBinImg)


    }

    if(keyDown("2")){

        bin.addImage(recycleBinImg)


    }

    if(keyDown("3")){

        bin.addImage(compostBinImg)



    }

    if(keyDown("4")){

        bin.addImage(softPlasticsBinImg)


    }

}


    

    drawSprites(); // To display sprites
}

function spawnWaste(){

if(World.frameCount % 100 == 0){

    waste = createSprite(800,100,50,50)
    waste.velocityY = 4
    waste.scale = 0.5
    waste.lifetime = 180;

    var randomNumber = Math.round(random(1, 4))
    var randomNumberPosition = Math.round(random(100, 1590))

    switch(randomNumber){

        case 1: waste.addImage(bananaImg);
                waste.x = randomNumberPosition;
                break;

        case 2: waste.addImage(appleImg);
                waste.x = randomNumberPosition;
                break;

        case 3: waste.addImage(pizzaImg);
                waste.scale = 0.1
                waste.x = randomNumberPosition;
                break;

        case 4: waste.addImage(cardboardImg);
                waste.x = randomNumberPosition;
                break;

    }
}


}

function elimination(){

    var wasteBarrier;
    var recycleBarrier;
    var compostBarrier;
    var softPlasticsBarrier;

    wasteBarrier = createSprite(bin.x, 500, 100, 100)



}