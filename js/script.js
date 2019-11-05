// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    let input = $("#input").val();
     let r = Math.random()
     let computerChoice = '';
     console.log(r)
        if(r < 0.33){
            computerChoice += "rock"

        }
        else if (r < 0.67){
            computerChoice += "paper"
        }
        else{
            computerChoice += "scissors"
        }
 console.log(computerChoice);
let userInput = "hello";
$("#userChoice").text(input)
$("#computerChoice").text(computerChoice)
    if ((((userInput == "rock") && (computerChoice == "scissors")) || ((userInput == "paper") && (computerChoice == "rock")) || ((userInput == "scissors") && (computerChoice == "paper")))) {
        $("#result").html("User wins!");
    }
    else if((((userInput == "scissor") && (computerChoice == "rock")) || ((userInput == "rock") && (computerChoice == "paper")) || ((userInput == "paper") && (computerChoice == "scissors")))){
        $("#result").html("Computer wins!");
    }
    else {
       $("#result").html("It's a tie!");
    }
});






// DOCUMENT READY FUNCTION BELOW

