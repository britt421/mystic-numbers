//The array that the random numbers function will select from
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//The array that 
var mysticResult = [0, 1, 2];

function getRandom(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    console.log(randomNumber);
    // document.getElementById("fortune").innerHTML = randomNumber
  }

getRandom(numbers);

