var questions = [
    {
        question: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        anwsers: ["Ping! Ping!", "Beep! Beep!", "Aooga! Aooga!", "Vroom! Vroom!"],
        corectAnwser: "Beep! Beep!"
    },
    {
        question: "According to an Aesop's fable, you shouldn't count what before they are hatched?",
        anwsers: ["Fingers", "Chickens", "Snakes", "Guppies"],
        corectAnwser: "Chickens"
    },
    {
        question: "Which of the following is the symbol sometimes placed over the 'n' in the Spanish language?",
        anwsers: ["Tilde", "Umlaut", "Circumflex", "Cedilla"],
        corectAnwser: "Tilde"
    },
]
var counter = 10;
var clock;
var rightAnwsers = 0;
var wrongAnwsers = 0;
var notAnwsered = 0;
var questionsList = [];
var pastQuestions = [];
var randomQuestion = [];

function random(){
randomQuestion = questions[Math.floor(Math.random() * questions.length)];
tmp = randomQuestion.question;
pastQuestions.push(tmp + "");
// console.log(pastQuestions);
}
random();
// console.log(randomQuestion);


function generateDivs(){
    //Generate the text for the question
    $("#question").prepend("<h2 id='tmp'>" + randomQuestion.question + "</h2>");
    //Put previous question in an array 
    // pastQuestions.push(randomQuestion.question + "");
    //Generate the buttons for the DIV
    for(i = 0; i< randomQuestion.anwsers.length; i++) {
    $(".anwsers").prepend("<button id=" + "'" + randomQuestion.anwsers[i] + "'" + "type='button' class='btn btn-primary btn-lg btn-anwsers'>" + randomQuestion.anwsers[i] + "</button>");
    }};

function checkQuestion(){
    for(i = 0; i < questionsList.length; i++){
        if (Object.values(questionsList).indexOf(pastQuestions) > -1){
            console.log("The value was there");
        
        }else{
    
        }
    }
};

// Timer function
function timerHolder() {
    console.log("timerHolder");
    clearInterval(clock);
    clock = setInterval(seconds, 1000);
    function seconds() {
        if (counter === 0) {
            clearInterval(clock);
            timesUp();
        } else if (counter > 0) {
            counter--;
        }
        $('#counter').html(counter);
    }

}

function timesUp(){
    notAnwsered++;
    $("#losses").prepend("<div class='btn btn-primary btn-lg'  id='notAnwseredButton'>Not Anwsered: " + notAnwsered + "</div>");
    detachDivs();
    $(".response").prepend("<h2 id='timesUp'>You took too long to anwser the questiong....." + "'" + randomQuestion.corectAnwser + "'" + " was the correct anwser!!!</h2>");
}

function detachDivs(){
    $("#tmp").detach();
    $(".btn-anwsers").detach();
};



$("#startGame").click(function() {
$("#startGame").detach();
generateDivs();
timerHolder();
});


$(".anwsers").on("click", ".btn-anwsers", function() {
    timerHolder();
        console.log(this.id);
        if (this.id !== randomQuestion.corectAnwser && counter > 0){
            alert("You picked the wrong anwser");
            wrongAnwsers++;
            $("#losses").prepend("<div class='btn btn-primary btn-lg'  id='lossesButton'>Losses: " + wrongAnwsers + "</div>");
            $(".response").prepend("<h2 id='sorry'>Too bad....." + "'" + randomQuestion.corectAnwser + "'" + " was the correct anwser.  Better luck next time.</h2>");
        };
        if(this.id === randomQuestion.corectAnwser && counter > 0) {
            alert("You picked the right anwser");
            rightAnwsers++;
            $("#wins").append("<div class='btn btn-primary btn-lg'  id='winsButton'>Wins: " + rightAnwsers + "</div>");
            console.log(rightAnwsers);
            detachDivs();
            $(".response").prepend("<h2 id='congrats'>Great job....." + "'" + randomQuestion.corectAnwser + "'" + " was the correct anwser</h2>");
            
            randomQuestion = [];
            random();
            checkQuestion();
            
            generateDivs();
            console.log(pastQuestions);    
            console.log(randomQuestion);      
            counter = 10;
            
        }});
        
   
