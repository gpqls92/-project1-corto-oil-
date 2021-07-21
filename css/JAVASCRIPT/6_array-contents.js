window.addEventListener('DOMContentLoaded',function(){

    var data = [
        'img/photo-1.jpg',
        'img/photo-2.jpg',
        'img/photo-3.jpg',
        'img/ple-1.jpg',
        'img/ple-2.jpg',
        'img/ple-3.jpg',
        'img/ple-4.jpg'
    ];

    var elGallery = document.querySelector('.gallery');
    var list='';

    // for(var i=0; i<data.length; i++){
    //     list += `<figure><img src="${data[i]}"></figure>`
    // }
    // elGallery.innerHTML = list;
    data.forEach(function(value,key){
        var elFigure = document.createElement('figure');
        var elImage =  document.createElement('img');
            elImage.src = value;

            elFigure.append(elImage);
            elGallery.append(elFigure);
    });

    const elFigure = document.querySelectorAll('.gallery figure');

    for(let i=0; i<data.length; i++){
        elFigure[i].addEventListener('click',function(){ 
            console.log( data[i] );
        })
    }


    // AddImage
    const btnAdd = document.querySelector('.add-img button');
    const elAddDiv = document.querySelector('.add-img div');

    var k=0;
    btnAdd.addEventListener('click',function(){
        if(k<data.length){        
            elAddDiv.innerHTML += `<img src="${data[k]}">`;
            k++;    
        }else{
            alert('더이상 데이터가 없습니다.');
        }
    });


    // select-img
    const elSelect = document.querySelector('.select-img select'),
          elSelectBtn = document.querySelector('.select-img button'),
          elChangeImage = document.querySelector('.select-img figure');

        let idx = 0;
        elSelect.addEventListener('change',function(){
            idx = elSelect.value;
        });

        elSelectBtn.addEventListener('click',function(){
            elChangeImage.innerHTML = `<img src=${data[idx]}>`;

            const bColor = document.querySelector('input[type=color]');
            const bImage = document.querySelector('.select-img img');
                    bImage.style = `border-color:${bColor.value}`
            //figure안에 <img src="">를 넣어주세요
        });

        

});



