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



    function sideTop(){
        /* aside */
        const elAside = document.querySelector('.top');
        
        window.addEventListener('scroll',function(){
            let domHei = document.documentElement.offsetHeight;
            let winHei = window.innerHeight;

            if(domHei - winHei <= window.scrollY){
                console.log('최하단');
            }
            if(window.innerHeight < window.scrollY){
                elAside.classList.add('active');
            }else{
                elAside.classList.remove('active');
            }
        })
    }
    

});