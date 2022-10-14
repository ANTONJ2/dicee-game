var randnum=Math.floor(Math.random()*6+1);
var randdice="dice"+randnum+".png";
var randomImageSource="images/"+randdice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var image2=document.querySelectorAll("img")[1];
var randomnumber2=(Math.floor(Math.random()*6+1));
var randdice2="dice"+randomnumber2+".png";
var randomImageSource2="images/"+randdice2;
image2.setAttribute("src", randomImageSource2)

if (randdice >randdice2){
    
    document.querySelector("h1").innerHTML="🚩 Player 1 wins"

}else if(randdice2>randdice){
    document.querySelector("h1").innerHTML="🚩 Player 2 wins"
}else{
    document.querySelector("h1").innerHTML="📍Draw📍"
}