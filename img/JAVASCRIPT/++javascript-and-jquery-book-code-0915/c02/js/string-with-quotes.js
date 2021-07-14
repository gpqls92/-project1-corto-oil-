// Create variables to hold the title and note text.
var title; 
var message;

// Assign values to these variables.
var price = 25+'%';

title = "Molly's Special Offers";
message = '<a href=\"sale.html\">'+price+' off!</a>';

// Get the element with an id of title.
var elTitle = document.getElementById('title');
// Replace the content of this element.
elTitle.textContent = title;

// Get the element with an id of note.
var elNote = document.getElementById('note');
// Replace the content of this element.
elNote.innerHTML = message;

var content = document.querySelector('#content');
var ex = document.querySelector('.ex');
// console.log(content.textContent);
console.log(content.innerHTML);

ex.innerHTML = content.innerHTML; //복사

ex.innerHTML = "<figure>"
ex.innerHTML += "<img src='images/toggle.png'></img>"
ex.innerHTML += "</figure>";


