// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

// Get the element that has an id of stock
var elStock = document.getElementById('stock');
elStock.className = shipping;

// Get the element that has an id of shipping
var elShip = document.getElementById('shipping');
elShip.className = shipping;

var elContent = document.getElementById('content');

elContent.addEventListener ('click',function(){
    
   if(elContent.className != 'active'){ 
       elContent.className = 'active';
 }else{ 
     elContent.className = '';
}
});