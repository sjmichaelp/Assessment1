document.getElementById("BG1").addEventListener("click", function () {
    ch1 = 1;
    ch2 = 2;
    ch3 = 3;
    
    
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i" + ch1 + ".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i" + ch2 + ".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i" + ch3 + ".jpg)";
});
document.getElementById("BG2").addEventListener("click", function () {
 
    ch1 = 4;
    ch2 = 5;
    ch3 = 6;
    
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i" + ch1 + ".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i" + ch2 + ".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i" + ch3 + ".jpg)";
});
document.getElementById("BG3").addEventListener("click", function () {
    
    ch1 = 7;
    ch2 = 8;
    ch3 = 9;
    
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i" + ch1 + ".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i" + ch2 + ".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i" + ch3 + ".jpg)";
});
document.getElementById("BG4").addEventListener("click", function () {
    ch1 = 10;
    ch2 = 11;
    ch3 = 12;
    
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i" + ch1 + ".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i" + ch2 + ".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i" + ch3 + ".jpg)";
});

document.getElementById("ch1").addEventListener("mouseenter", function() {
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
});

document.getElementById("ch2").addEventListener("mouseenter", function() {
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
});

document.getElementById("ch3").addEventListener("mouseenter", function() {
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
});

document.getElementById("zoom").addEventListener("click", function() {
    
    document.getElementById("zoomcontrols").style.display = "block";
});

changewidth = 0;
changeheight = 0;

document.getElementById("plus").addEventListener("click", function() {
    changewidth = changewidth + 10;
    changeheight = changeheight + 7;
    document.getElementById("zoom").style.width = 100 + changewidth + "%";
    document.getElementById("zoom").style.height = 100 + changeheight + "%";

});

document.getElementById("minus").addEventListener("click", function() {
    changewidth = changewidth - 10;
    changeheight = changeheight - 7;
    document.getElementById("zoom").style.width = 100 + changewidth + "%";
    document.getElementById("zoom").style.height = 100 + changeheight + "%";
});

document.getElementById("Next").addEventListener("click", function() {
   
    
    if (ch3 == 12) {
        ch1 = 1;
        ch2 = 2;
        ch3 = 3;
    }
    else {
    ch1 = ch1 + 3;
    ch2 = ch2 + 3;
    ch3 = ch3 + 3;
    }
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i" + ch1 + ".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i" + ch2 + ".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i" + ch3 + ".jpg)";
});

document.getElementById("Previous").addEventListener("click", function() {
    if (ch3 == 3) {
        ch1 = 10;
        ch2 = 11;
        ch3 = 12;
    }
    else {
    ch1 = ch1 - 3;
    ch2 = ch2 - 3;
    ch3 = ch3 - 3;
    }
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i" + ch1 + ".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i" + ch2 + ".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i" + ch3 + ".jpg)";
});


