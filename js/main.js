//for arrow return to top

//  Scroll to Top 
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

//for blinking element in header

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

//for menu toggle
$('.menu-toggle').on('click', function() {
    $('.menu-overlay').toggleClass('full-menu');
});

$('.menu-overlay li').on('click', function() {
    $('.menu-overlay').toggleClass('full-menu');
})


//tooltips

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


//geolocation

function initMap() {
    console.log('map is working');
    //insert map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.7075196,
            lng: -9.1375167
        },
        zoom: 10
    });

    //add marker
    var marker = new google.maps.Marker({
        position: {
            lat: 38.7075196,
            lng: -9.1375167
        },
        map: map,
        title: "hello world"
    });
}


// update footer copyright year

var today = new Date();
var year = today.getFullYear();

var copyright = document.getElementById("copyright");
copyright.innerHTML = '© Ana de Barros ' + year;
