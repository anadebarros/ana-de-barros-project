//home page 

$(document).ready(function(){
	setInterval ("pisca()", 600);
});



function pisca() {
	$("#pisca"). animate({
		opacity:0
	}, "fast","swing").animate({
		opacity:1
	}, "fast", "swing");
}

//about me nav bar 

/*

function cross(x) {
    x.classList.toggle("change");
}

*/