var currentTime = new Date();
var time = currentTime.getHours();

var greetingMsg;
if (time < 12) {
    greetingMsg = "Good morning!";
}
else if (time < 17) {
    greetingMsg = "Good afternoon!";
}
else if (time > 17) {
    greetingMsg = "Good evening!";
}
else {
    greetingMsg = "Good Night";
}

alert(currentTime + "\n" + greetingMsg)

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

function colorChng() {
    let a = document.getElementsByClassName("btn1");

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // a[0].style.backgroundColor = "red";
    a[0].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

}

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

function addData() {
    // debugger
    var Number1 = document.getElementById("No1").value;
    var Number2 = document.getElementById("No2").value;

    var total = parseFloat(Number1) + parseFloat(Number2);
    document.getElementById("total").innerHTML = 'Total: ' + total;

};