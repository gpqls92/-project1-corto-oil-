var i = 1;       // Set counter to 1
var msg = '';    // Message

// Store 5 times table in a variable





function gugu(n){

while (i < 10) {
  msg += `${n} x ${i} = ${(i*n)}<br />`;
  i++;
}
msg += '</p>';
}
gugu(8)



// while (i < 10) {
//   msg += i + ' x 2 = ' + (i * 2) + '<br />';
//   i++;
// }

document.getElementById('answer').innerHTML = msg;