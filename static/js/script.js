$(document).ready(function(){
    $('.products_carousel').slick({
        dots: true,           // Show dot indicators
        arrows: true,         // Show next/prev arrows
        infinite: true,       // Infinite looping
        speed: 300,           // Transition speed
        slidesToShow: 3,      // Number of slides to show
        slidesToScroll: 1,    // Number of slides to scroll
        autoplay: true,       // Auto-play
        autoplaySpeed: 2500,  // Auto-play speed
    });
});