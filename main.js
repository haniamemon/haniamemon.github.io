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

// show dropdown
function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'block';
}

// hide dropdown
function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'none';
}

//function to submit the feedback form
function submitForm() {
  //get the different data types that have been defined in the contact.html file
  var name = document.getElementById("name").value;
  var element = document.getElementById("element").value;
  var headshot = document.getElementById("headshot").value;
  var colour = document.getElementById("colour").value;
  var colourpick = document.getElementById("colourpick").value;
  var message = document.getElementById("message").value;
  var rating = document.getElementById("rating").value;
}

var gender = document.querySelector('input[name="headshot"]:checked').value;

//checkbox items into array, get all checked boxes
var element = [];
    var elementCheckboxes = document.getElementsByName("element");
    for (var i = 0; i < elementCheckboxes.length; i++) {
        if (elementCheckboxes[i].checked) {
            element.push(elementCheckboxes[i].value);}
    }

    var namebox = localStorage.setItem("name", name);
    var elemnt = localStorage.setItem("element", element);
    var head = localStorage.setItem("headshot", headshot);
    var col = localStorage.setItem("colour", colour);
    var colpick = localStorage.setItem("phone_type", colourpick);
    var msg = localStorage.setItem("message", msg);
    var rting = localStorage.setItem("rating", rating);

  function changeColor() {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
  }