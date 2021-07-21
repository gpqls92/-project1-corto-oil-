window.addEventListener('DOMContentLoaded',function(){

    /* popup */
    $('.popup figure img').on('click',function(){
        S(this).hide();
    });



    /* body-4 */
    $(".follow").slick({
        arrows: false,
        dots:true,
        intinite:true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay:true,
        autoplaySpeed:3000,

        responsive:[{
            breakpoint :480,
            settings: {
                arrows:false,
                dots:false,
                slidesToShow:2,
                slidesToScroll:2,
            }
        }]
    }); 



});