document.addEventListener("DOMContentLoaded", function() {

    let input = document.getElementsByTagName('input');
    console.log(input);
    let answerKey = ["Daniel Day-Lewis", "Meryl Streep", "Apocalypse Now", "John McClane", "Leonardo DiCaprio", "Jack Nicolson", "1980"];
    //loop through the array of inputs and add eventlisteners to each button
    let answersArr = []; //array that will be populated with the right answers
    let nameArr = [];
    let number = 60;
    let intervalId;
    let correctAnswers = 0;

    (function startTimer() {
        intervalId = setInterval(decrement, 1000);
    })();

    function decrement() {
        number--;
        document.getElementById("timer").innerHTML = number;
        if (number === 0) {
            clearInterval(intervalId);
            for (let i = 0; i < answersArr.length; i++) {
                if (answerKey.indexOf(answersArr[i]) !== -1) {
                  correctAnswers++;
                }
            }
            document.getElementById("timer").innerHTML = "You got " + correctAnswers + "/7 correct!";

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