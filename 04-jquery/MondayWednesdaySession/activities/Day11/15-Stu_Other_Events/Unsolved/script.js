var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

function somefunction(event){
  var keyPress = event.key;
  var keyCode = event.code;

  console.log(keyPress);
  console.log(keyCode);

  document.querySelector("#code").textContent = keyPress;
  document.querySelector("#status").textContent = keyCode;

}

function clickListener(event)
{

  var x = event.clientX;
  var y = event.clientY;

  console.log(x);
  console.log(y);
}


/*
document.addEventListener("keydown",function(){
  alert("keydown");
});
*/

document.addEventListener("keydown",somefunction);
document.addEventListener("click",clickListener)

