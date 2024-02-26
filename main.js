//make a function for when the user clicks the button
function clickFuncition() {
  // the prompt () function takes input, which is stored in the username var
  var username = prompt("Hi there! What's your name?");
  
  // use an if else statement to see what the input was, determine output
  if (username == null || username == "") 
  {
   // for no input/error, no name is given
    document.getElementById("namegiven").innerHTML = "Hello! Nice to meet you!";
      
  } else {
    // for name given, use in output
    document.getElementById("namegiven").innerHTML = "Hello " +username +"! Nice to meet you!";   
  }
        } 
  
function changeSize()
{
    var img = document.getElementById("image"); img.style.height = "600px"; img.style.width = "500px";
}