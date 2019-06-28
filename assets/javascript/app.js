

var data = {
    question1: {
        question: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        anwsers: ["Ping! Ping!", "Beep! Beep!", "Aooga! Aooga!", "Vroom! Vroom!"],
        corectAnwser: "Beep! Beep!"
    },
    question2: {
        question: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        anwsers: ["Ping! Ping!", "Beep! Beep!", "Aooga! Aooga!", "Vroom! Vroom!"],
        corectAnwser: "Beep! Beep!"
    }
}

var random =[];
data.random
console.log(data.question1.question);
console.log(data.question1.anwsers.length);




$("#startGame").click(function() {
    $("#startGame").detach();
    $("#question").append("<h2>" + data.question1.question + "</h2>");
    
    for(i = 0; i< data.question1.anwsers.length; i++) {
        $(".anwsers").append("<button id=" + "'" + data.question1.anwsers[i] + "'" + "type='button' class='btn btn-primary btn-lg btn-anwsers'>" + data.question1.anwsers[i] + "</button>");
        }
        $(".btn-anwsers").click(function() {
        console.log(this.id);
        if(this.id === data.question1.corectAnwser) {
            alert("You picked the right anwser")
        }
        });
        // if(this === data.question1.corectAnwser){
        //     alert("You guessed the right anwser")
        // }
        // console.log(data.question1.anwsers[i]);
});