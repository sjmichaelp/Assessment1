document.getElementById("Open").addEventListener("click", function () {
    document.getElementById("menu").style.left = "0";
});

document.getElementById("Close").addEventListener("click", function () {
    document.getElementById("menu").style.left = "-110px";
});

document.getElementById("MakeBG").addEventListener("click", function () {
    document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
});
document.getElementById("Reset").addEventListener("click", function () {
    document.getElementById("bg").style.backgroundImage = "none";
});

document.getElementById("Show").addEventListener("click", function () {
    document.getElementById("app1").style.display = "block";
});

document.getElementById("Hide").addEventListener("click", function () {
    document.getElementById("app1").style.display = "none";
});

