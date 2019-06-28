

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


var questionsList = [];
var pastQuestions = [];
var andomQuestion = [];

// for(i = 0; i < questions.length; i++) {
//     questionsList.push(questions[i].question + "");
// }

function random(){
randomQuestion = questions[Math.floor(Math.random() * questions.length)];
pastQuestion = randomQuestion.question;
pastQuestions.push(pastQuestion + "");
console.log(pastQuestion);
}
random();
console.log(randomQuestion);

// console.log(questions[1].question);
// console.log(data.question1.anwsers.length);

// Math.floor(Math.random) * 


$("#startGame").click(function() {
    $("#startGame").detach();
    $("#question").append("<h2>" + randomQuestion.question + "</h2>");
    // if(randomQuestion === questions[0].question {
    for(i = 0; i< randomQuestion.anwsers.length; i++) {
        $(".anwsers").append("<button id=" + "'" + randomQuestion.anwsers[i] + "'" + "type='button' class='btn btn-primary btn-lg btn-anwsers'>" + randomQuestion.anwsers[i] + "</button>");
        }
        $(".btn-anwsers").click(function() {
        console.log(this.id);
        if(this.id === randomQuestion.corectAnwser) {
            alert("You picked the right anwser")
        } else {
            alert("You picked the wronganwser");
        }});
    });