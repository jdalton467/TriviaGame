
var questions = {
	q1:"Which actor is known for using a technique known as 'method-acting' while filming a movie?",
	q2:"Which actress has one the most amount of academy awards of all time?",
	q3: "Which actress has been nominated for the Golden Globe over 30 times?",
	q4: "Which one of these four films was the costliest and most time consuming to make?",
	q5: "What is the name of Bruce Willis's character in the Die Hard Series?",
	q6: "Despite acting along big Hollywood stars since a young age this actor won his first oscar at the age of 41.",
	q7: "This actor was the lead role in 'One flew over the cuckoo's nest.",
	q8: "What year did the first star wars movie come out?",
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

$("#start").on("click", function(){


	$("#gameDisplay").html(questions.q1);
	$("#gameDisplay").append(questions.q2);

});














