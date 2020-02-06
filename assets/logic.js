//The array that the random numbers function will select from:
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//The user's result
var mysticResult = [];

//This clears the result so that a new result can load
function clearResult(){
    mysticResult = [];
}

//This shows the user's mystic numbers on the "slot machine"
function getMysticResult(){
  document.getElementById("mysticResult").innerHTML = mysticResult.join(" ");
}


function getMysticResult(){

    if(mysticResult.length < 3){
        for(var i = 0; i < 3; i++){
            var randomNumber = Math.floor(Math.random() * numbers.length);
            mysticResult.push(randomNumber);
        }
    
        document.getElementById("mysticResult").innerHTML = mysticResult.join(" ");
        checkMatch(mysticResult);
       
    } else {
        clearResult();
        getMysticResult();
    }
    
}

function checkMatch(arr){
  // var text;
  var arrString = arr.toString();
  if (arrString === "1,1,1"){
    console.log("Matched with 111");
  } else if (arrString === "2,2,2"){
    console.log("Matched with 222");
  } else if (arrString === "3,3,3"){
    console.log("Matched with 333");
  } else if (arrString === "4,4,4"){
    console.log("Matched with 444");
  } else if (arrString === "5,5,5"){
    console.log("Matched with 555");
  } else if (arrString === "6,6,6"){
    console.log("Matched with 666");
  } else if (arrString === "7,7,7"){
    console.log("Matched with 777");
  } else if (arrString === "8,8,8"){
    console.log("Matched with 888");
  } else if (arrString === "9,9,9"){
    console.log("Matched with 999");
  } else {
    console.log("No Matches Yet!");
  }
}

// function getMysticMessage(){
// // checkMatch(mysticResult);
// // var text = "You are lucky!"
// // document.getElementById("mysticMessage").innerHTML = text;
// }

// function checkMatch (arr1, arr2){

//   for (var i = 0; i < arr1.length; i++){
//     var firstArr= arr1[i]; }

//   for (var j = 0; j < arr2.length; j++){
//     var secondArr= arr2[j]; }


//  if (arr1.length !== arr2.length){
//     return false;
//  } else if (firstArr !== secondArr) {
//     return false;
//    } else {
//     return true;   
//    }

//  };

//  checkMatch(mysticResult, magicSet);

//  function matchModule() {
//    var text;
//    switch (mysticResult){
//     case "[1,1,1]":
//       text = "You are lucky";
//       break;
//     case "[2,2,2]":
//       text = "You are very lucky";
//       break;
//     default:
//       text = "Not yet...try again!";
//    }
//    document.getElementById("mysticMessage").innerHTML = text;
//  }


//Instead of writing a function for each modal, I can create an array of objects
//and dynamically populate the modal with the necessary information
//Friend Finder HW should be helpful here...
//And then my function checkMatch() will match the number with the info and populate the modal...
//...so close...


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
