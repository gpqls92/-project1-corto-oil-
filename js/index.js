window.addEventListener('DOMContentLoaded',function(){

    /* popup */
    body.addEventListener('click',function(){
        let target = event.target;
        console.log(target.scr)


        if(event.target.nodeName == 'body'){
            photo.src = target.src;
            node1.classList.add('.node-1');
        }
    });

    node1.addEventListener('click',function(){
        if(event.target.classList.contains('.node-1')){
            node1.classList.remove('.node-1');
            }
    });



    /* header */
    const elBurger = document.querySelector('.menu-trigger');
    const elNav = document.querySelector('.menu');
    elBurger.addEventListener('click',function(){
        this.classList.toggle('active-1');
        elNav.classList.toggle('active');
    });



    /* body-4 */
    type="text/javascript"
    $(".follow").slick({
        arrows: true,
        dots:true,
        intinite:true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay:true,
        autoplaySpeed:3000,
    }); 


});
