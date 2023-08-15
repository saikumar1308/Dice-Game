var randomNumber1 = Math.floor((Math.random()*6))+1;
if(randomNumber1===1){
    var n="images/dice1.png";
}else if(randomNumber1===2){
    var n ="images/dice2.png";
}else if(randomNumber1===3){
    var n="images/dice3.png";
}else if(randomNumber1===4){
    var n="images/dice4.png";
}else if(randomNumber1===5){
    var n="images/dice5.png";
}else{
    var n="images/dice6.png";
}
document.querySelector("img").setAttribute("src",n);
var randomNumber2 = Math.floor((Math.random()*6))+1;
if(randomNumber2===1){
    var m="images/dice1.png";
}else if(randomNumber2===2){
    var m ="images/dice2.png";
}else if(randomNumber2===3){
    var m="images/dice3.png";
}else if(randomNumber2===4){
    var m="images/dice4.png";
}else if(randomNumber2===5){
    var m="images/dice5.png";
}else{
    var m="images/dice6.png";
}
document.querySelector(".img2").setAttribute("src",m);

if(n>m){
    var k="player 1 is the winner";
}else if(m>n){
    var k="player 2 is the winner";
}else{
    var k="Draw!!!!"
}

document.querySelector("h1").innerHTML=k;
