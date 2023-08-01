window.onscroll = function () {
    var topnav = document.getElementById("myHeader");
    var scrollHeight = window.pageYOffset;
    var opacity = 1 - scrollHeight / 250; // change the denominator to control the speed of fading

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topnav.style.opacity = "0";
    } else {
        topnav.style.opacity = "1";
    }

    document.getElementById('scrollMessage').style.opacity = opacity;
};

// Function made from ChatGPT
function copyCode() {
    var code = document.getElementById("codeBlock").innerText;
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = code;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    // Change button text to show copying is done
    document.getElementById("copyButton").innerText = "Code Copied!";
    // Change button text back after 3 seconds
    setTimeout(function () {
        document.getElementById("copyButton").innerText = "Copy Code";
    }, 3000);
}
