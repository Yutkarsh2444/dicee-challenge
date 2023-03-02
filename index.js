var a = Math.floor(Math.random() * 6)+1;
var b = "images/dice" + a + ".png"

var c = document.querySelectorAll('img')[0];

c.setAttribute('src',b);

var e = Math.floor(Math.random() * 6)+1;
var b = "images/dice" + e + ".png"

var c = document.querySelectorAll('img')[1];

c.setAttribute('src',b);

if (a<e)
{
    document.getElementById('text').innerHTML="🚩Player 2 Wins!";
}
else if(a == e){
    document.getElementById('text').innerHTML="Draw!";
}
else{
    document.getElementById('text').innerHTML="🚩Player 1 Win!";
}