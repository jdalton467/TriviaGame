document.addEventListener("DOMContentLoaded", function() {

    var input = document.getElementsByTagName('input');
    console.log(input);

    //loop through the array of inputs and add eventlisteners to each button
    var answersArr = []; //array that will be populated with the right answers
    var nameArr =[];
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('click', function(event) {
            let value = input[i].value;
            let name = input[i].name;
            if (answersArr.indexOf(value) === -1 && nameArr.indexOf(name) === -1) {
            answersArr.push(value);
            nameArr.push(name);
            } else if(nameArr.indexOf(name) !== -1){
              // nameArr.splice(nameArr.indexOf(name), 1, name);
              answersArr.splice(nameArr.indexOf(name), 1, value);
            }
            console.log(answersArr);
            console.log(nameArr);
        })
    }

    
});