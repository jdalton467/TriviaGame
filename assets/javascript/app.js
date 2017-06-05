$("input").on('click', function(){
	console.log(this)
});

var questions = {
    q1:"Which actor is known for using a technique known as 'method-acting' while filming a movie?",
	q2:"Which actress has been nominated for the Golden Globe over 30 times?",
	q3: "Which one of these four films was the costliest and most time consuming to make?",
	q4:"What is the name of Bruce Willis's character in the Die Hard Series?",
	q5:"Despite acting along big Hollywood stars since a young age this actor won his first oscar at the age of 41.",
	q6:"This actor played the lead role in 'One Flew Over the Cuckoo's Nest'.",
	q7:"What year did the first star wars movie come out?",
};





$("#start").on("click", run);

var number = 30;//counter is counting down 60 seconds
var intervalId;//setting intervalId variable for clearing the interval later on


function run(){
	intervalId = setInterval(decrement,1000);
}

function decrement(){
	number--;

	$("#firstrow").html("<h2>" + number + "</h2>");

	if(number === 0){
		stop();
		$("#gameDisplay").append(correctTotal);
		$("#gameDisplay").append(incorrectTotal);
	}
}
 	
function stop(){
	clearInterval(intervalId);

}

for(i = 0;i<8;i++){
	var correctCounteri=0;
}



var correct = false;
var incorrect = false;
var correctCounter = 0;
var incorrectCounter = 0;
var correctTotal = 0;
var incorrectTotal = 0;
var selected = false;



