
var questions = {
    q1:"Which actor is known for using a technique known as 'method-acting' while filming a movie?",
	q2:"Which actress has been nominated for the Golden Globe over 30 times?",
	q3: "Which one of these four films was the costliest and most time consuming to make?",
	q4:"What is the name of Bruce Willis's character in the Die Hard Series?",
	q5:"Despite acting along big Hollywood stars since a young age this actor won his first oscar at the age of 41.",
	q6:"This actor played the lead role in 'One flew over the cuckoo's nest'.",
	q7:"What year did the first star wars movie come out?",
};

var q1answer = {
	a:"Ben Affleck",
	b: "Steve Martin",
	c: "Daniel Day-Lewis",
	d: "Larry the Cable Guy",
};

var q2answer = {
	a:"Reese Witherspoon",
	b:"Jennifer Lawrence",
	c:"Anne Hathaway",
	d:"Meryl Streep",
};

var q3answer = {
	a:"Star Wars",
	b:"Apocalypse Now",
	c:"Back To The Future",
	d:"A Very Harold & Kumar 3D Christmas",
};

var q4answer = {
	a:"John McClane",
	b:"Jack Bauer",
	c:"Alex Jones",
	d:"Dwayne Johnson",
};

var q5answer = {
	a:"Christian Bale",
	b:"Edward Norton",
	c:"Johnny Depp",
	d:"Leonardo DiCaprio",
};

var q6answer = {
	a:"Jack Nicolson",
	b:"Danny Devito",
	c:"Martin Sheen",
	d:"Audrey Hepburn",
};


var q7answer = {
	a:"1976",
	b:"1977",
	c:"1978",
	d:"1979",
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
	<input type="radio"\ name="choice"\ value="Scripting"\ > Scripting\
    <input type="radio"\ name="choice"\ value="Programming"\ > Programming\
    <input type="radio"\ name="choice"\ value="Application">\ Application\
    <input type="radio"\ name="choice"\ value="None of These">\ None of These\
    </form>');
   	$("#secondrow").append("<h3>" + questions.q2 + "</h3>");
	$("#secondrow").append("<h3>" + questions.q3 + "</h3>");
	$("#secondrow").append("<h3>" + questions.q4 + "</h3>");
	$("#secondrow").append("<h3>" + questions.q5 + "</h3>");
	$("#secondrow").append("<h3>" + questions.q6 + "</h3>");
	$("#secondrow").append("<h3>" + questions.q7 + "</h3>");
});




 
















