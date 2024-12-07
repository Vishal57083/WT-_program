document.addEventListener("DOMContentLoaded", function() {
    const mouseArea = document.getElementById("mouseArea");
    const alertButton = document.getElementById("alertButton");
    const textInput = document.getElementById("textInput");
    const textOutput = document.getElementById("textOutput");

    mouseArea.addEventListener("mouseenter", function() {
        mouseArea.style.backgroundColor = "#e0e0e0";
    });

    mouseArea.addEventListener("mouseleave", function() {
        mouseArea.style.backgroundColor = "#ffffff";
    });

    alertButton.addEventListener("click", function() {
        alert("Button was clicked!");
    });

    textInput.addEventListener("input", function() {
        textOutput.textContent = "You typed: " + textInput.value;
    });
});