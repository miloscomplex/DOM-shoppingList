let btn = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
        return input.value.length;
}

function createListElement() {
        var li = document.createElement("li");
        console.log(input.value);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""; 
}

btn.addEventListener("click", function() {
        if (inputLength() > 0) {
                createListElement();
        }
})

input.addEventListener("keyup", function(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
                createListElement();
        }
})



