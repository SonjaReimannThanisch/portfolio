window.addEventListener(
    "wheel",
    (event) => {
        event.preventDefault();

        window.scrollBy({
            left: event.deltaY > 0 ? window.innerWidth : -window.innerWidth,
            behavior: "smooth",
        });
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

logoLink.addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("hero").scrollIntoView({
        behavior: "smooth",
        inline: "start",
    });

    navLinks.forEach((item) => item.classList.remove("active"));
});