var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");


var count = localStorage.getItem("counter");

counter.textContent = count;

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  localStorage.setItem("counter", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  counter.textContent = count;

  localStorage.setItem("counter", count);
});


