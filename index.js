var randnum1 = Math.floor((Math.random()*6) + 1); // number 1-6
var randnum2 = Math.floor((Math.random()*6) + 1);

var randimg1 = "dice"+randnum1+".svg";  // dice 1-6 image
var randimg2 = "dice"+randnum2+".svg";


var randimgsrc1 = "images/"+randimg1;
var randimgsrc2 = "images/"+randimg2;

document.querySelectorAll("img")[0].setAttribute("src", randimgsrc1)
document.querySelectorAll("img")[1].setAttribute("src", randimgsrc2)



// winner 

if (randnum1 > randnum2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randnum2 > randnum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
}