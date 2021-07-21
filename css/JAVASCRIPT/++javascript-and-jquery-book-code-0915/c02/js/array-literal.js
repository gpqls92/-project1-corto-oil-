// Create an array and assign it values.
var colors; 
colors = ['white', 'black', 'custom'];

colors[2] = 'red';
colors[3] = 'yellow';
colors.push('green');
colors.unshift('pink');

console.log(colors);
console.log(colors.length);

// Show the first item from the array.
var el = document.getElementById('colors');
el.innerHTML = `<i style="color:${colors[0]}"> ${colors[0]} </i>`;
el.innerHTML += `<i style="color:${colors[1]}"> ${colors[1]} </i>`;
el.innerHTML += `<i style="color:${colors[2]}"> ${colors[2]} </i>`;
el.innerHTML += `<i style="color:${colors[3]}"> ${colors[3]} </i>`;
el.innerHTML += `<i style="color:${colors[4]}"> ${colors[4]} </i>`;
el.innerHTML += `<i style="color:${colors[5]}"> ${colors[5]} </i>`; 


var elDiv = document.querySelectorAll('div');
console.log(elDiv);