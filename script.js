var months = document.getElementsByClassName('month');
var monthsContent = document.getElementsByClassName('monthContent');
var redMonths = document.getElementsByClassName('redMonth');
var body = document.body;
var disableScroll = false;
var counter = 1;
var activeMonth;

function move(dir){
	var top,
		topCont,
		amount = 140;
	if (dir == 'down'){
		amount = -140;
	}
	for (var i=0; i<months.length; i++){
		top = months[i].style.top;
		top = top.substring(0, top.length-2);
		top = Number(top) + amount; 
		months[i].style.top = top + 'px';
	}
}

function mouseWheelEventHandler(){
	if (disableScroll)
		return;
	var e = window.event || e;
	if(e.wheelDelta < 0){
		if (counter == 0)
			counter = 11;
		else
			counter--;
		move('up');
		checkMonth('up');
	}
	else{
		if (counter == 11)
			counter = 0;
		else
			counter++;
		move('down');
		checkMonth('down');
	}
	disableScroll = true;
	updateScroll();
}

function updateScroll(){
	setTimeout(function(){
		disableScroll = false;
	}, 900);
}

function checkMonth(dir){
	var limit = 280,
		pageLimit = -140,
		newPos = 1400;

	if (dir == 'up'){
		limit = 0;
		pageLimit = 1400;
		newPos = -140;
	}

	for (var i=0; i<months.length; i++){
		if (counter == i){
			console.log(months[i]);
			monthsContent[i].style.opacity = 1;
		}
		else
			monthsContent[i].style.opacity = 0;

		var top = months[i].style.top;
		top = Number(top.substring(0, top.length-2));

		if (months[i].getBoundingClientRect().top == limit){
			activeMonth = months[i];
			activeMonth.firstElementChild.style.opacity = 1;
		}
		else{	
			months[i].firstElementChild.style.opacity = 0;
		}
		if (dir == 'up'){ //check overall pos
			if (months[i].getBoundingClientRect().top >= 1400){
				months[i].style.opacity = 0;
				months[i].style.top = -140 + "px";
			}
			else
				months[i].style.opacity = 1;
		}
		else{
			if (months[i].getBoundingClientRect().top <=  -140){
				months[i].style.opacity = 0;
				months[i].style.top = 1400 + "px";
			}
			else{
				months[i].style.opacity = 1;
			}
		}

	}
}

body.addEventListener('mousewheel', mouseWheelEventHandler, false);

// var months = document.getElementsByClassName('month');
// var redMonths = document.getElementsByClassName('redMonth');
// var body = document.body;

// body.addEventListener('mousewheel', mouseWheelEventHandler, false);

// window.onload = function(){
// 	context.scrollTop = 5;
// }

// function mouseWheelEventHandler(){
// 	var e = window.event || e;
// 	context.scrollTop -= e.wheelDelta/5;
// }

// var doc = window.document,
//   context = doc.querySelector('#TLContainer'),
//   disableScroll = false,
//   scrollHeight = context.scrollHeight,
//   clones = document.getElementsByClassName('clone'),
//   clonesHeight = getClonesHeight();
//   scrollPos = 0;

// function getScrollPos(){ //return position of scroll (|| for compatibility?)
// 	return (context.scrollTop || context.pageYOffset) - (context.clientTop || 0);
// }

// function setScrollPos(pos){
// 	context.scrollTop = pos;
// }

// function getClonesHeight(){ //return total height of the two clones
//   clonesHeight = 0;

//   for (var i = 0; i < clones.length; i += 1) {
//     clonesHeight = clonesHeight + clones[i].offsetHeight;
//   }

//   return clonesHeight;
// }

// function scrollUpdate(){
// 	console.log(scrollPos);
// 	if (!disableScroll){
// 		scrollPos = getScrollPos();
// 		if (scrollPos >= 1700){ //if reach bottom
// 			setScrollPos(1);
// 			disableScroll = true;
// 		}
// 		else if (scrollPos <= 5){
// 			setScrollPos(1690);
// 			disableScroll = true;
// 		}
// 	}
// 	if (disableScroll){
// 		window.setTimeout(function(){
// 			disableScroll = false;
// 		}, 40);
// 	}
// }

// function updateMonth(){
	
// }

// context.addEventListener('scroll', function(){
// 	window.requestAnimationFrame(scrollUpdate);
// }, false);