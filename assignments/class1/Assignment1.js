document.getElementById("myButton").onclick =changeColor;
var currentColor = "darkmagenta";

function changeColor(){
   document.body.style.color = "green";

    if (currentColor=="darkmagenta") {
        document.body.style.color = "green";
        currentColor = "green";
    } else {
        document.body.style.color = "darkmagenta";
        currentColor = "darkmagenta";
    }
    return currentColor;
}
