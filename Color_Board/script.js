const container = document.querySelector(".container");

let SQUARE = 800;

for(let i=0; i<SQUARE ; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover",()=>{
        setColor(square);
    })
    square.addEventListener("mouseout",()=>{
        removeColor(square);
    })

    container.appendChild(square);
}

function setColor(element){

    let color = getColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`;
}

function removeColor(element){

    element.style.backgroundColor =  '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';

}

function getColor(){
    function color(){
        let hex = random(255).toString(16)

        return hex.padStart(2,"0")
    }
    return "#"+color()+color()+color()  
    // return `rgb(${random(255)},${random(255)},${random(255)}})`  
}

function random(number){

    let val = Math.floor(Math.random()*number)
    return val;
}