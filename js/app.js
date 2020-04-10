
if(screen.width<214){
    document.write("")
}

let vid = document.getElementById("myvideo");
let time = document.getElementById("time");
var videoTime = vid.duration;
let progress = document.getElementById("progresBar");
let wid = 0
let btn_play =document.getElementById("btn_play");
let cont = 1;
let musicas = ["videos/1.mp4","videos/2.mp4","videos/3.mp4",
    "videos/4.mp4","videos/5.mp4","videos/6.mp4"];
let btn_next = document.getElementById("btn_next");
let btn_prev = document.getElementById("btn_prev");
let btn_muten = document.getElementById("btn_mut");
let vol = ["img/vol_0_2.png",'img/vol_1_2.png',"img/vol_2_2.png","img/vol_3_2.png",];
let cont_vol = 3;
let vol_plus = document.getElementById("vol_plus");
let vol_minus = document.getElementById("vol_minus");
let vid_volume = 0.25;
let btn_back = document.getElementById("btn_back");
let btn_forward = document.getElementById("btn_forward");
let range = document.getElementById("range");
let btN_full = document.getElementById("btn_fullscreen")
//===================================
window.addEventListener("load",function () {
    vid.autoplay = true;
    vid.load();
})
btn_play.addEventListener("click",play_pause);
vid.addEventListener("click",play_pause)
btn_next.addEventListener("click",nextPlay);
btn_prev.addEventListener("click",prevPlay);
btn_muten.addEventListener("click",muten)
vol_plus.addEventListener("click",controle_volume);
vol_plus.addEventListener("click",aumentaVolume);
vol_minus.addEventListener("click",controle_volume_m)
vol_minus.addEventListener("click",diminiuVolume);
btn_forward.addEventListener("click",forward);
btn_back.addEventListener("click",backward);

//=======================
if(screen.width>550){
    vid.addEventListener("click", function (e) {
        if (vid.requestFullscreen) {
            vid.requestFullscreen();
        } else if (vid.mozRequestFullScreen) {
            vid.mozRequestFullScreen();
        } else if (vid.webkitRequestFullscreen) {
            vid.webkitRequestFullscreen();
        }
    })
}
btN_full.addEventListener("click", function (e) {
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen();
    }
})

function VideoProgress() {
    let pcvideo = 100 /Math.trunc(vid.duration);
    pcvideo*=vid.currentTime;
    progress.style.width=`${pcvideo}%`}
let cell = setInterval(VideoProgress,1000)
function play_pause() {
if(vid.paused){
    vid.play()
    btn_play.src="img/pause_bg_white.png"
}else{
    vid.pause()
    btn_play.src="img/play_bg_white.png"}}
function nextPlay() {
   // titulo.innerHTML=nome_musica[cont]
    vid.src=musicas[cont];
    vid.play()
    cont+=1;
    if(cont>musicas.length-1){
        cont=0}}
function prevPlay() {
    //titulo.innerHTML=nome_musica[cont]
    vid.src=musicas[cont];
    vid.play()
    cont-=1;
    if(cont<0){
        cont=musicas.length-1
    }}
function muten() {
    if(vid.muted){
        vid.muted=false
        btn_muten.src="img/vol_3_2.png"
    }else {
        vid.muted=true
        btn_muten.src="img/vol_0_2.png"
    }
}
function controle_volume() {
    btn_muten.src=vol[cont_vol]
    cont_vol+=1
    if(cont_vol>3){
        cont_vol=3}
}
function controle_volume_m() {
    btn_muten.src=vol[cont_vol]
    cont_vol-=1
    if(cont_vol<0){
        cont_vol=0
    }
}
function diminiuVolume() {

    vid.volume = vid.volume-vid_volume;
    vid.muted=false
    if(vid.volume===0){
        vid.volume = 0
    }
}
function aumentaVolume() {
    vid.muted=false;
    vid.volume = vid.volume+vid_volume;

    if(vid.volume===1){
        vid.volume = 1
    }
}
function senar() {
    var timeInSec = vid.duration;
    var hours = Math.floor(timeInSec / 3600) % 24;
    var minutes = Math.floor(timeInSec / 60) % 60;
    var seconds = timeInSec % 60;
    var timeNow = /*(hours < 10 ? "0" + hours : hours) + "-" + */(minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + Math.trunc(seconds) : Math.trunc(seconds));
}
let cel  = setInterval(function(){
    var timeInSec = vid.currentTime;
    var hours = Math.floor(timeInSec / 3600) % 24;
    var minutes = Math.floor(timeInSec / 60) % 60;
    var seconds = timeInSec % 60;
  var sonar = (isNaN(senar()))?senar():"00:00"
    var timeNow = /*(hours < 10 ? "0" + hours : hours) + "-" + */(minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + Math.trunc(seconds) : Math.trunc(seconds));
    if(isNaN(timeNow)){
        time = document.getElementById("time").innerHTML=timeNow
    }

},1000);
function forward() {
vid.currentTime+=20;
}
function backward() {
    vid.currentTime-=20;
}
function tul() {
return vid.ended
}




















