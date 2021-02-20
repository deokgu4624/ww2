//랜덤 이미지 배치
var front_image = document.getElementsByClassName("front-image");
var i;
var j;
var num = [];
for(i=0; i<front_image.length; i++){
    num[i] = Math.floor(Math.random()*7)+1;
    console.log(num);
    front_image[i].id = "front-image"+num[i];
    for(j=0; j<num.length-1; j++){
        console.log("j"+j);
        if(num[i]===num[j]){
            console.log("same");
            num.pop();
            i--;
        }
    }
}


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



