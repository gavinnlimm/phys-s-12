window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var topnav = document.getElementById("myTopnav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topnav.style.opacity = "0";
    } else {
        topnav.style.opacity = "1";
    }
}