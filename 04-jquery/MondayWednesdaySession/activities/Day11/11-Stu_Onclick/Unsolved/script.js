var count = 0;
var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
var counter = document.querySelector("#count");


function setTextForCounter()
{
    counter.textContent = count;
}

decrement.addEventListener("click", function(){
    if(count  > 0)
    {
    count--;
    setTextForCounter();
    }
    
});

increment.addEventListener("click", function(){

  
    count++;
    setTextForCounter();


});