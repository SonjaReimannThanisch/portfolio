const sections = [...document.querySelectorAll("#portfolio > section")];
let currentSection = 0;
let isScrolling = false;

window.addEventListener(
    "wheel",
    (event) => {
        event.preventDefault();
        if (isScrolling) return;
        isScrolling = true;
        if (event.deltaY > 0) {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            currentSection = Math.max(currentSection - 1, 0);
        }
        sections[currentSection].scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
        });

        setTimeout(() => {
            isScrolling = false;
        }, 700);
    },
    { passive: false }
);

let navLinks = document.querySelectorAll(".nav-item a");
let logoLink = document.querySelector(".logo-link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// logoLink.addEventListener("click", (event) => {
//     event.preventDefault();

//     document.getElementById("hero").scrollIntoView({
//         behavior: "smooth",
//         inline: "start",
//     });

//     navLinks.forEach((item) => item.classList.remove("active"));
// });