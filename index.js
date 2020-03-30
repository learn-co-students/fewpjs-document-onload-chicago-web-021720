// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let t = document.querySelector('p#text');

    t.textContent = "This is really cool!";
});