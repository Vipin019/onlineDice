var x;
var count=0;
var xcount=0;
// document.getElementById("dice").addEventListener("click", mainFunction);
document.getElementById("container").addEventListener("click", mainFunction);

function mainFunction(){
    x = 1+Math.floor(6*Math.random());

if(x===1){
    document.getElementById("one").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("two").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("three").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("four").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("five").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("six").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("zero").style.backgroundColor="white";
    
}
else if(x===2){
    document.getElementById("one").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("four").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("five").style.backgroundColor="white";
    document.getElementById("six").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("zero").style.backgroundColor="rgb(200, 7, 7)";
    
}
else if(x===3){
    document.getElementById("one").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("four").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("five").style.backgroundColor="white";
    document.getElementById("six").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("zero").style.backgroundColor="white";
    
}
else if(x===4){
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("four").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("five").style.backgroundColor="white";
    document.getElementById("six").style.backgroundColor="white";
    document.getElementById("zero").style.backgroundColor="rgb(200, 7, 7)";
    
}
else if(x===5){
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("four").style.backgroundColor="rgb(200, 7, 7)";
    document.getElementById("five").style.backgroundColor="white";
    document.getElementById("six").style.backgroundColor="white";
    document.getElementById("zero").style.backgroundColor="white";
}
else if(x===6){
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="white";
    document.getElementById("six").style.backgroundColor="white";
    document.getElementById("zero").style.backgroundColor="rgb(200, 7, 7)";
}
document.getElementById("result").querySelector("p").innerHTML="You Have "+x+" Now!";
// document.getElementById("result").querySelector("p").style.fontSize="80px";
document.getElementById("result").style.marginTop="7rem";
count++;
document.getElementById("count").querySelector("p").innerHTML="You have thrown total "+count+" times."
xcount+=x;
document.getElementById("xcount").querySelector("p").innerHTML="You have total "+xcount+" ."

}
var y=0;
document.getElementById("flexSwitchCheckDefault").addEventListener("click", mode);
function mode(){
  if(y===0){
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb(1, 1, 30)";
    document.getElementsByTagName("Nav")[0].style.backgroundColor="black";
    document.querySelector(".form-check-label").innerHTML="Switch to light mode";
    document.getElementById("count").style.color="white";
    document.getElementById("xcount").style.color="white";
      y=1;
  }
  else{
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb(251, 242, 192)";
    document.getElementsByTagName("Nav")[0].style.backgroundColor="rgb(67, 66, 67)";
    document.querySelector(".form-check-label").innerHTML="Switch to dark mode";
    document.getElementById("count").style.color="black";
    document.getElementById("xcount").style.color="black";
      y=0;
  }
}