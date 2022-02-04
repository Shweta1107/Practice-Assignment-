const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "We love Programming...";

let idx = 1;

let NUM = 500; //this is second
let time = NUM /speedEl.value;

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx);
    idx++;

    if(idx > text.length){
        idx = 1;
    }
    setTimeout(writeText , time);
}

speedEl.addEventListener("input",(e)=>{
    time = NUM/e.target.value;
})
console.log('2e'/2);
console.log('2'/2);
console.log('2'+2);
console.log('2'-2);
console.log('2'%2);
