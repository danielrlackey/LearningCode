let guess = prompt("guess a number between 1-3");


const dice = Math.floor(Math.random() * 4);

if(guess == dice){
         alert("you are correct the number for the dice was " + dice);
         
}
else if(guess != dice){
    alert("you are wrong the number was " + dice);
}
