document.addEventListener("DOMContentLoaded", function() {

    let input = document.getElementsByTagName('input');
    let start = document.getElementById("start");
    console.log(input);
    let answerKey = ["Daniel Day-Lewis", "Meryl Streep", "Apocalypse Now", "John McClane", "Leonardo DiCaprio", "Jack Nicolson", "1980", "The Dark Knight", "Dr.Strangelove", "Tron"];
    //loop through the array of inputs and add eventlisteners to each button
    let answersArr = []; //array that will be populated with the right answers
    let nameArr = [];
    let seconds = 60;
    let minutes = 1;
    let intervalId;
    let correctAnswers = 0;

    start.addEventListener('click', function(event) { //starts the game, makes questions and choices visible
        startTimer(); //starts the times function
        this.style.display = "none";
        setTimeout(() => document.getElementById("TriviaWrapper").style.display="block", 1000);
        setTimeout(() => document.getElementById("timer").style.visibility="visible", 1000);
    })

    function startTimer() {
        intervalId = setInterval(decrement, 1000); //decreases seconds variable every second
    };

    function decrement() {
        seconds--; 
        document.getElementById("timer").innerHTML = minutes + " : " + seconds;
        if (seconds < 10) {
            document.getElementById("timer").innerHTML = minutes + " : " + "0" + seconds;
        }
        if (seconds < 0 & minutes !== 0) {
            minutes--;
            seconds = 60;
            decrement();
        } else if (seconds === 0 && minutes === 0) {
            clearInterval(intervalId);
            for (let i = 0; i < input.length; i++) {
                input[i].setAttribute('disabled', true);
            }
            for (let i = 0; i < answersArr.length; i++) {
                if (answerKey.indexOf(answersArr[i]) !== -1) {
                    correctAnswers++;
                }
            }
            document.getElementById("timer").innerHTML = "You got " + correctAnswers + "/"+ answerKey.length + " correct!";

        }

    }



    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('click', function(event) {
            let value = input[i].value;
            let name = input[i].name;
            if (answersArr.indexOf(value) === -1 && nameArr.indexOf(name) === -1) {
                answersArr.push(value);
                nameArr.push(name);
            } else if (nameArr.indexOf(name) !== -1) {
                // nameArr.splice(nameArr.indexOf(name), 1, name);
                answersArr.splice(nameArr.indexOf(name), 1, value);
            }
            console.log(answersArr);
            console.log(nameArr);
        })
    }


});