const GAME = document.querySelector('.game');
const Amiya = document.querySelector('.amiya');
let Amiya_Skin = `planter`;

let mousedownY = -1;
let mouseupY = -1;
let shootImgBuffer = null;

GAME.addEventListener("mousedown", (e) => {
    
    mousedownY = e.y;
    Amiya.src = `/img/Amiya_${Amiya_Skin}_attack1.gif`;
    clearTimeout(shootImgBuffer);

})

GAME.addEventListener("mouseup", (e) => {
    
    mouseupY = e.y;
    if(mouseupY + 100 < mousedownY) {
        console.log("shoot");
        Amiya.src = `/img/Amiya_${Amiya_Skin}_attack2.gif`;
        
        shootImgBuffer = setTimeout((e) => {
            Amiya.src = `/img/Amiya_${Amiya_Skin}_idle.gif`;
            console.log(`shoot`);
        }, 1000);
    }else {
        Amiya.src = `/img/Amiya_${Amiya_Skin}_idle.gif`;
    }
})