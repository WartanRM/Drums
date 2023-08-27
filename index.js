let n=document.querySelectorAll(".drum").length;
for(let i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        let buttonKey=this.innerHTML;
        keypressEvent(buttonKey);
        buttonAnimation(buttonKey);
    });
}
document.addEventListener("keypress",function(event){
    keypressEvent(event.key);
    buttonAnimation(event.key);
});

function keypressEvent(key){
    switch (key) {
        case "w":
            let wAudio=new Audio('sounds/crash.mp3');
            wAudio.play();
            break;
        case "a":
            let aAudio=new Audio('sounds/kick-bass.mp3');
            aAudio.play();
            break;
        case "s":
            let sAudio=new Audio('sounds/snare.mp3');
            sAudio.play();
            break;
        case "d":
            let dAudio=new Audio('sounds/tom-1.mp3');
            dAudio.play();
            break;
        case "j":
            let jAudio=new Audio('sounds/tom-2.mp3');
            jAudio.play();
            break;
        case "k":
            let kAudio=new Audio('sounds/tom-3.mp3');
            kAudio.play();
            break;
        case "l":
            let lAudio=new Audio('sounds/tom-4.mp3');
            lAudio.play();
            break;
        default:
            console.log(key);
            break;
    }
}
function buttonAnimation(currentKey){
    let varButton= document.querySelector("." + currentKey);
    varButton.classList.add("pressed");

    setTimeout(function(){
        varButton.classList.remove("pressed")}, 100);
    
}