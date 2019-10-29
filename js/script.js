// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
console.log("hi")
$("#shoot").click(function(){
    let input = $("#input").val();
     let r = Math.random()
        if(r < 0.33){
            let computerChoice = "rock"
        }
        else if (r < 0.67){
            let computerChoice = "paper"
        }
        else{
            let computerChoice = "scissors"
        }

$("#userChoice").text(input)
$("#computerChoice").text("hi")
 /*console.log(userInput);
    if (userInput == "rock") && (r < 0.99) || (userInput == "paper") && (r < 0.33) || (userInput == "scissors") && (r < 0.66) {
        $("#text").html("User wins!");
    }
    else if (userInput == "rock" && r < 0.67) || (userInput == "paper") && (r < 0.99) || (userInput == "scisssors") && (r < 0.33){
        $("#text").html("Computer wins");
    }
    else if (userInput = "rock" && r < 0.33){
       $("#text").html("It's a tie");
    }*/
});






// DOCUMENT READY FUNCTION BELOW

