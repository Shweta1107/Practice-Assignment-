
// const btnxyz = document.querySelectorAll(".btn");
/* Line 3 to 7 and line 32 to 34 are same (we can write in both the ways) */
const stop =  document.querySelector(".stop");
stop.addEventListener("click",()=>{
    stopSound();
})


const btnxyz = Array.from(document.querySelectorAll(".btn"));

for(var i=0;i<btnxyz.length;i++){
    var buttonxyz = btnxyz[i];
    playSound(buttonxyz);
}

function playSound(btn){
    btn.addEventListener("click",()=>{
       stopSound();
       document.getElementById(btn.innerText).play();
    })
}

function stopSound(){
    for(var i =0;i<btnxyz.length;i++){
        const sound = document.getElementById(btnxyz[i].innerText);
        sound.pause();
        sound.currentTime = 0;
    }
}

// document.querySelector(".stop").addEventListener("click",function(){
//     stopSound();
// })

