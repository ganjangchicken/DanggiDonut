

let mousedownY = -1;
let mouseupY = -1;
let shootImgBuffer = null;

Amiya.src = IMG.Amiya_default_idle.src;

GAME.addEventListener("mousedown", (e) => {
    
    GAME.addEventListener("mousemove", (em) => {
        if(mousedownY < em.y) {
            mousedownY = em.y;
        }
    })

    mousedownY = e.y;
    Amiya.src = `/img/Amiya_${Amiya_Skin}_attack1.gif`;
    clearTimeout(shootImgBuffer);

})

GAME.addEventListener("mouseup", (e) => {
    
    mouseupY = e.y;
    if(mouseupY + 100 < mousedownY) {
        AUDIO.effect_shot.play();
        Amiya.src = `/img/Amiya_${Amiya_Skin}_attack2.gif`;
        shootImgBuffer = setTimeout((e) => {
            Amiya.src = `/img/Amiya_${Amiya_Skin}_idle.gif`;
        }, 1000);
    }else {
        Amiya.src = `/img/Amiya_${Amiya_Skin}_idle.gif`;
    }
})