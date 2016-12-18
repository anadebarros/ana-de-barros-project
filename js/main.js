//home page

$(document).ready(function() {
    setInterval("pisca()", 600);
});



function pisca() {
    $("#pisca").animate({
        opacity: 0
    }, "fast", "swing").animate({
        opacity: 1
    }, "fast", "swing");
};

//for toggle change

function cross(x) {
    x.classList.toggle("change");
};

//for text-decoration color change
var textDecor = document.getElementById("textdecor");
textDecor.style.textDecorationColor = "white";

var textDecorTwo = document.getElementById("textdecortwo");
textDecorTwo.style.textDecorationColor = "white";

var textDecorThree = document.getElementById("textdecorthree");
textDecorThree.style.textDecorationColor = "white";
