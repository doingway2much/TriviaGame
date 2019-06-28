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

    // if (counter == 0) {
    //    alert("Times up you")
    //     clearInterval(interval);
    // }


var questionsList = [];
var pastQuestions = [];
var andomQuestion = [];

function random(){
randomQuestion = questions[Math.floor(Math.random() * questions.length)];
pastQuestion = randomQuestion.question;
pastQuestions.push(pastQuestion + "");
// console.log(pastQuestion);
}
random();
// console.log(randomQuestion);


function generateDivs(){
    $("#question").prepend("<h2 id='tmp'>" + randomQuestion.question + "</h2>");
    for(i = 0; i< randomQuestion.anwsers.length; i++) {
    $(".anwsers").prepend("<button id=" + "'" + randomQuestion.anwsers[i] + "'" + "type='button' class='btn btn-primary btn-lg btn-anwsers'>" + randomQuestion.anwsers[i] + "</button>");
    }};

function detachDivs(){
    $("#tmp").detach();
    $(".btn-anwsers").detach();
};



$("#startGame").click(function() {
    setInterval(function() {
        counter--;
        $("#counter").text(counter);
    }, 1000);
    $("#startGame").detach();
        generateDivs();
        $(".btn-anwsers").click(function() {
        console.log(this.id);
        if(this.id === randomQuestion.corectAnwser && counter > 0) {
            alert("You picked the right anwser");
            random();
            detachDivs();
            generateDivs();
            console.log(randomQuestion);        
            counter = 10;
        } else {
            alert("You picked the wronganwser");
        }});
   
    });