//first
function appear(){
	TweenMax.to("#like", 1, {opacity: "1", ease: Strong.easeInOut});
	document.getElementById("bitch").style.cssText = "opacity:0 !important;"
	setTimeout(function(){document.getElementById("bitch").style.cssText = "opacity:1 !important"}, 1500);
	setTimeout(function(){document.getElementById("bitch").style.cssText = "opacity:0 !important"}, 1800);
}

var pineapples = document.getElementsByClassName("pineappleText");

TweenMax.staggerFrom(pineapples, 1, {opacity: "0", transform: "translateX(500px)", ease: Back.easeInOut}, .02);

setTimeout(appear, 1500);

var shit = document.getElementsByClassName("pineapple")
var k={
	value: 0
};

function lol(k){
	if (k.value >= shit.length){
		clearInterval(myVar);
	}
	else{
		shit[k.value].classList.add("animate");
		k.value++;
	}
}
var myVar = setInterval(lol, 20, k);

//second

var wong = document.getElementById("wong"); //add flash to wong!
function addFlash(wong){
	setTimeout(flash, 2, wong);
}

function flash(wong){
	wong.classList.add("flash");
}

var balls = document.getElementsByClassName("ball");

function moveDown(ball, top, bottom, interval){ //pass in a ball object
	var ballMT = ball.style.marginTop; 
	var str = ballMT.substring(0, ballMT.length-1);
	str = Number(str);
	str = str + interval;
	if (str>bottom){
		str = top;
	}
	ball.style.marginTop = str + "%";
}

function moveAll(){
	var move1 = setInterval(moveDown, 25, balls[0], -29, 132, .35);
	var move2 = setInterval(moveDown, 25, balls[1], -60, 100, .20);
	var move3 = setInterval(moveDown, 25, balls[2], -74, 107, .32);
	var move4 = setInterval(moveDown, 25, balls[3], -95, 74, .35);
	var move5 = setInterval(moveDown, 25, balls[4], -92, 64, .37);
	var move6 = setInterval(moveDown, 25, balls[5], -115, 47, .3);
	var move7 = setInterval(moveDown, 25, balls[6], -154, 28, .20);
}

moveAll();

var i={
	value: 0
};

var j={
	value: 0,
	counter: 0
};

function setSway(i){
	if (i.value >= balls.length){
		clearInterval(myVar2);
	}
	else{ 
		console.log(i.value);
		balls[i.value].classList.add("sway" + i.value);
		i.value++;
	}
}

var myVar2 = setInterval(setSway, 500, i);



//transitions

function moveRight(){
	var sections = document.getElementsByTagName('section');

	for (var k=0; k<sections.length; k++){//make them into integers, subtract 100 and convert back into string
		var marginTop = sections[k].style.marginTop; // string
		var noPercent = marginTop.substring(0, marginTop.length-1);
		sections[k].style.marginTop = (Number(noPercent) - 100) + "%";
	}
}

function moveLeft(){
	var sections = document.getElementsByTagName('section');

	for (var k=0; k<sections.length; k++){//make them into integers, subtract 100 and convert back into string
		var marginTop = sections[k].style.marginTop; // string
		var noPercent = marginTop.substring(0, marginTop.length-1);
		sections[k].style.marginTop = (Number(noPercent) + 100) + "%";
	}
}
// var counter = 0;

// function moveRight(){
// 	var sections = document.getElementsByTagName('section');
// 	for (int k=0; k<sections.length; k++){//separate values into integers
// 		alert(sections[k].style.transform)
// 	}
// }