$("#start").on("click",function(){

$(document).on('click','input[name="question1"]',function(){
	var value = document.querySelector('input[name = "question1"]:checked').value;
	
	if(value == "Daniel Day-Lewis"){
		correct = true;
		if(selected == false){
			if(correct){
			correctCounter=1;
			incorrectCounter = 0;
			correctTotal = correctTotal + correctCounter;
			selected = true;
			console.log(correctTotal);
				}
		}
		
		
	}else{
		incorrect = true;
			if(selected == false){
				incorrectCounter=1;
				correctCounter = 0;
				incorrectTotal = incorrectTotal + incorrectCounter;
				selected = true;
				console.log(incorrectTotal);
			}
		}
	

})

	$("#secondrow").html("<h3>" + questions.q1 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="question1"\ value=""\ > Ben Affleck\
    <input type="radio"\ name="question1"\ value=""\ > Steve Martin\
    <input type="radio"\ name="question1"\ value="">\ Daniel Day-Lewis\
    <input type="radio"\ name="question1"\ value="Larry the Cable Guy">\ Larry the Cable Guy\
    </form>');

    
   	
$(document).on('click','input[name="question2"]',function(){
	var value = document.querySelector('input[name = "question2"]:checked').value;
	// alert(value);
	// alert(value);
	if(value == "Meryl Streep"){
		correct=true;
		if(correct){
			correctCounter=1;
			incorrectCounter = 0;
			correctTotal = correctTotal + correctCounter;
			console.log(correctTotal);
			}
		
	}else{
		incorrect = true;
			if(incorrect){
				incorrectCounter=1;
				correctCounter = 0;
				incorrectTotal = incorrectTotal + incorrectCounter;
				console.log(incorrectTotal);
			}
		}
})

   	$("#secondrow").append("<h3>" + questions.q2 + "</h3>");
   	$("#secondrow").append('<form>\
	<input type="radio"\ name="question2"\ value="Reese Witherspoon"\ > Reese Witherspoon\
    <input type="radio"\ name="question2"\ value="Jennifer Lawrence"\ > Jennifer Lawrence\
    <input type="radio"\ name="question2"\ value="Anne Hathaway">\ Anne Hathaway\
    <input type="radio"\ name="question2"\ value="Meryl Streep">\ Meryl Streep\
    </form>');

$(document).on('click','input[name="question3"]',function(){
	var value = document.querySelector('input[name = "question3"]:checked').value;
	// alert(value);
	// alert(value);
	if(value == "Apocalypse Now"){
		correct=true;
		if(correct){
			correctCounter++;
			return (correctCounter < 1);
			// correct = false;
			correctTotal = correctTotal + correctCounter;
			
			console.log(correctTotal);
			
		}
		
	}else{
		incorrect = true;
			if(incorrect){
				incorrectCounter++;
				return (incorrectCounter < 1);
				// incorrect = false;
				// correctCounter = 0;
				incorrectTotal = incorrectTotal + incorrectCounter;
				
				console.log(incorrectTotal);
			}
		}

})
	$("#secondrow").append("<h3>" + questions.q3 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="question3"\ value="Star Wars"\ > Star Wars\
    <input type="radio"\ name="question3"\ value="Apocalypse Now"\ > Apocalypse Now\
    <input type="radio"\ name="question3"\ value="Back to the Future">\ Back to the Future\
    <input type="radio"\ name="question3"\ value="A Very Harold and Kumar 3D Christmas">\ A Very Harold and Kumar 3D Christmas\
    </form>');

 $(document).on('click','input[name="question4"]',function(){
	var value = document.querySelector('input[name = "question4"]:checked').value;
	// alert(value);
	if(value == "John McClane"){
		correct=true;
		if(correct){
			correctCounter=1;
		}
		
	}else{
		incorrect = true;
			if(incorrect){
				incorrectCounter=1;
			}
		}

})
	$("#secondrow").append("<h3>" + questions.q4 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="question4"\ value="John McClane"\ > John McClane\
    <input type="radio"\ name="question4"\ value="Jack Bauer"\ > Jack Bauer\
    <input type="radio"\ name="question4"\ value="Alex Jones">\ Alex Jones\
    <input type="radio"\ name="question4"\ value="Dwayne Johnson">\ Dwayne Johnson\
    </form>');

   $(document).on('click','input[name="question5"]',function(){
	var value = document.querySelector('input[name = "question5"]:checked').value;
	// alert(value);
	// alert(value);
	if(value == "Leonardo DiCaprio"){
		correct=true;
		if(correct){
			correctCounter=1;
		}
		
	}else{
		incorrect = true;
			if(incorrect){
				incorrectCounter=1;
			}
		}

})
	$("#secondrow").append("<h3>" + questions.q5 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="question5"\ value="Christian Bale"\ > Christian Bale\
    <input type="radio"\ name="question5"\ value="Edward Norton"\ > Edward Norton\
    <input type="radio"\ name="question5"\ value="Johnny Depp">\ Johnny Depp\
    <input type="radio"\ name="question5"\ value="Leonardo DiCaprio">\ Leonardo DiCaprio\
    </form>');

 $(document).on('click','input[name="question6"]',function(){
	var value = document.querySelector('input[name = "question6"]:checked').value;
	// alert(value);
	// alert(value);
	if(value == "Jack Nicolson"){
		correct=true;
		if(correct){
			correctCounter=1;
		}
		
	}else{
		incorrect = true;
			if(incorrect){
				incorrectCounter=1;
			}
		}

})
	$("#secondrow").append("<h3>" + questions.q6 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="question6"\ value="Jack Nicolson"\ > Jack Nicolson\
    <input type="radio"\ name="question6"\ value="Danny Devito"\ > Danny Devito\
    <input type="radio"\ name="question6"\ value="Martin Sheen">\ Martin Sheen\
    <input type="radio"\ name="question6"\ value="Marlon Brando">\ Marlin Brando\
    </form>');

 $(document).on('click','input[name="question7"]',function(){
	var value = document.querySelector('input[name = "question7"]:checked').value;
	// alert(value);
	// alert(value);
	if(value == "1977"){
		correct=true;
		if(correct){
			correctCounter=1;
		}
		
	}else{
		incorrect = true;
			if(incorrect){
				incorrectCounter=1;
			}
		}

})
	$("#secondrow").append("<h3>" + questions.q7 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="question7"\ value="1976"\ onclick="myFunction();" \ > 1976\
    <input type="radio"\ name="question7"\ value="1977"\ > 1977\
    <input type="radio"\ name="question7"\ value="1978">\ 1978\
    <input type="radio"\ name="question7"\ value="1979">\ 1979\
    </form>');

});


// correctTotal = correctCounter1+correctCounter2;
// console.log(correctTotal);

 
















