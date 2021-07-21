// Create variables to hold the name and note text.
var exName; /*friend*/
var exMsg; /*Take a look around...*/

var span = document.querySelector('#name');
var note = document.querySelector('#note');
var ex = document.querySelector('#ex');

span.textContent = '김혜빈';

exName =  span.textContent;
exMsg = note.textContent;

ex.textContent = '[' + exName + ']' + exMsg;


// ex2 -----> friend  -> 이름으로 변경


















