window.addEventListener('DOMContentLoaded',function(){

    /* popup */
    $('.popup figure img').on('click',function(){
        $('.popup').hide();
    });

    /* body-3 */
    $(function(){

        $.ajax({
            url:'./data/data.json',
            success:function(data){
                console.log(data)
                let tit, subtit, link, detail,tagList ='', dix=0;
                
                data.founed.forEach(function(v){
                    tagList += `<li>
                                    <address>${v.name}<br><p>${v.subname}</p><a>click</a></address>
                                    <img src="${v.photo}" alt="${v.name}">
                                </li>`;
                });
                $('.body-3 ul').html(tagList);
            
            function dataChange(){
                tit =data.founed[idx].name;
                subtit = data.founed[idx].subname;
                link = data.founed[idx].link;
                detail = data.founed[idx].detail;
                

                tagList = `<h3>${tit} <br> [${subtit}] </h3>
                            
                            <div>
                                ${detail}<br>
                                <a href="${link}" target="blank"><br>
                                    Shortcut
                                </a>
                            </div>`;
                $('.popup2').html(tagList);
            }

            $('.body-3 ul li').on('click',function(){
                idx = $(this).index();
                dataChange();
                $('.body-3 .popup2').css('display','block');
            });

            $('.body-3 .popup2').on('click',function(){
                $(this).hide();
            });
            },

            error:function(e){
                console.log(e.status);
                console.log(e.error);
                console.log(e.responseText);
            }
        })
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