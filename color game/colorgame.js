let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "correct";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "try again";
        }
    });
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
       squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}