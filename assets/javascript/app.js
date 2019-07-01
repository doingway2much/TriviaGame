var questions = [
    {
        question: "What is the game that you let discs go down a pegged board with different money amounts at the bottom?",
        anwsers: ["It's in the Bag", "Hole in One", "Cliff Hangers", "Plinko"],
        corectAnwser: "Plinko",
        url: "https://media1.giphy.com/media/rDUEVMgWYYWTC/giphy.gif?cid=790b76115d19f35144523574590f561a&rid=giphy.gif",
        fail: "https://media0.giphy.com/media/mxP1qg93p6vlK/giphy.gif?cid=790b76115d19f9203255323741e68548&rid=giphy.gif"
    },
    {
        question: "What year did Bob Barker leave the Price is Right?",
        anwsers: ["2002", "2007", "2014", "2000"],
        corectAnwser: "2007",
        url: "http://media.herald-dispatch.com/blog/tuned/uploaded_images/Bob-Barker-701488.jpg",
        fail: "https://media0.giphy.com/media/mxP1qg93p6vlK/giphy.gif?cid=790b76115d19f9203255323741e68548&rid=giphy.gif"
    },
    {
        question: "After Bob Barker retired in 2007 this Cleland native took over the show.  Who is he?",
        anwsers: ["Jerry Sinfiled", "Adam Sandler", "Drew Carey", "Tom Hanks"],
        corectAnwser: "Drew Carey",
        url: "https://ewedit.files.wordpress.com/2017/09/drew10.jpg",
        fail: "https://media0.giphy.com/media/mxP1qg93p6vlK/giphy.gif?cid=790b76115d19f9203255323741e68548&rid=giphy.gif"
    },
    {
        question: "What did bob Barker say after every show?",
        anwsers: ["Support the human socity", "Have your pets spayed or neutered", "Adopt an animal", "Donate to United Way"],
        corectAnwser: "Have your pets spayed or neutered",
        url: "https://gifimage.net/wp-content/uploads/2018/10/bob-barker-spay-and-neuter-your-pets-gif-1.gif",
        fail: "https://media0.giphy.com/media/mxP1qg93p6vlK/giphy.gif?cid=790b76115d19f9203255323741e68548&rid=giphy.gif"
    },
    {
        question: "How much money will a contestant win if they spin the 'Big Wheel' for $1.00?",
        anwsers: ["$100", "$1000", "$2500", "$500"],
        corectAnwser: "$1000",
        url:"https://usatftw.files.wordpress.com/2016/10/priceisright.gif",
        fail: "https://media0.giphy.com/media/mxP1qg93p6vlK/giphy.gif?cid=790b76115d19f9203255323741e68548&rid=giphy.gif"
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
        $("#responseImg").detach();
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
    $(".anwsers").prepend("<button id=" + "'" + questions[numberOfQuestions].anwsers[i] + "'" + "type='button' class='pr'>" + questions[numberOfQuestions].anwsers[i] + "</button>");
    }};



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
    $(".response").prepend("<img id='responseImg' class='quickImage' src='" + questions[numberOfQuestions].fail + "'" +  "></img>");
    $(".response").prepend("<h2 id='response'>Too bad....." + "'" + questions[numberOfQuestions].corectAnwser + "'" + " was the correct anwser.  Better luck next time.</h2>");
    setTimeout(ticker, 2000);
    detachDivs();
    };

function rightAnwser(){
    rightAnwsers++;
    $("#wins").html("Correct: " + rightAnwsers ); 
   
    detachDivs();
    $(".response").prepend("<img id='responseImg' class='quickImage' src='" + questions[numberOfQuestions].url + "'" +  "></img>");
    $(".response").prepend("<h2 id='response'>Great job....." + "'" + questions[numberOfQuestions].corectAnwser + "'" + " was the correct anwser</h2>");
    setTimeout(ticker, 2000);
    detachDivs();
    };

function detachDivs(){
    $("#tmp").detach();
    $(".pr").detach();
};

$(".end").on("click", "#playAgain", function() {
    audio.play();
    rightAnwsers =0;
    wrongAnwsers =0;
    notAnwsered =0;
    numberOfQuestions =0;
    $(".ending").detach();
$   ("#playAgain").detach();

generateDivs();
timerHolder();
});

$("#startGame").click(function() {
    audio.play();
    
$("#startGame").detach();
generateDivs();
timerHolder();
});



$(".anwsers").on("click", ".pr", function() {
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
  $("#responseImg").detach();
  $(".end").html("<h2 id='congrats' class='ending'>Here is how you did: </h2>");
  $(".end").append("<h3 id'results' class='ending'>Corect Anwsers: " + rightAnwsers);
  $(".end").append("<h3 id'results' class='ending'>Wrong Anwsers: " + wrongAnwsers);
  $(".end").append("<h3 id'results' class='ending'>Not Anwsered: " + notAnwsered);
  $(".end").prepend("<img id='clap' class='ending' src='https://media0.giphy.com/media/CiZuWYvJ1hnoI/giphy.gif'></img>");
  $(".end").append("<button id='playAgain' type='button' class='pr'>Play Agian</button>");
//   if(rightAnwser > wrongAnwsers){
//     console.log("It should ofput the gif up");
//     $(".end").append("<img src='https://media0.giphy.com/media/CiZuWYvJ1hnoI/giphy.gif'></img>");
// }
    if(wrongAnwsers === 3 || notAnwsered === 3){
        horn.play();
    }
  };

