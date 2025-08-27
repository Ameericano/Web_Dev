function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll to see";

    document.getElementById("icon-up").style.display = "none";

    document.getElementById("icon-down").style.display = "block";
}