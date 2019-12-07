var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);

  var name = nameInput.value
  console.log(name)

  if (name <= 0) {
    alert("Please enter your name")
  }
  else {

    var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";


    submissionResponseEl.textContent = response;
  }
});