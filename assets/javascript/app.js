document.addEventListener("DOMContentLoaded", function() {

    let input = document.getElementsByTagName('input');
    let start = document.getElementById("start");
    let submit = document.getElementById("submit");
    console.log(input);
    let answerKey = ["Daniel Day-Lewis", "Meryl Streep", "Apocalypse Now", "John McClane", "Leonardo DiCaprio", "Jack Nicolson", "1980", "The Dark Knight", "Dr.Strangelove", "Tron"];
    //loop through the array of inputs and add eventlisteners to each button
    let answersArr = []; //array that will be populated with the right answers
    let nameArr = [];
    let correctIndex = [];//indexing the questions correct
    let wrongIndex = []; //indexing the questions that were wrong
    let seconds = 60;
    let minutes = 1;
    let intervalId;
    let correctAnswers = 0;

    start.addEventListener('click', function(event) { //starts the game, makes questions and choices visible
        startTimer(); //starts the times function
        this.style.display = "none";
        setTimeout(() => document.getElementById("TriviaWrapper").style.display = "block", 1000);
        setTimeout(() => document.getElementById("timer").style.visibility = "visible", 1000);
        setTimeout(() => document.getElementById("submit").style.display = "block", 1000);
        // setTimeout(() => document.getElementsByClassName("left")[0].style.display = "block", 1000);
        // setTimeout(() => document.getElementsByClassName("right")[0].style.display = "block", 1000);
    })

    submit.addEventListener('click', function(event) {
        if (answersArr.length < answerKey.length) {
            alert("answer as many as you can!");
        } else {
            stop();
        }
    })



    function startTimer() {
        intervalId = setInterval(decrement, 1000); //decreases seconds variable every second
    };

    function stop() {
        clearInterval(intervalId);
        for (let i = 0; i < input.length; i++) {
            input[i].setAttribute('disabled', true);
            document.getElementById('submit').setAttribute('disabled', true);
        }
        for (let i = 0; i < answersArr.length; i++) {
            if (answerKey.indexOf(answersArr[i]) !== -1) {
                correctAnswers++;
                correctIndex.push(i+1);

            }else{
                wrongIndex.push(i+1);
            }
        }
        document.getElementById("timer").innerHTML = "You got " + correctAnswers + "/" + answerKey.length + " correct!";
        var correct = document.getElementsByClassName("correct");
        for(var j = 0; j < correctIndex.length; j++){
            // console.log(correctIndex[j]);
            var correctString = correctIndex[j].toString();
            console.log(correctString);
            document.getElementsByClassName(correctString)[0].style.backgroundColor = "#7FFF18";
        }
          for(var j = 0; j < wrongIndex.length; j++){
            var wrongString = wrongIndex[j].toString();
            document.getElementsByClassName(wrongString)[0].style.backgroundColor = "#F4A137";
        }
    }

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
            stop();
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

    document.getElementById('submit').addEventListener('click', function() {
       window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, false);

    document.getElementsByClassName('right')[0].addEventListener('click', function() {
        $('#TriviaWrapper').animate({
            scrollLeft: '+=650'
        }, 200)
    }, false);

    document.getElementsByClassName('left')[0].addEventListener('click', function() {
        $('#TriviaWrapper').animate({
            scrollLeft: '-=650'
        }, 200)
    }, false);
});