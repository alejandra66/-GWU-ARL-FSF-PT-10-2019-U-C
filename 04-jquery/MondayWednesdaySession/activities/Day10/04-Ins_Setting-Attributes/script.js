 var pTags = document.querySelectorAll("p");
 var divTags = document.querySelectorAll("div");
 var aTags = document.querySelectorAll("a");
 var imgEl = document.querySelectorAll("img");
 var changeP = document.querySelector("#change2");
 var myClassesTest = document.querySelectorAll(".div1");

 var myClasses = document.getElementsByClassName("div1");

 console.log(pTags);


//myClassesTest[0].setAttribute("style", "font-size: 65px;");
//myClasses[0].setAttribute("style", "font-size: 65px;");

myClassesTest[0].style.backgroundColor = "red";
myClassesTest[1].style.backgroundColor = "red";
pTags[0].setAttribute("style", "font-size: 65px;");
changeP.setAttribute("style", "color:blue; border:2px solid black;");
 aTags[0].setAttribute("href", "https://github.com");
 imgEl[0].setAttribute("src", "images/image_1.jpg");
 imgEl[0].setAttribute("style", "width:500px; height:200px;");

 for (var i = 0; i < divTags.length; i++) {
   divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
 }
