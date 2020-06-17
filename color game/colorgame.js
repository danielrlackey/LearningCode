let colors = generateRandomColors(6);
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let reset = document.querySelector("#reset")
let easybtn = document.querySelector("#easyBtn")
let hardbtn = document.querySelector("#hardBtn")

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "try again";
        }
    });
}

reset.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i]
    reset.textContent = "New Colors";
    }
    h1.style.background = "#232323"
})

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    for(let i = 0; i < squares.length; i++ ){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(6);
//    working on hard button!
// think its similar to easybtn
// gonna try to figure out on my own
});

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
       squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 return "rgb(" + r + ", " + g + ", " + b + ")";
}