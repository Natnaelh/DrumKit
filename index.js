var mybuttons = document.querySelectorAll(".drum");
for (var i = 0; i < mybuttons.length; i++) {
  mybuttons[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){
  var pressedKey = event.key;
  makeSound(pressedKey);
  buttonAnimation(pressedKey);
});

function makeSound(key){
    switch (key) {
      case "w":
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        break;
      case "a":
        sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        break;
      case "s":
        sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        break;
      case "d":
        sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        break;
      case "j":
        sound = new Audio("sounds/snare.mp3");
        sound.play();
        break;
      case "k":
        sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;
      case "l":
        sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        break;
      default:

    }

  }

function buttonAnimation(currentButton){
  var activeButton = document.querySelector("."+currentButton);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
