var box;

function setup() {
  createCanvas(600,200);
  box = createSprite(100, 150, 30, 50);
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyDown('D')) {
    box.x += 6;
  }
  else if (keyDown('A')) {
    box.x -= 6;
  }
}




