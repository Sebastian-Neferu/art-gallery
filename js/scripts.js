var slideIndex = 1;
var descIndex = 1;

var slideshow = document.getElementById("js-slideshow");
var slideshowSlide = document.getElementsByClassName("js-slideshow__slide");
var slideshowPrevSlide = document.getElementsByClassName("js-slideshow__prev-slide");
var slideshowNextSlide = document.getElementsByClassName("js-slideshow__next-slide");
var slideshowAllSlides = document.getElementsByClassName("js-slideshow__all-slides");
var thumb1 = document.getElementById("js-thumbnail-1");
var thumb2 = document.getElementById("js-thumbnail-2");
var thumb3 = document.getElementById("js-thumbnail-3");
var thumb4 = document.getElementById("js-thumbnail-4");
var thumb5 = document.getElementById("js-thumbnail-5");
var thumb6 = document.getElementById("js-thumbnail-6");
var thumb1ps = document.getElementById("js-thumbnail-1-ps");
var thumb2ps = document.getElementById("js-thumbnail-2-ps");
var thumb3ps = document.getElementById("js-thumbnail-3-ps");
var thumb4ps = document.getElementById("js-thumbnail-4-ps");
var thumb5ps = document.getElementById("js-thumbnail-5-ps");
var thumb6ps = document.getElementById("js-thumbnail-6-ps");
var galleryThumbnail = document.getElementsByClassName("js-gallery__thumbnail");
var galleryThumbnailps = document.getElementsByClassName("js-gallery__thumbnail-ps");

function showDiv(n) {
    allDivs();
    altDivs(n);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
    showDescs(descIndex += n);
}

function allDivs() {
    var x = document.getElementById("js-slideshow");
    var y = document.getElementById("js-gallery");
    var z = document.getElementsByClassName("js-images");
    var k = document.getElementById("js-description");
    x.classList.toggle('is-displayed');
    y.classList.toggle('is-visible');
    k.classList.toggle('is-block');
    for (var i = 0; i < z.length; i++) {
        z[i].classList.toggle('no-cursor');
    }
}

function altDivs(n) {
    showDivs(slideIndex = n);
    showDescs(descIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("js-slideshow__slide");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "inline-block";
}

function altDescs(n) {
    showDesc();
    showDescs(descIndex = n);
}

function showDesc() {
    var x = document.getElementById("js-description");
    x.classList.add('is-block');
}

function hideDesc() {
    var x = document.getElementById("js-description");
    x.classList.remove('is-block');
}

function showDescs(n) {
    var i;
    var x = document.getElementsByClassName("js-header__picture");
    if (n > x.length) {descIndex = 1;}
    if (n < 1) {descIndex = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[descIndex-1].style.display = "inline-block";
}


slideshow.addEventListener('mouseover', function() {
    showDesc();
}, false);

for (var i = 0; i < slideshowSlide.length; i++) {
 slideshowSlide[i].addEventListener('click', function() {
     allDivs();
 }, false); 
}

for (var i = 0; i < slideshowPrevSlide.length; i++) {
 slideshowPrevSlide[i].addEventListener('click', function() {
     plusDivs(-1);
 }, false); 
}

for (var i = 0; i < slideshowNextSlide.length; i++) {
 slideshowNextSlide[i].addEventListener('click', function() {
     plusDivs(+1);
 }, false); 
}

for (var i = 0; i < slideshowAllSlides.length; i++) {
 slideshowAllSlides[i].addEventListener('click', function() {
     allDivs();
 }, false); 
}

thumb1.addEventListener('click', function() {
    showDiv(+1);
}, false);

thumb1.addEventListener('mouseover', function() {
    altDescs(+1);
}, false);

thumb2.addEventListener('click', function() {
    showDiv(+2);
}, false);

thumb2.addEventListener('mouseover', function() {
    altDescs(+2);
}, false);

thumb3.addEventListener('click', function() {
    showDiv(+3);
}, false);

thumb3.addEventListener('mouseover', function() {
    altDescs(+3);
}, false);

thumb4.addEventListener('click', function() {
    showDiv(+4);
}, false);

thumb4.addEventListener('mouseover', function() {
    altDescs(+4);
}, false);

thumb5.addEventListener('click', function() {
    showDiv(+5);
}, false);

thumb5.addEventListener('mouseover', function() {
    altDescs(+5);
}, false);

thumb6.addEventListener('click', function() {
    showDiv(+6);
}, false);

thumb6.addEventListener('mouseover', function() {
    altDescs(+6);
}, false);

thumb1ps.addEventListener('click', function() {
    showDiv(+1);
}, false);

thumb1ps.addEventListener('mouseover', function() {
    altDescs(+1);
}, false);

thumb2ps.addEventListener('click', function() {
    showDiv(+2);
}, false);

thumb2ps.addEventListener('mouseover', function() {
    altDescs(+2);
}, false);

thumb3ps.addEventListener('click', function() {
    showDiv(+3);
}, false);

thumb3ps.addEventListener('mouseover', function() {
    altDescs(+3);
}, false);

thumb4ps.addEventListener('click', function() {
    showDiv(+4);
}, false);

thumb4ps.addEventListener('mouseover', function() {
    altDescs(+4);
}, false);

thumb5ps.addEventListener('click', function() {
    showDiv(+5);
}, false);

thumb5ps.addEventListener('mouseover', function() {
    altDescs(+5);
}, false);

thumb6ps.addEventListener('click', function() {
    showDiv(+6);
}, false);

thumb6ps.addEventListener('mouseover', function() {
    altDescs(+6);
}, false);

for (var i = 0; i < galleryThumbnail.length; i++) {
    galleryThumbnail[i].addEventListener('mouseout', function() {
        hideDesc();
    }, false); 
}

for (var i = 0; i < galleryThumbnailps.length; i++) {
    galleryThumbnailps[i].addEventListener('mouseout', function() {
        hideDesc();
    }, false); 
}