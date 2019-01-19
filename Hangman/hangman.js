$( document ).ready(function() {
    var canvas = document.getElementById("canvas1");
    console.log( "ready!" );
    var words = ["bunny", "bicycle", "mountain", "rapper", "programmer", "laptop", "porn", "musical", "movie", "rented", "square", "branch"];
    var wins = 0;
    var losses = 0;
    var correct = false;
    var letter;
    var guessCount = 11;
    var winCount = 0;
    var word = "";
    boxedLetters = "";
    
  

    

//Create empty box for each letter in word
function createWord(){
    document.addEventListener('keydown', handler)
    $("#word").html("");
    winCount = 0;
    guessedLetters = "";
    guessCount = 11;
    $("#guessCount").text(guessCount);
    $(".guessedLetters").text("");
    $(".gameOver").html("");
    word = words[Math.floor(Math.random() * words.length)];
    for (i=0; i<word.length; i++){  
        $("#word").append( "<span class='letterBox " + i + "'></span>" );
    }
}
//EVENT LISTENER FUNCTION
function handler(e){
    if (!e.repeat){
    
    letter = `${e.key}`;
    }
    if(e.which<65 || e.which>90){
        return false;
    }
    checkLetter();
};
//Add event listener



function checkLetter(){
    correct = false;
    
    //LETTERBOX
    for(i=0; i<=word.length; i++){
        if (letter === word[i] ){
           
            $('.letterBox.'+i).html("<p class='letter'>"+word[i]+"</p>");
            correct = true;
            winCount++
            boxedLetters = $("#word").text();
            
                           
        }
        
    }
    //RECORD WINS
    if(boxedLetters.length === word.length){
        wins++;
        console.log("Game Over");
        $(".wins").text(wins);
        $(".gameOver").html("<a class='btn btn-primary' href='#' role='button'>Start Again</a>");
        document.removeEventListener('keydown', handler);
    }
    //Makes sure there are no repeats in guessed letters
    for(i=0; i<guessedLetters.length; i++){
        if(letter === guessedLetters[i]){
            correct=true;
        }
    }

        //RECORD GUESSED LETTERS ON DOM
        if(correct===false && letter != word[i]){
            guessedLetters += letter;
            $(".guessedLetters").text(guessedLetters);
            guessCount--;
            drawMan();
            console.log(guessCount)
            $("#guessCount").text(guessCount);}
        //IF PLAYER LOSES
        if(guessCount === 0){
            correct = true;
            losses++;
            $(".gameOver").html("<a class='create btn btn-primary' href='#' role='button'>Start Again</a>");
            $(".losses").text(losses);
    }
       
}

$(".gameOver").click(function(){
    createWord();
    context.clearRect(0, 0, canvas.width, canvas.height);
    
})
createWord();
function drawMan(){
    
if (canvas.getContext("2d")) { // Check HTML5 canvas support
    context = canvas.getContext("2d"); // get Canvas Context object
    
    

    if(guessCount === 10){
        context.beginPath();
        context.fillStyle = "bisque"; // #ffe4c4
        context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
        // (x,y) center, radius, start angle, end angle, anticlockwise
        context.fill();

        
    }
    if(guessCount === 9){
        context.beginPath();
        context.strokeStyle = "red"; // color
        context.lineWidth = 3;
        context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
        context.stroke();
    }
    if(guessCount === 8){
        // eyes
        context.beginPath();
        context.fillStyle = "green"; // color
        context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
        context.fill();
        context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
        context.fill();
    }
    if(guessCount === 7){
        // body
        context.beginPath();
        context.moveTo(200, 80);
        context.lineTo(200, 180);
        context.strokeStyle = "navy";
        context.stroke();
    }
    if(guessCount === 6){
        // arms
        context.beginPath();
        context.strokeStyle = "#000000"; // blue
        context.moveTo(200, 80);
        context.lineTo(150, 130);
        context.moveTo(200, 80);
        context.lineTo(250, 130);
        context.stroke();
    }
    if(guessCount === 5){
        context.beginPath();
        context.strokeStyle = "#000000";
        context.moveTo(200, 180);
        context.lineTo(150, 280);
        context.moveTo(200, 180);
        context.lineTo(250, 280);
        context.stroke();
    }
    if(guessCount === 4){
        context.beginPath();
        context.strokeStyle = "#000000"; 
        context.moveTo(210, 260);
        context.lineTo(290, 260);
        context.stroke();
        // cross
    
    }
    if(guessCount === 3){
        context.beginPath();
        context.strokeStyle = "#000000"; 
        context.moveTo(200, 20);
        context.lineTo(200, 5);
        context.stroke();
    }
    if(guessCount === 2){
        context.beginPath();
        context.strokeStyle = "#000000"; 
        context.moveTo(200, 5);
        context.lineTo(250, 5);
        context.stroke();
    }
    if(guessCount === 1){
        context.beginPath();
        context.strokeStyle = "#000000"; 
        context.moveTo(250, 5);
        context.lineTo(250, 260);
        context.stroke();
    }
    if(guessCount === 0){
        context.beginPath();
    context.strokeStyle = "#000000"; // blue
    context.moveTo(170, 20);
    context.lineTo(230, 80);
    context.moveTo(230, 20);
    context.lineTo(170, 80);
    context.stroke();
    }
}
}


});
