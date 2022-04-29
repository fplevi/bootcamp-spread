var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0

function increment(){
     currentNumber++
     currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
     currentNumber--
     currentNumberWrapper.innerHTML = currentNumber;
}
  
function loadIn() {
    var loadIncrement = document.getElementById("adicionar");
    loadIncrement.addEventListener("click", increment, false);
}

function loadDe() {
    var loadDecrement = document.getElementById("subtrair");
    loadDecrement.addEventListener("click", decrement, false);
}

if(currentNumber <= 0){
    currentNumberWrapper.style.color = "red";
}
  
document.addEventListener("DOMContentLoaded", loadIn, false);
document.addEventListener("DOMContentLoaded", loadDe, false);