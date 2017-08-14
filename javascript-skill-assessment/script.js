/*
Part 3
Validating the user ID with JavaScript

1- On your text editor, create a “script.js” file and save in the same folder as your index.html and style.css.  After form loads create a function that will have the text field focus go to the User ID field.
2- Create a function that will validate the User’s ID with the console method, “User ID should not be empty!”
*/

// Part 3.1
function firstfocus(){
  let userId= document.getElementsByName('userid')[0];
  userId.focus();
}

// Part 3.2
function userid_validation(min, max){
  let userId= document.getElementsByName('userid')[0].value;
  if (userId==="" || userId.length===0){
    console.log("User ID should not be empty!");
  } else if(userId.length<min){
    console.log("User ID is too short!");
  } else if(userId.length>max){
    console.log("User ID is too long!");
  }
}
