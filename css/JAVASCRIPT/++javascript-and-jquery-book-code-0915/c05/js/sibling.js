// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousElementSibling;
var nextItem = startItem.nextElementSibling;

console.log(prevItem);
// Change the values of the siblings' class attributes.
prevItem.className = 'complete';
nextItem.className = 'cool';




const elLi = document.querySelectorAll('li');
for(let i =0 ; i<elLi.length;i++){

    elLi[i].addEventListener('click',function(){

        // 클릭한 li의 클래스이름을 콘솔로 찍어보세요.
        // console.log(this.className == 'hot');
        // let name = this.className;
        // let _this = this;
        // switch(_this.className){
        //     case 'hot' : _this.className = 'cool'; break;
        //     case 'cool' : _this.className = 'hot'; break;
        //     case '' : _this.className = 'cool'; break;
        // }

        if(this.className == 'hot'){
            this.className = 'cool';
        }
        if(this.className == 'cool'){
            this.className = 'hot';
        }
        if(this.className == ''){
            this.className = 'cool';
        }
        // 1. complete ->클릭해도 아무 변화가 없음
        // 2. hot클래스 -> cool 클래스로 변경
        // 3. cool클래스  -> hot 클래스로 변경
        // 4. 클래스명이 없으면 -> conlpete클래스 추가
    });
}

page.addEventListener('click',function(){
     let el = event.target.nodeName;
     console.log(event.target.children)

     this.remove();
    //  parentElement
    //  previousElement
    //  nextElement
    //  children
});