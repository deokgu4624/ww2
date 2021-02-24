var circle = document.getElementById("whitecircle");
var redbox = document.getElementById("redbox");
var title = document.getElementById("title");
var x = 1;

circle.addEventListener("click", forward);
title.addEventListener("click", back);

function forward(){
    redbox.style.animationName = "redbox"+x;
    redbox.style.animationPlayState = "paused";
    setTimeout(running, 1000);
    x+=1;
    console.log(x);
}

function back(){
    x-=1;
    redbox.style.animationName = "redbox"+"-"+x;
    redbox.style.animationPlayState = "paused";
    setTimeout(running, 1000);
    
    console.log(x);
}
function running(){
    redbox.style.animationPlayState = "running";
}

// //랜덤 이미지
// var front_image = document.getElementsByClassName("front-image");
// var i;
// var j;
// var num = [];
// for(i=0; i<front_image.length; i++){
//     num[i] = Math.floor(Math.random()*front_image.length)+1;
//     console.log(num);
//     front_image[i].id = "front-image"+num[i];
//     for(j=0; j<num.length-1; j++){
//         console.log("j"+j);
//         if(num[i]===num[j]){
//             console.log("same");
//             num.pop();
//             i--;
//         }
//     }
// }
// //이미지 이동
// var targetPos;
// function moveleft(){    
//     for(i=0; i<front_image.length; i++){
//         var targetPos = front_image[i].getBoundingClientRect().left;
//         targetPos -= 1;
//         front_image[i].style.left = (targetPos/window.innerWidth)*100 + "vw";
//         if((targetPos/window.innerWidth)*100<-320){
//             front_image[i].style.left = 100 + "vw";
//         }
//     }
//     console.log(front_image[0].getBoundingClientRect().left)
// }

// setInterval(moveleft, 1000/10);


// var t;
// var l;
// var result;
// var _result;
// for(t = 0; t<3; t++){
//     result = Math.floor(Math.random()*10)+1;
//     // console.log("Top:"+result+"vw");
//     if(Math.sqrt(Math.pow(result-_result, 2))<5){
//         t--;
//     }else{
//         front_image[t].style.top = result + "vw";
//         _result = result;
//         // console.log(result);
//     }
// }

// for(l = 0; l<3; l++){
//     result = Math.floor(Math.random()*100)+1;
//     console.log("Left:"+result+"vw");
//     if(Math.sqrt(Math.pow(result-_result, 2))<20){
//         l--;
//     }else{
//         front_image[l].style.left = result + "vw";
//         _result = result;
//         console.log(result);
//     }
// }



