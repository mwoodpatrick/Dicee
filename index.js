function throwDice() {
    var player1Throw = Math.floor(Math.random()*6)+1;
    var player2Throw = Math.floor(Math.random()*6)+1;
    var player1Dice = document.querySelector(".img1");
    var player2Dice = document.querySelector(".img2");
    var header = document.querySelector("h1");``
    var result;

    player1Dice.setAttribute("src", "images/dice"+player1Throw+".png");
    player2Dice.setAttribute("src", "images/dice"+player2Throw+".png");

    if ( player1Throw > player2Throw )
        result = "Player 1 wins";
    else if ( player1Throw === player2Throw )
        result = "We have a draw";
    else
        result = "Player 2 wins";

    header.textContent = result;

}