//pages
const mainpage=document.querySelector("#main");
const howTopage=document.querySelector("#howto");
const gamepage=document.querySelector("#game");
const resultpage=document.querySelector("#result");
//imgs
const title_img=document.querySelector(".title_img");
const title_img2=document.querySelector(".title_img2");
//btns
const main_btn=document.querySelector(".startBtn");
const main_btn2=document.querySelector(".howToBtn");


function setup() {
}
function mouseClicked(){
    console.log(mouseX, mouseY);
}

//change page
function begin(){
    mainpage.style.display="none";
    gamepage.style.display="block";
}
function begin2(){
    howTopage.style.display="none";
    gamepage.style.display="block";
}
function howToPlay(){
    mainpage.style.display="none";
    howTopage.style.display="block";
}

//for start page
function draw() {
    if((mouseX>599&&mouseY>-201&&mouseX<790&&mouseY<-153)||(mouseX>599&&mouseY>-144&&mouseX<790&&mouseY<-96)){
        title_img.style.display="none";
        title_img2.style.display="block";
    }
    else{
        title_img2.style.display="none";
        title_img.style.display="block";
    }
}

//game page
 //요소마다 idx는 0~10
 //요소가 0인데 마이너스면 그냥 0
 //요소가 10인데 플러스면 그냥 10
 //요소는 ul,li로 10개 만들고, 
 //+일 때 idx+1번째 색깔이 X면 idx+1번째 색깔을 바꾸고 idx++
 //-일 때 idx-1번째 색깔이 O면 idx-1번째 색깔을 없애고 idx--

 //day+cnt로 날짜 표시
 //cnt는 1부터 시작,
 //화면 전환 시마다 cnt++
