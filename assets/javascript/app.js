
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

var number = 100;//counter is counting down 60 seconds
var intervalId;//setting intervalId variable for clearing the interval later on


function run(){
	intervalId = setInterval(decrement,1000);
}

function decrement(){
	number--;

	$("#firstrow").html("<h2>" + number + "</h2>");

	if(number === 0){
		stop();
	}
}
 	
function stop(){
	clearInterval(intervalId);

}







$("#start").on("click",function(){

	



	$("#secondrow").html("<h3>" + questions.q1 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="choice"\ value="Ben Affleck"\ checked="checked"\ > Ben Affleck\
    <input type="radio"\ name="choice"\ value="Steve Martin"\ checked="checked"> Steve Martin\
    <input type="radio"\ name="choice"\ value="Daniel Day-Lewis">\ Daniel Day-Lewis\
    <input type="radio"\ name="choice"\ value="Larry the Cable Guy">\ Larry the Cable Guy\
    </form>');
   	$("#secondrow").append("<h3>" + questions.q2 + "</h3>");
   	$("#secondrow").append('<form>\
	<input type="radio"\ name="choice"\ value="Reese Witherspoon"\ > Reese Witherspoon\
    <input type="radio"\ name="choice"\ value="Jennifer Lawrence"\ > Jennifer Lawrence\
    <input type="radio"\ name="choice"\ value="Anne Hathaway">\ Anne Hathaway\
    <input type="radio"\ name="choice"\ value="Meryl Streep">\ Meryl Streep\
    </form>');
	$("#secondrow").append("<h3>" + questions.q3 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="choice"\ value="Star Wars"\ > Star Wars\
    <input type="radio"\ name="choice"\ value="Apocalypse Now"\ > Apocalypse Now\
    <input type="radio"\ name="choice"\ value="Back to the Future">\ Back to the Future\
    <input type="radio"\ name="choice"\ value="A Very Harold and Kumar 3D Christmas">\ A Very Harold and Kumar 3D Christmas\
    </form>');
	$("#secondrow").append("<h3>" + questions.q4 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="choice"\ value="John McClane"\ > John McClane\
    <input type="radio"\ name="choice"\ value="Jack Bauer"\ > Jack Bauer\
    <input type="radio"\ name="choice"\ value="Alex Jones">\ Alex Jones\
    <input type="radio"\ name="choice"\ value="Dwayne Johnson">\ Dwayne Johnson\
    </form>');
	$("#secondrow").append("<h3>" + questions.q5 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="choice"\ value="Christian Bale"\ > Christian Bale\
    <input type="radio"\ name="choice"\ value="Edward Norton"\ > Edward Norton\
    <input type="radio"\ name="choice"\ value="Johnny Depp">\ Johnny Depp\
    <input type="radio"\ name="choice"\ value="Leonardo DiCaprio">\ Leonardo DiCaprio\
    </form>');
	$("#secondrow").append("<h3>" + questions.q6 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="choice"\ value="Jack Nicolson"\ > Jack Nicolson\
    <input type="radio"\ name="choice"\ value="Danny Devito"\ > Danny Devito\
    <input type="radio"\ name="choice"\ value="Martin Sheen">\ Martin Sheen\
    <input type="radio"\ name="choice"\ value="Marlon Brando">\ Marlin Brando\
    </form>');
	$("#secondrow").append("<h3>" + questions.q7 + "</h3>");
	$("#secondrow").append('<form>\
	<input type="radio"\ name="choice"\ value="1976"\ onclick = "myFunction()" \ > 1976\
    <input type="radio"\ name="choice"\ value="1977"\ > 1977\
    <input type="radio"\ name="choice"\ value="1978">\ 1978\
    <input type="radio"\ name="choice"\ value="1979">\ 1979\
    </form>');


function myFunction(){
	var choice = document.form[0];
	var i;
	for(i=0; i <choice.length; i++){
		if(choice[i].checked){
			console.log("success");
		}
	}
}


});









//create a function which checks for the correct values of the choices selected
//it will then count them and tally them based on what is




//if the player choice is equal to the value of the correct answer then correct counter will go 
// up

//else, then the the incorrect counter will go up

// at when the game ends the results will replace the questions on the


 
















