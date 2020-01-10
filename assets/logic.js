//The array that the random numbers function will select from
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getRandom(arr) {
//     var randomNumber = Math.floor(Math.random() * arr.length);
//     console.log(randomNumber);
//     return randomNumber;
//   }

var mysticResult = [];

function clearResult(){
    mysticResult = [];
}

function getMysticResult(){

    if(mysticResult.length < 3){
        for(var i = 0; i < 3; i++){
            var randomNumber = Math.floor(Math.random() * numbers.length);
            mysticResult.push(randomNumber);
        }
        
        console.log(mysticResult);
    
        document.getElementById("mysticResult").innerHTML = mysticResult.join(" ");

    } else {
        clearResult();
        getMysticResult();
    }
    
    
}

// getMysticResult();

