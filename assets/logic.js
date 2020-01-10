//The array that the random numbers function will select from:
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//The user's result
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
    
        document.getElementById("mysticResult").innerHTML = mysticResult.join(" ");
        checkMatch();

    } else {
        clearResult();
        getMysticResult();
    }
    
}

function checkMatch(){
    if(mysticResult === 111){
        // alert("You got 111")
    } 
    // else if(mysticResult === 222){

    // } else if(mysticResult === 333){

    // } else if(mysticResult === 444){

    // } else if(mysticResult === 555){

    // } else if(mysticResult === 666){

    // } else if(mysticResult === 777){

    // } else if(mysticResult === 888){

    // } else if(mysticResult === 999){

    // }
     else {
        // alert("Not a match");
    }

}

// function modalOne(){
//     modal.style.display = "block";
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
