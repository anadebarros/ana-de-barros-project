//for arrow return to top

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#top').fadeIn("fast"); // Fade in the arrow
    } else {
        $('#top').fadeOut("fast"); // Else fade out the arrow
    }
});
$('#top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

//for blinking element in home

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

//for tooltip in about me section

$(document).ready(function() {
    $('.tooltipped').tooltip({
        delay: 50
    });
});

//tooltips

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
