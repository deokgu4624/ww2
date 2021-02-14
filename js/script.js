var front_image = document.getElementsByClassName("front-image");

var t;
var l;
var result;
var _result;
for(t = 0; t<3; t++){
    result = Math.floor(Math.random()*10)+1;
    // console.log("Top:"+result+"vw");
    if(Math.sqrt(Math.pow(result-_result, 2))<5){
        t--;
    }else{
        front_image[t].style.top = result + "vw";
        _result = result;
        // console.log(result);
    }
}

for(l = 0; l<3; l++){
    result = Math.floor(Math.random()*100)+1;
    console.log("Left:"+result+"vw");
    if(Math.sqrt(Math.pow(result-_result, 2))<20){
        l--;
    }else{
        front_image[l].style.left = result + "vw";
        _result = result;
        console.log(result);
    }
}


