document.addEventListener("DOMContentLoaded", function () {
    var numButtons = document.querySelectorAll(".num");
    var value = document.querySelector("#value");
    var del = document.querySelector("#delete");
    var clearButton = document.querySelector("#clear");
    var eq = document.querySelector('#eq');
    var optButtons = document.querySelectorAll(".opt");


    var num1 = 0;
    var num2 = 0;
    var operator = null;
    var sol = 0;

    for (var i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener("click", function () {
            if (value.innerHTML.length > 5) {
                alert("Too many digits")
            } else {
                if (value.innerHTML == 0) {
                    value.innerHTML = this.innerHTML
                } else {
                    value.innerHTML += this.innerHTML
                }
            }
        })
    }

    for (var i = 0; i < optButtons.length; i++) {
        optButtons[i].addEventListener("click", function () {

            if (operator !== null) {
                operator = this.innerHTML
            }

            if (num1 == 0) {
                num1 = value.innerHTML
                operator = this.innerHTML
            }

            value.innerHTML = ''
        })
    }

    eq.addEventListener("click", function () {
        if (num1 !== 0) {
            num2 = value.innerHTML
            value.innerHTML = calculation(operator);
        }
    })

    del.addEventListener("click", function () {
        var delval = Math.floor(value.innerHTML / 10)
        value.innerHTML = delval
    })

    clearButton.addEventListener("click", function () {
        num1 = 0;
        num2 = 0;
        value.innerHTML = 0
    })

    function calculation(opt) {
        switch (opt) {
            case '+':
                sol = parseInt(num1) + parseInt(num2)
                num1 = sol
                return sol
                break;

            case '-':
                sol = parseInt(num1) - parseInt(num2)
                num1 = sol
                return sol
                break;

            case '*':
                sol = parseInt(num1) * parseInt(num2)
                num1 = sol
                return sol
                break;

            case '/':
                sol = parseInt(num1) / parseInt(num2)
                num1 = sol
                return sol
                break;
        }
    }

});