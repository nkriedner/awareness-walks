const button = document.querySelector("button");
const inspirationPopup = document.querySelector(".inspiration-popup");
const inspirationContent = document.querySelector(".inspiration-content");

button.addEventListener("click", function () {
    let inspiration = awarenessWalkData[Math.floor(Math.random() * awarenessWalkData.length)];
    inspirationContent.textContent = inspiration;
    inspirationPopup.style.display = "block";

    // Fade-in effect:
    setTimeout(function () {
        inspirationPopup.style.opacity = 1;
    }, 100);
});

inspirationPopup.addEventListener("click", function () {
    inspirationPopup.style.opacity = 0;
    setTimeout(function () {
        inspirationPopup.style.display = "none";
    }, 900);
});
