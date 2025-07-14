$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    })
    
});
