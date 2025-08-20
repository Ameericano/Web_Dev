function rotateGif(element){
    element.style.transform = "translate(5px, 5px)";
    element.style.transform = "rotate(180deg)"
}

function scrolling(){
    document.getElementById("div").style.color = "blue";
}

function keypress(){
    var content = document.getElementById("div")
    content.innerHTML = "You pressed a key!"
    content.style.color = "red"
}

var btn = document.querySelector(".button");

btn.onclick = () => {
    alert("Hello World!");
};

btn.onclick = () => {
    alert("Hello Programmer!");
};

var btn = document.querySelector(".button2");

btn.addEventListener("click", function(){
    alert("Hello World!");
});

btn.addEventListener("click", function(){
    alert("Hello Programmer!");
});