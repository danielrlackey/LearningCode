//Game logic var
let gameRunning = true
let card = Math.floor(Math.random() * 15);

//Player variables
let playerHand = [];
let playerHandCounter = playerHand.length;
let playerChoice = null;

//Dealer variables
let dealerHand = [];
card = Math.floor(Math.random() * 15)
dealerHand.push(card)
card = Math.floor(Math.random() * 15)
dealerHand.push(card)

playerHand.push(card)
card = Math.floor(Math.random() * 15);
playerHand.push(card)

//Game functions

function checkPlayerHand(hand){
    let totalOfCards = 0;
    for(let i = 0; i < hand.length; i++){
        totalOfCards = totalOfCards + hand[i];
    }
    return totalOfCards;
}

while(gameRunning){
    if(checkPlayerHand(playerHand) > 21){
        console.log("YOU BUSTED!")
        gameRunning = false
        break;
    }
    console.log("Welcome to black jack the dealer \n hands you two cards")
    console.log("What would you like to do?")

    console.log('\n')

    console.log("####################")
    console.log("##   BLACKJACK    ##")
    console.log("####################")
    console.log("Press H to hit")
    console.log("Press C to check your hand")
    console.log("Press S to show hand")
    console.log("Press Q to quit")
    console.log('\n')

    playerChoice = prompt("Chose your move")

    //Player Options
    if(playerChoice == "q"){
        gameRunning = false;
    }
    else if (playerChoice == "h"){
        card = Math.floor(Math.random() * 15);
        playerHand.push(card)
        console.log("you currently have" + playerHand)
    }
    else if (playerChoice == "c"){
        console.log("You currently have " + playerHand)
    }
    else if (playerChoice == "s"){
        //find your hand and dealers hand and compare
        if(checkPlayerHand(playerHand) > checkPlayerHand(dealerHand) && checkPlayerHand(playerHand) <= 21){
            console.log("your hand is " + checkPlayerHand(playerHand))
            console.log("dealer has " + checkPlayerHand(dealerHand))
            console.log("You're a fucking winner dawg!!!!")
            gameRunning = false
        }
        else if(checkPlayerHand(dealerHand) > checkPlayerHand(playerHand) && checkPlayerHand(dealerHand) <= 21){
            console.log("your hand is " + checkPlayerHand(dealerHand))
            console.log("dealer has " + checkPlayerHand(dealerHand))
            console.log("you lose, try again")
            gameRunning = false
        }

    }
    else{
        console.log("Thats not a valid game option")
    }

}
