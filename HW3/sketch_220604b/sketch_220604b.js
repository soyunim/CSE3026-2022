var friendly=10;
var happy=10;
var lonely=0;
var date=document.getElementById('dateCnt');
var day=1;
//pages
var mainpage=document.querySelector("#main");
var howTopage=document.querySelector("#howto");
var gamepage=document.querySelector("#game");
var resultpage=document.querySelector("#result");
var howto1=document.querySelector(".howto_");
var howto2=document.querySelector(".howto_2");
//btn
var startBtn=document.querySelector(".startBtn");
var howToBtn=document.querySelector(".howToBtn");
var startBtn2=document.querySelector(".startBtn2");
//imgs
var title_img=document.querySelector(".title_img");
var title_img2=document.querySelector(".title_img2");
var angryimg=document.querySelector(".angryimg");
var sadimg=document.querySelector(".sadimg");
var happyimg=document.querySelector(".happyimg");
var notimg=document.querySelector(".nothingimg")
//script
var script0=document.querySelector(".script0");
var script1=document.querySelector(".script1");
var script2=document.querySelector(".script2");
var script3=document.querySelector(".script3");
var script4=document.querySelector(".script4");
var script5=document.querySelector(".script5");
var script6=document.querySelector(".script6");
var script7=document.querySelector(".script7");
var script8=document.querySelector(".script8");
var script9=document.querySelector(".script9");
var script10=document.querySelector(".script10");
var script11=document.querySelector(".script11");
var result1=document.querySelector(".result1");
var result2=document.querySelector(".result2");
var result3=document.querySelector(".result3");
var result4=document.querySelector(".result4");
var eachResult1=document.querySelector(".eachresult1");
var eachResult2=document.querySelector(".eachresult2");
var eachResult3=document.querySelector(".eachresult3");
var eachResult4=document.querySelector(".eachresult4");
var resultSection1=document.querySelector(".resultSection1");
var resultSection2=document.querySelector(".resultSection2");
var resultSection3=document.querySelector(".resultSection3");
var resultSection4=document.querySelector(".resultSection4");
var resultSection5=document.querySelector(".resultSection5");

//element
var element1=document.querySelector(".element1");
var element2=document.querySelector(".element2");
var element3=document.querySelector(".element3");


function setup(){
}

function draw(){
    createCanvas(100,010);
}
function startGame(){
    mainpage.style.display="none";
    gamepage.style.display="block";
}
function howToPlay(){
    mainpage.style.display="none";
    howTopage.style.display="block";
}
function startGame2(){
    howTopage.style.display="none";
    gamepage.style.display="block";
}
//
function goScript1(){
    script0.style.display="none";
    script1.style.display="block";
}
function goResult1(){
    script1.style.display="none";
    result1.style.display="block";
    notimg.style.display="none";
    happyimg.style.display="block";
    if(friendly<10){
        var plusTd = element1.insertCell(-1);
        plusTd.innerHTML="<td></td>";
        friendly++;
    }
    if(happy<10){
        var plusTd2 = element2.insertCell(-1);
        plusTd2.innerHTML="<td></td>";
        happy++;
    }
    if(lonely!=0){
        element3.deleteCell(-1);
        lonely--;
    }
}
function goResult2(){
    script1.style.display="none";
    result2.style.display="block";
    notimg.style.display="none";
    angryimg.style.display="block";

    if(friendly>0){
        element1.deleteCell(-1);
        friendly--;
    }
}
function goResult3(){
    script1.style.display="none";
    result3.style.display="block";
    notimg.style.display="none";
    happyimg.style.display="block";

    if(friendly<10){
        var plusTd = element1.insertCell(-1);
        plusTd.innerHTML="<td></td>";
        friendly++;
    }
    if(lonely!=0){
        element3.deleteCell(-1);
        lonely--;
    }
}
function goResult4(){
    script1.style.display="none";
    result4.style.display="block";
    notimg.style.display="none";
    sadimg.style.display="block";

    if(happy>0){
        element2.deleteCell(-1);
        happy--;
    }
    if(lonely!=10){
        var plusTd3 = element3.insertCell(-1);
        plusTd3.innerHTML="<td></td>";
        lonely++;
    }
}

//
function nextDay(){
    angryimg.style.display="none";
    sadimg.style.display="none";
    happyimg.style.display="none";
    notimg.style.display="block";
    result1.style.display="none";
    result2.style.display="none";
    result3.style.display="none";
    result4.style.display="none";
    if(day==1){
        script2.style.display="block";
    }
    if(day==2){
        script3.style.display="block";
    }
    if(day==3){
        script4.style.display="block";
    }
    if(day==4){
        script5.style.display="block";
    }
    if(day==5){
        script6.style.display="block";
    }
    if(day==6){
        script7.style.display="block";
    }
    if(day==7){
        script8.style.display="block";
    }
    if(day==8){
        script9.style.display="block";
    }
    if(day==9){
        script10.style.display="block";
    }
    if(day==10){
        script11.style.display="block";
    }
}

