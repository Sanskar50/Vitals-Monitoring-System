document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".circle");
    const bars = document.querySelectorAll(".bar");

    circles.forEach((circle, index) => {
        const value = parseInt(circle.getAttribute("data-value"));
        const bar = bars[index];
        bar.style.height = value * 5 + "px"; // Adjust multiplier as needed
    });
});
