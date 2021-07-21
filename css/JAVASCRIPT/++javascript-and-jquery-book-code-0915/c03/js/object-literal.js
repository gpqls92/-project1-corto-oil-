// Set up the object
var hotel = {
  name : 'Quay',
  rooms : 40,
  booked : 25,
  checkAvailability : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};


{
  product : [
    {
      imgUrl: 'img"/01.jpg',
      title : '제목',
      summary : '요약설명'
    }
  ]
  product : [
    {
      imgUrl: 'img"/01.jpg',
      title : '제목',
      summary : '요약설명'
    }
  ]
}


// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability();   // Update HTML with property of the object

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/

let obj = {
  name : '홍길동',
  age : [100,200,300]
} 

console.log(
  obj.name,
  obj.age[1]
  )

for(let i in obj.age){
  if(obj.age[i] == 200){
  console.log(obj.age[i]);
  }
}


let obj2 = {
  name : [
    {age:100, tel:010, address:'강남'},
    {age:200, tel:016, address:'역삼'}
  ]
}
console.log(obj2.name[0].address)



let x,y,dx,dy;
let class2 = {
  name : '',
  time : '',
  date : ''
}