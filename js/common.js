$(function(){

    $('header').load('inc.html .header > div',header);
    $('footer').load('inc.html .footer');
    $('aside').load('inc.html aside a,aside img')



    
    function header(){
    /* header */
        const elBurger = document.querySelector('.menu-trigger');
        const elNav = document.querySelector('.menu');
        elBurger.addEventListener('click',function(){
            this.classList.toggle('active-1');
            elNav.classList.toggle('active');
        });
        sideTop()


    }
    

});