// Create a variable called msg to hold a new message
var msg = 'Sign up to receive our newsletter for 10% off!';

// Create a function to update the content of the element whose id attribute has a value of message
  var el = document.getElementById('message');

  function updateMessage() {
  el.textContent = msg;
}
// el.addEventListener('click', function(){
//   updateMessage();
// })

el.addEventListener('click',updateMessage);