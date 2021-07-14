
// aside .top
    const elHeader = document.querySelector('.header');
    const elAside = document.querySelector('.top');
    

    window.addEventListener('scroll',function(){

        let domHei = document.documentElement.offsetHeight;
        let winHei = window.innerHeight;
        
        if(domHei - winHei <= window.scrollY){
            console.log('문서 최하단에 위치함');
        }
        
        if(window.innerHeight < window.scrollY){
            elAside.classList.add('active');
        }else{
            elAside.classList.remove('active');
        }
    });
