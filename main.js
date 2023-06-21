var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides (slideIndex = n);
}

function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName("MySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


var slideIndexDad = 1;
showSlidesDad(slideIndexDad);

function plusSlideDad(p) {
    showSlidesDad(slideIndexDad += p);
}

function currentSlideDad (p) {
    showSlidesDad (slideIndexDad = p);
}

function showSlidesDad (p) {
    var a;
    var slidesDad = document.getElementsByClassName("MySlides-dad");
    var dotsDad = document.getElementsByClassName("dot-dad");

    if (p > slidesDad.length) {slideIndexDad = 1}
    if (p < 1) {slideIndexDad = slidesDad.length}

    for (a = 0; a < slidesDad.length; a++) {
        slidesDad[a].style.display = "none";
    }

    for (a = 0; a < dotsDad.length; a++) {
        dotsDad[a].className = dotsDad[a].className.replace("active-dad","");
    }

    slidesDad[slideIndexDad-1].style.display = "block";
    dotsDad[slideIndexDad-1].className += " active-dad";
}










