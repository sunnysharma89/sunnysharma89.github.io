document.addEventListener("DOMContentLoaded", function(){
    var numButtons = document.querySelectorAll(".num");
    var value = document.querySelector("#value");
    var del = document.querySelector("#delete")

    for(var i=0; i<numButtons.length; i++){
        numButtons[i].addEventListener("click", function(){
            value.innerHTML += this.innerHTML
        })
    }

    del.addEventListener("click", function(){
        var delval =Math.floor(value.innerHTML/10) 
        value.innerHTML = delval
    })

});