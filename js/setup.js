const GAME = document.querySelector('.game');
const Amiya = document.querySelector('.amiya');
const MAXLOADINGCOUNT = 10;

let Amiya_Skin = `default`;
let loadingCount = 0;

let IMG = {
    Amiya_default_idle : new Image,
    Amiya_default_attack1 : new Image,
    Amiya_default_attack2 : new Image,
    Amiya_planter_idle : new Image,
    Amiya_planter_attack1 : new Image,
    Amiya_planter_attack2 : new Image
}

IMG.Amiya_default_idle.src = "/img/Amiya_default_idle.gif";
IMG.Amiya_default_idle.onload = () => {
    loadingCount = loadingCount + 1;
};
IMG.Amiya_default_attack1.src = "/img/Amiya_default_attack1.gif";
IMG.Amiya_default_attack1.onload = () => {
    loadingCount = loadingCount + 1;
};
IMG.Amiya_default_attack2.src = "/img/Amiya_default_attack2.gif";
IMG.Amiya_default_attack2.onload = () => {
    loadingCount = loadingCount + 1;
};
IMG.Amiya_planter_idle.src = "/img/Amiya_planter_idle.gif";
IMG.Amiya_planter_idle.onload = () => {
    loadingCount = loadingCount + 1;
};
IMG.Amiya_planter_attack1.src = "/img/Amiya_planter_attack1.gif";
IMG.Amiya_planter_attack1.onload = () => {
    loadingCount = loadingCount + 1;
};
IMG.Amiya_planter_attack2.src = "/img/Amiya_planter_attack2.gif";
IMG.Amiya_planter_attack2.onload = () => {
    loadingCount = loadingCount + 1;
}

let AUDIO = {
    bgm1 : new Audio(),
    bgm2 : new Audio(),
    effect_shot : new Audio(),
    effect_miss : new Audio()
}

AUDIO.bgm1.src = "/audio/Built_to_Scale1.mp3";
AUDIO.bgm1.onloadeddata = () => {
    loadingCount = loadingCount + 1;
}
AUDIO.bgm2.src = "/audio/Built_to_Scale2.mp3";
AUDIO.bgm2.onloadeddata = () => {
    loadingCount = loadingCount + 1;
}
AUDIO.effect_shot.src = "/audio/shot.mp3";
AUDIO.effect_shot.onloadeddata = () => {
    loadingCount = loadingCount + 1;
}
AUDIO.effect_miss.src = "/audio/miss.mp3";
AUDIO.effect_miss.onloadeddata = () => {
    loadingCount = loadingCount + 1;
}

let LOADING = setInterval((e) => {
    console.log(`${loadingCount / MAXLOADINGCOUNT * 100}%`);
    if(loadingCount === MAXLOADINGCOUNT) {
        clearInterval(LOADING);
        console.log("Loading Finish");
    }
}, 500);