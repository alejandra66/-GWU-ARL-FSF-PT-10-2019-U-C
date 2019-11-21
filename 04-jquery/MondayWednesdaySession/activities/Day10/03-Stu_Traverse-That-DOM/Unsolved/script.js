var targetDiv = document.getElementById("articles");
var targetMain = document.getElementById("main");

targetDiv.children[0].style.fontSize = "50px";
targetDiv.children[0].lastElementChild.style.color = "red";

targetMain.children[1].style.textDecoration = "underline";

targetMain.firstElementChild.style.color = "orange";
targetMain.lastElementChild.parentElement.style.fontSize = "50px";