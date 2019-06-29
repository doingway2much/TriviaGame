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


function detachDivs(){
    $("#tmp").detach();
    $(".btn-anwsers").detach();
};



$("#startGame").click(function() {
    // setInterval(function() {
    //     counter--;
    //     $("#counter").text(counter);
    // }, 1000);
    $("#startGame").detach();
        generateDivs();
        $(".btn-anwsers").on("click", function() {
        console.log(this.id);
        if (this.id !== randomQuestion.corectAnwser && counter > 0){
            alert("You picked the wrong anwser");
        };
        if(this.id === randomQuestion.corectAnwser && counter > 0) {
            alert("You picked the right anwser");
            detachDivs();
            $(".response").prepend("<h2 id='congrats'>Great job....." + "'" + randomQuestion.corectAnwser + "'" + " was the correct anwser</h2>");

            // randomQuestion = [];
            // random();
            // checkQuestion();
            
            // generateDivs();
            // console.log(pastQuestions);    
            // console.log(randomQuestion);      
            // counter = 10;
            
        }});
        
   
});