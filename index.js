
var btnLengths = document.querySelectorAll(".drum").length; 

for(var i = 0; i < btnLengths; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        // Get the inner HTML of the button clicked and store it in a var 
        var btnInnerHTML = this.innerHTML;

        makeSound(btnInnerHTML); // Purpose of this is to play sound when clicked with mouse 
        btnAnimation(btnInnerHTML);
    });
}


// Detecting keyboard press
addEventListener("keydown", function(event) { // event has a key property

    makeSound(event.key); // Send the key property of the event to the makeSound function
    btnAnimation(event.key);
});



// Function to play the sound depending on which key was pressed, we will use it in the addEventListener
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); // Call the play() method in the Audio Constructor
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            default:
                console.log(btnInnerHTML);
    }
}


// Create a function for animation when the button is clicked 
function btnAnimation(currentKey) {

    var pressedBtn = document.querySelector("." + currentKey); // get button
    
    pressedBtn.classList.add("pressed") // apply css class to it with anima

    // Remove the css class after 200 miliseconds using the setTimeout method
    setTimeout(function() {
        pressedBtn.classList.remove("pressed");
    }, 200)

}