//
function thisResult1(){
    notimg.style.display="none";
    angryimg.style.display="block";
    if(day==1){
        script2.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==2){
        script3.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==3){
        script4.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==4){
        script5.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==5){
        script6.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==6){
        script7.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==7){
        script8.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==8){
        script9.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==9){
        script10.style.display="none";
        eachResult1.style.display="block";
    }
    if(day==10){
        script11.style.display="none";
        eachResult1.style.display="block";
    }
    if(friendly>0){
        element1.deleteCell(-1);
        friendly--;
    }
    if(lonely!=10){
        var plusTd3 = element3.insertCell(-1);
        plusTd3.innerHTML="<td></td>";
        lonely++;
    }
}
function thisResult2(){
    notimg.style.display="none";
    happyimg.style.display="block";
    if(day==1){
        script2.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==2){
        script3.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==3){
        script4.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==4){
        script5.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==5){
        script6.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==6){
        script7.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==7){
        script8.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==8){
        script9.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==9){
        script10.style.display="none";
        eachResult2.style.display="block";
    }
    if(day==10){
        script11.style.display="none";
        eachResult2.style.display="block";
    }
    if(happy<10){
        var plusTd = element2.insertCell(-1);
        plusTd.innerHTML="<td></td>";
        happy++;
    }
}
function thisResult3(){
    notimg.style.display="none";
    happyimg.style.display="block";
    if(day==1){
        script2.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==2){
        script3.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==3){
        script4.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==4){
        script5.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==5){
        script6.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==6){
        script7.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==7){
        script8.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==8){
        script9.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==9){
        script10.style.display="none";
        eachResult3.style.display="block";
    }
    if(day==10){
        script11.style.display="none";
        eachResult3.style.display="block";
    }
    if(friendly<10){
        var plusTd = element1.insertCell(-1);
        plusTd.innerHTML="<td></td>";
        friendly++;
    }
    if(lonely!=0){
        element3.deleteCell(-1);
        lonely--;
    }
}
function thisResult4(){
    notimg.style.display="none";
    sadimg.style.display="block";
    if(day==1){
        script2.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==2){
        script3.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==3){
        script4.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==4){
        script5.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==5){
        script6.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==6){
        script7.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==7){
        script8.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==8){
        script9.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==9){
        script10.style.display="none";
        eachResult4.style.display="block";
    }
    if(day==10){
        script11.style.display="none";
        eachResult4.style.display="block";
    }
    //친밀감-1, 행복함-1, 외로움+1

    if(friendly>0){
        element1.deleteCell(-1);
        friendly--;
    }
    if(happy>0){
        element2.deleteCell(-1);
        happy--;
    }
    if(lonely!=10){
        var plusTd3 = element3.insertCell(-1);
        plusTd3.innerHTML="<td></td>";
        lonely++;
    }
}
function backScript1(){
    angryimg.style.display="none";
    sadimg.style.display="none";
    happyimg.style.display="none";
    notimg.style.display="block";
    eachResult1.style.display="none";
    eachResult2.style.display="none";
    eachResult3.style.display="none";
    eachResult4.style.display="none";
    script1.style.display="block";
    day++;
    date.innerHTML=day;
    if(day==11){
        gamepage.style.display="none";
        resultpage.style.display="block";
        console.log(friendly);
        console.log(happy);
        console.log(lonely);
        if(friendly+happy<=5){
            if(lonely<3){
                resultSection3.style.display="block";
            }
            else if(lonely>=3 && lonely<5){
                resultSection3.style.display="block";
            }
            else if(lonely>=5 && lonely<8){
                resultSection1.style.display="block";
            }
            else if(lonely>=8){
                resultSection1.style.display="block";
            }
        }
        else if(friendly+happy<=10&&friendly+happy>5){
            if(lonely<3){
                resultSection3.style.display="block";
            }
            else if(lonely>=3 && lonely<5){
                resultSection3.style.display="block";
            }
            else if(lonely>=5 && lonely<8){
                resultSection2.style.display="block";
            }
            else if(lonely>=8){
                resultSection2.style.display="block";
            }
        }
        else if(friendly+happy>10 && friendly+happy<=15){
            if(lonely<3){
                resultSection4.style.display="block";
            }
            else if(lonely>=3 && lonely<5){
                resultSection3.style.display="block";
            }
            else if(lonely>=5 && lonely<8){
                resultSection2.style.display="block";
            }
            else if(lonely>=8){
                resultSection2.style.display="block";
            }
        }
        else if(friendly+happy>15){
            if(lonely<3){
                resultSection5.style.display="block";
            }
            else if(lonely>=3 && lonely<5){
                resultSection4.style.display="block";
            }
            else if(lonely>=5 && lonely<8){
                resultSection3.style.display="block";
            }
            else if(lonely>=8){
                resultSection3.style.display="block";
            }
        }
    }

}
function re(){
    resultpage.style.display="none";
    mainpage.style.display="block";
    day=1;
    date.innerHTML=day;
    while(friendly<10){
        var plusTd = element1.insertCell(-1);
        plusTd.innerHTML="<td></td>";
        friendly++;
    }
    while(happy<10){
        var plusTd2 = element2.insertCell(-1);
        plusTd2.innerHTML="<td></td>";
        happy++;
    }
    while(lonely>0){
        element3.deleteCell(-1);
        lonely--;
    }
}

function howtoNext(){
    howto1.style.display="none";
    howto2.style.display="block";
}
