// common.js
let hash = location.hash;
const elA = document.querySelectorAll(`.locate a`);

let pageIdx = 0;
switch(hash){
    case '#index':pageIdx = 0;break;
    case '#compan':pageIdx = 1;break;
    case '#service':pageIdx = 2;break;
}
elA[pageIdx].className = 'active';