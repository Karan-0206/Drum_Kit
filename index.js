let lst=[];
lst=document.querySelectorAll(".drum");
var i;
for(i=0;i<lst.length;i++){
    lst[i].addEventListener("click",rock);
}
document.addEventListener("keydown",(e)=>{
    if(obj[e.key]){
        butAnime(e.key);
            var audio=new Audio(obj[e.key]);
             audio.play();
            }});
             
var obj={
    "w":"sounds/tom-1.mp3",
    "a":"sounds/tom-2.mp3",
    "s":"sounds/tom-3.mp3",
    "d":"sounds/tom-4.mp3",
    "j":"sounds/snare.mp3",
    "k":"sounds/crash.mp3",
    "l":"sounds/kick-bass.mp3"
};
function rock(){
    
    var val=this.innerHTML;
    butAnime(val);
    var audio=new Audio(obj[val]); 
    audio.play();

    }
function butAnime(value){
    var temp=document.querySelector("."+value);
    temp.classList.add("pressed");
    setTimeout(function(){temp.classList.remove("pressed")},100);
}
