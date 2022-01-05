// this section is for button press


// document.querySelector("button").addEventListener("click", handleClick());

// function handleClick(){
//     alert("i got clicked !");
// } 
for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);    
    
}); 

// this way is also working.
// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

// var audio = new Audio("sounds/crash.mp3");
//     audio.play();


//*********************************************************************************

// this section is detedting key board press.

document.addEventListener('keydown', function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

        case 's':
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;

        case 'd':
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

        case 'j':
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        
        
        case 'k':
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        
        
        case 'l':
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        
    
        default:

    }
};


function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout( function(){
    activeButton.classList.remove("pressed");
}, 100);
}