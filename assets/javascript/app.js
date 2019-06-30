var questions = [
    {
        question: "What is the game that you let discs go down a pegged board with different money amounts at the bottom?",
        anwsers: ["It's in the Bag", "Hole in One", "Cliff Hangers", "Plinko"],
        corectAnwser: "Plinko"
    },
    {
        question: "What year did Bob Barker leave the Price is Right?",
        anwsers: ["2002", "2007", "2014", "2000"],
        corectAnwser: "2007"
    },
    {
        question: "After Bob Barker retired in 2007 this Cleland native took over the show.  Who was he?",
        anwsers: ["Jerry Sinfiled", "Adam Sandler", "Drew Carey", "Tom Hanks"],
        corectAnwser: "Drew Carey"
    },
    {
        question: "What did bob Barker say after every show?",
        anwsers: ["Support the human socity", "Have your pets spayed or neutered", "Adopt an animal", "Donate to United Way"],
        corectAnwser: "Have your pets spayed or neutered"
    },
    {
        question: "How much mone will a contestant win if they spin the 'Big Wheel' for $1.00?",
        anwsers: ["$100", "$1000", "$2500", "$500"],
        corectAnwser: "$1000"
    },
]

var numberOfQuestions = 0;
var counter = 10;
var clock;
var rightAnwsers = 0;
var wrongAnwsers = 0;
var notAnwsered = 0;
var questionsList = [];
var pastQuestions = [];
var randomQuestion = [];
var audio = new Audio('assets/audio/theme.mp3');
var horn = new Audio('assets/audio/looser.mp3');
console.log(questions[numberOfQuestions].question);
console.log(questions[numberOfQuestions].anwsers);
console.log(questions[numberOfQuestions].corectAnwser);


function random(){
randomQuestion = questions[Math.floor(Math.random() * questions.length)];
tmp = randomQuestion.question;
pastQuestions.push(tmp + "");

}

function ticker() {
    if (numberOfQuestions < 4) {
        numberOfQuestions++;
        console.log(numberOfQuestions);
        $("#response").detach();
        generateDivs();
        counter = 10;
        timerHolder();
    } else {
        endGame();
    }
}

function generateDivs(){
    timerHolder();
    //Generate the text for the question
    $(".question").prepend("<h2 id='tmp'>" + questions[numberOfQuestions].question + "</h2>");
 
    //Generate the buttons for the DIV
    for(i = 0; i< questions[numberOfQuestions].anwsers.length; i++) {
    $(".anwsers").prepend("<button id=" + "'" + questions[numberOfQuestions].anwsers[i] + "'" + "type='button' class='btn btn-primary btn-lg btn-anwsers'>" + questions[numberOfQuestions].anwsers[i] + "</button>");
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
    $("#notAnwsered").html("Not Anwsered: " + notAnwsered); 
    detachDivs();
    $(".response").prepend("<h2 id='response'>You took too long to anwser the questiong....." + "'" + questions[numberOfQuestions].corectAnwser + "'" + " was the correct anwser!!!</h2>");
    // pause();
    setTimeout(ticker, 2000);
    detachDivs();
}

function wrongAnwser(){
    // alert("You picked the wrong anwser");
    wrongAnwsers++;
    $("#losses").html("Wrong: " + wrongAnwsers); 
    detachDivs();
    $(".response").prepend("<h2 id='response'>Too bad....." + "'" + questions[numberOfQuestions].corectAnwser + "'" + " was the correct anwser.  Better luck next time.</h2>");
    // pause();
    setTimeout(ticker, 2000);
    detachDivs();
    };

function rightAnwser(){
    // alert("You picked the right anwser");
    rightAnwsers++;
    $("#wins").html("Correct: " + rightAnwsers ); 
   
    detachDivs();
    $(".response").prepend("<h2 id='response'>Great job....." + "'" + questions[numberOfQuestions].corectAnwser + "'" + " was the correct anwser</h2>");
    // pause();
    setTimeout(ticker, 2000);
    detachDivs();
    };

function detachDivs(){
    $("#tmp").detach();
    $(".btn-anwsers").detach();
};



$("#startGame").click(function() {
    audio.play();
    
$("#startGame").detach();
generateDivs();
timerHolder();
});



$(".anwsers").on("click", ".btn-anwsers", function() {
    // timerHolder();
        console.log(this.id);
        if (this.id !== questions[numberOfQuestions].corectAnwser && counter > 0){
            clearInterval(clock);
            wrongAnwser();
           };
        if(this.id === questions[numberOfQuestions].corectAnwser && counter > 0) {
            clearInterval(clock);
            rightAnwser();
            };   
        
            });


function endGame(){
  audio.pause();
  detachDivs();
  $("#response").detach();
  $(".end").html("<h2 id='congrats'>Here is how you did: </h2>");
  $(".end").append("<h3 id'results'>Corect Anwsers: " + rightAnwsers);
  $(".end").append("<h3 id'results'>Wrong Anwsers: " + wrongAnwsers);
  $(".end").append("<h3 id'results'>Not Anwsered: " + notAnwsered);
  $(".end").prepend("<img id='clap' src='https://media0.giphy.com/media/CiZuWYvJ1hnoI/giphy.gif'></img>");
//   if(rightAnwser > wrongAnwsers){
//     console.log("It should ofput the gif up");
//     $(".end").append("<img src='https://media0.giphy.com/media/CiZuWYvJ1hnoI/giphy.gif'></img>");
// }
    if(wrongAnwsers === 3 || notAnwsered === 3){
        horn.play();
    }
  };

