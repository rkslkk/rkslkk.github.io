var index = 0;
slideshow();

function slideshow() {
    var i, x;

    x = document.getElementsByClassName("slides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    index++;

    if (index > x.length) {
        index = 1;
    }

    x[index-1].style.display = "block";
    setTimeout(slideshow, 2000);

}