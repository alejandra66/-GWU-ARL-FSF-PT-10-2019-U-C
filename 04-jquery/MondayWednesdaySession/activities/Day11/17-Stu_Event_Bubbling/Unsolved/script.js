var images = ["https://picsum.photos/300/200",
"https://picsum.photos/300/201",
"https://picsum.photos/300/202",
"https://picsum.photos/300/203"];

var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;

function navigate(direction)
{
    index = index + direction;
    if(index < 0)
    {
        index = images.length - 1;

    }
    else if(index > images.length - 1)
    {
        index = 0;
    }

    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
}

next.addEventListener("click", function(){
    event.stopPropagation();
    navigate(1);

});

prev.addEventListener("click", function(){
    event.stopPropagation();
    navigate(-1);

});

