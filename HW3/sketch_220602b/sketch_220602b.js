let font;
let cat, cat2, cat3;
function preload(){
  font = loadFont("data/neodgm.ttf");
}
function setup() {
  let main = createCanvas(1200,800);
  main.parent('item');
  background(255,200,0,100);
  cat = loadImage("data/cat1.png");
  cat2 = loadImage("data/cat1-1.png");
  
}


function startGame(){
  console.log('start game');
  fill(255,100,100);
  rect(0,0,1200,800);
}
function howToPlay(){
  console.log('how to play?');
}


function mouseClicked() {
  if (mouseX > 500 && mouseY > 590 && mouseX < 700 && mouseY < 640){
    startGame();
  }
  if (mouseX > 500 && mouseY > 660 && mouseX < 700 && mouseY < 710){
    howToPlay();
  }
}


function draw() {
  imageMode(CENTER);
  image(cat, 600, 380, 500, 350);
  
  fill(50);
  mouseOn = false;
  
  textAlign(CENTER);
  textFont(font);
  textSize(100);
  text("찌짐이 키우기", 600, 160);
  
  if (mouseX > 500 && mouseY > 590 && mouseX < 700 && mouseY < 640) {
    mouseOn = true;
    fill(255, 150, 0);
    cursor(HAND);
    image(cat2, 600, 380, 500, 350);
  }else{
    fill(50);
    cursor(ARROW);
  }
  textSize(50);
  text("게임시작", 600, 630);
  
  if (mouseX > 500 && mouseY > 660 && mouseX < 700 && mouseY < 710) {
    mouseOn = true;
    fill(255, 150, 0);
    cursor(HAND);
    image(cat2, 600, 380, 500, 350);
  }else{
    fill(50);
  }
  textSize(50);
  text("게임방법", 600, 700);
}
