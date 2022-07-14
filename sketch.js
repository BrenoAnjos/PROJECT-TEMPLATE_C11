var barco, barco1;
var mar, mar1;
function preload() {
  barco1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  mar1 = loadAnimation("sea.png")
}

function setup() {
  createCanvas(600, 500);

  //criando o mar
  mar = createSprite  (600, 300);
  mar.addAnimation("ruinning", mar1)
  mar.scale = 0.5;
  

  //criando o barco
  barco = createSprite(50, 200, 20, 50);
  barco.addAnimation("ruinning", barco1);
  edges = createEdgeSprites();

  //Adicionando escala e posição ao navio

  barco.scale = 0.25;
  barco.x = 90;
  barco.y = 300;
}

function draw() {
  background("blue");
  if (keyDown("right")) {
    barco.velocityX = 5;
  }
  if (keyDown("left")) {
    barco.velocityX = -5;
  }
  if (keyDown("space")) {
    barco.velocityX = 0;
  }
  mar.velocityX = -1;
  if (mar.x < 0) {
    mar.x = mar.width / 2;
  }
  //impedir que o barco caia
  barco.collide(edges[3])

  drawSprites();
}