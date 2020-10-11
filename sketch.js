var ground,box;

function setup() {
  createCanvas(1200,400);
}

  box1 = new Box(330,320,70,70);
  box2 = new Box(360,320,70,70);
  box3 = new Box(390,320,70,70);
  box4 = new Box(420,320,70,70);
  box5 = new Box(450,320,70,70);

  box6 = new Box(360,320,70,70);
  box7 = new Box(390,320,70,70);
  box8 = new Box(420,320,70,70);

  box9 = new Box(390,320,70,70);
  



function draw() {
  background("blue");  
  drawSprites();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
}