document.addEventListener("DOMContentLoaded", function(){
    var numButtons = document.querySelectorAll(".num");
    var value = document.querySelector("#value")

    for(var i=0; i<numButtons.length; i++){
        numButtons[i].addEventListener("click", function(){
            value.innerHTML += this.innerHTML
            console.log(value.innerHTML.length)
        })
    }

});