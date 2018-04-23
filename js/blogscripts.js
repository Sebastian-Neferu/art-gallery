var blogSlideIndex = 1;
var post = document.getElementById("js-post");
var postPicture = document.getElementsByClassName("js-post__picture");
var postTitle = document.getElementsByClassName("js-post__title");
var blogPrev = document.getElementsByClassName("js-blog-prev");
var blogAll = document.getElementsByClassName("js-blog-all");
var blogNext = document.getElementsByClassName("js-blog-next");
var blog1 = document.getElementsByClassName("js-blog-1");
var blog2 = document.getElementsByClassName("js-blog-2");
var blog3 = document.getElementsByClassName("js-blog-3");
var blog4 = document.getElementsByClassName("js-blog-4");
var blog5 = document.getElementsByClassName("js-blog-5");
var blog6 = document.getElementsByClassName("js-blog-6");

function blogShowDiv(m) {
    blogAllDivs();
    blogAltDivs(m);
    document.body.scrollTop = 0; // For Safari
    post.scrollTop = 0;
}

function blogPlusDivs(m) {
    blogShowDivs(blogSlideIndex += m);
    document.body.scrollTop = 0; // For Safari
    post.scrollTop = 0;
}

function blogAllDivs() {
    var x = document.getElementById("js-post");
    var y = document.getElementById("js-blog");
    x.classList.toggle('is-displayed');
    y.classList.toggle('is-visible');
}

function blogAltDivs(m) {
    blogShowDivs(blogSlideIndex = m);
}

function blogShowDivs(m) {
    var i;
    var x = document.getElementsByClassName("js-post__slide");
    if (m > x.length) {blogSlideIndex = 1;}
    if (m < 1) {blogSlideIndex = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[blogSlideIndex - 1].style.display = "block";
}

for (var i = 0; i < postPicture.length; i++) {
    postPicture[i].addEventListener('click', function() {
        blogAllDivs();
    }, false); 
}

for (var i = 0; i < postTitle.length; i++) {
    postTitle[i].addEventListener('click', function() {
        blogAllDivs();
    }, false); 
}

for (var i = 0; i < blogPrev.length; i++) {
    blogPrev[i].addEventListener('click', function() {
        blogPlusDivs(-1);
    }, false); 
}

for (var i = 0; i < blogAll.length; i++) {
    blogAll[i].addEventListener('click', function() {
        blogAllDivs();
    }, false); 
}

for (var i = 0; i < blogNext.length; i++) {
    blogNext[i].addEventListener('click', function() {
        blogPlusDivs(+1);
    }, false); 
}

for (var i = 0; i < blog1.length; i++) {
    blog1[i].addEventListener('click', function() {
        blogShowDiv(+1);
    }, false); 
}

for (var i = 0; i < blog2.length; i++) {
    blog2[i].addEventListener('click', function() {
        blogShowDiv(+2);
    }, false); 
}

for (var i = 0; i < blog3.length; i++) {
    blog3[i].addEventListener('click', function() {
        blogShowDiv(+3);
    }, false); 
}

for (var i = 0; i < blog4.length; i++) {
    blog4[i].addEventListener('click', function() {
        blogShowDiv(+4);
    }, false); 
}

for (var i = 0; i < blog5.length; i++) {
    blog5[i].addEventListener('click', function() {
        blogShowDiv(+5);
    }, false); 
   }

for (var i = 0; i < blog6.length; i++) {
    blog6[i].addEventListener('click', function() {
        blogShowDiv(+6);
    }, false); 
}

var isSafari = /constructor/i.test(window.HTMLElement);