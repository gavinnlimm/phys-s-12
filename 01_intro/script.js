window.onscroll = function () {
    var topnav = document.getElementById("myTopnav");
    var scrollHeight = window.pageYOffset;
    var opacity = 1 - scrollHeight / 250; // change the denominator to control the speed of fading

    // Set the opacity of the top navigation bar
    topnav.style.opacity = opacity.toFixed(2); // Round to 2 decimal places to avoid flickering

    var scrollMessage = document.getElementById('scrollMessage');
    if (scrollHeight > 0) {
        scrollMessage.style.opacity = 0; // Hide the scroll message after scrolling
    } else {
        scrollMessage.style.opacity = 1; // Show the scroll message when at the top
    }
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
