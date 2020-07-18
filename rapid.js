const video=document.getElementById('video');
const play=document.getElementById('play');
const pause=document.getElementById('pause');
const bstop=document.getElementById('bstop');
let timer=null;

play.addEventListener('click', vidAction);
pause.addEventListener('click', vidAction);
bstop.addEventListener('click', vidAction);
video.addEventListener('ended', vidEnded);


let vidPlaying=0;

function vidAction(event){

    switch(event.target.id){
        case "play":
            playVideo();
            timer=setInterval(update,100);
            break;
        case "pause":
            video.pause();
            break;
        case "bstop":
            video.pause();
            video.currentTime=0;
            break;    
    }
}

function playVideo(){
    fetch("./server1.json")
    .then(function(resp){
        console.log(resp)
        return resp.json();
    }) 
    .then(function(data){
        console.log(data);
    });
    video.play();
    timer=setInterval(update,100);
}



function vidEnded(){

    clearInterval(timer);
    playVideo();
}





fetch("./server1.json")
    .then(function(resp){
        console.log(resp)
        return resp.json();
    }) 
    .then(function(data){
        console.log(data);
    });