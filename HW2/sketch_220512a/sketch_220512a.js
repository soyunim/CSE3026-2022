let table, img;
let number, univ, campus, region, extend;
let numC;
var circle;
let circles=[];
let ellies=[];
var a1=[];
var b1=[];
var c1=[];
var d1=[];
var protection = 0;
let all, incheon, seoul, gyeonggi, gangwon, daejeon, daegu, busan, ulsan, gwangju, chungcheong, gyeongsang, jeolla;


function preload() {
  table = loadTable('data/univ.csv', 'csv', 'header');
  img = createImg('data/univer.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  img.position(145,280);
  img.size(100,100);
  number = table.getColumn('number');
  univ = table.getColumn('university');
  campus = table.getColumn('campus');
  region = table.getColumn('region');
  extend = table.getColumn('extend');
  numC=extend.length;
  
  changeBG();
  
  all= createButton('전국');
  all.position(175, 220);
  all.mousePressed(changeBG);

  seoul= createButton('서울');
  seoul.position(100, 130);
  seoul.mousePressed(changeBG1);
  
  gyeonggi= createButton('경기');
  gyeonggi.position(100, 160);
  gyeonggi.mousePressed(changeBG2);
  
  incheon= createButton('경기');
  incheon.position(100, 190);
  incheon.mousePressed(changeBG3);
  
  gangwon= createButton('강원');
  gangwon.position(150, 130);
  gangwon.mousePressed(changeBG4);
  
  daegu= createButton('대구');
  daegu.position(150, 160);
  daegu.mousePressed(changeBG5);
  
  daejeon= createButton('대전');
  daejeon.position(150, 190);
  daejeon.mousePressed(changeBG6);
  
  gwangju= createButton('광주');
  gwangju.position(200, 130);
  gwangju.mousePressed(changeBG7);
  
  busan= createButton('부산');
  busan.position(200, 160);
  busan.mousePressed(changeBG8);
  
  ulsan= createButton('울산');
  ulsan.position(200, 190);
  ulsan.mousePressed(changeBG9);
  
  chungcheong= createButton('충청');
  chungcheong.position(250, 130);
  chungcheong.mousePressed(changeBG10);
  
  gyeongsang= createButton('경상');
  gyeongsang.position(250, 160);
  gyeongsang.mousePressed(changeBG11);
  
  jeolla= createButton('전라');
  jeolla.position(250, 190);
  jeolla.mousePressed(changeBG12);
}


function changeBG(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
  }
}

function changeBG1(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='seoul'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='seoul'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}

function changeBG2(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
    circle = {
      x: random(400,width-100),
      y: random(100,height-100),
      r: sqrt(extend[circles.length]/2000)
    }
      
    var overlapping = false;
      for (let j = 0; j < circles.length; j++) {
        if(region[j]=='gyeonggi'){
        var other = circles[j];
        var d = dist(circle.x, circle.y, other.x, other.y);
        if (d < circle.r + other.r) {
          overlapping = true;
        }
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='gyeonggi'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}

function changeBG3(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='incheon'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='incheon'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}

function changeBG4(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
    circle = {
      x: random(400,width-100),
      y: random(100,height-100),
      r: sqrt(extend[circles.length]/2000)
    }
      
    var overlapping = false;
      for (let j = 0; j < circles.length; j++) {
        if(region[j]=='gangwon'){
        var other = circles[j];
        var d = dist(circle.x, circle.y, other.x, other.y);
        if (d < circle.r + other.r) {
          overlapping = true;
        }
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='gangwon'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}

function changeBG5(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
    circle = {
      x: random(400,width-100),
      y: random(100,height-100),
      r: sqrt(extend[circles.length]/2000)
    }
      
    var overlapping = false;
      for (let j = 0; j < circles.length; j++) {
        if(region[j]=='daegu'){
        var other = circles[j];
        var d = dist(circle.x, circle.y, other.x, other.y);
        if (d < circle.r + other.r) {
          overlapping = true;
        }
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='daegu'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}

function changeBG6(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
    circle = {
      x: random(400,width-100),
      y: random(100,height-100),
      r: sqrt(extend[circles.length]/2000)
    }
      
    var overlapping = false;
      for (let j = 0; j < circles.length; j++) {
        if(region[j]=='daejeon'){
        var other = circles[j];
        var d = dist(circle.x, circle.y, other.x, other.y);
        if (d < circle.r + other.r) {
          overlapping = true;
        }
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='daejeon'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}


function changeBG7(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='gwangju'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='gwangju'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}


function changeBG8(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='busan'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='busan'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}


function changeBG9(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='ulsan'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='ulsan'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}


function changeBG10(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='chungcheong'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='chungcheong'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}

function changeBG11(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='gyeongsang'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='gyeongsang'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}


function changeBG12(){
  noStroke();
  fill(255);
  rect(350, 0, 400+(width-100), height);
  ellipseMode(CENTER);

  while (circles.length < numC) {
      circle = {
        x: random(400,width-100),
        y: random(100,height-100),
        r: sqrt(extend[circles.length]/2000)
      }
      
    var overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      if(region[j]=='jeolla'){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  for (let i = 0; i < circles.length; i++) {
    if(region[i]=='jeolla'){
      fill(random(255), random(255), random(255), 200);
      stroke(1);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 1.5, circles[i].r * 1.5);
      ellies[i]={a: circles[i].x, b: circles[i].y, c: circles[i].r * 1.5, d: circles[i].r * 1.5};
      a1[i]= ellies[i].a;
      b1[i]= ellies[i].b;
      c1[i]= ellies[i].c;
      d1[i]= ellies[i].d;
    }
  }
}



function draw(){
  noStroke();
  fill(255);
  rect(50, 200, 300, 600);
  for(let i=0; i<numC; i++){
    if((a1[i]-c1[i]/2<=mouseX)&&(a1[i]+c1[i]/2>=mouseX)&&(b1[i]-c1[i]/2<=mouseY) && (b1[i]+c1[i]/2>=mouseY)){
      fill(0,0,0);
      noStroke();
      textAlign(CENTER);
      textSize(20);
      text('전체 대학면적 중 '+number[i]+'위',195,430);
      textAlign(CENTER);
      textSize(25);
      text(univ[i],195,455);
      textAlign(CENTER);
      textSize(16);
      text(campus[i],195,475);
      textAlign(CENTER);
      textSize(30);
      text(extend[i]+'㎡',195,505);
    }
  }
}
