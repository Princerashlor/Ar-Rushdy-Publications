/* ==========================
   SCROLL ANIMATION
========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

/* ==========================
   STICKY NAVBAR SHADOW
========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
    } else {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }

});

/* ==========================
   SMOOTH BUTTON HOVER
========================== */

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(