const sections = [...document.querySelectorAll("#portfolio > section")];
const navLinks = document.querySelectorAll(".nav-item a");

let currentSection = 0;
let isScrolling = false;

function updateActiveNav(sectionId) {
    navLinks.forEach((link) => link.classList.remove("active"));

    if (sectionId === "hero") return;

    let activeLink = document.querySelector(`.nav-item a[href="#${sectionId}"]`);

    if (sectionId === "references") {
        activeLink = document.querySelector('.nav-item a[href="#projects"]');
    }

    if (activeLink) {
        activeLink.classList.add("active");
    }
}

function updateCurrentSection() {
    let scrollPosition = window.scrollX;

    sections.forEach((section, index) => {
        let sectionStart = section.offsetLeft;
        let sectionEnd = sectionStart + section.offsetWidth;

        if (scrollPosition >= sectionStart - window.innerWidth / 2 &&
            scrollPosition < sectionEnd - window.innerWidth / 2) {
            currentSection = index;
            updateActiveNav(section.id);
        }
    });
}

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

        updateActiveNav(sections[currentSection].id);

        setTimeout(() => {
            isScrolling = false;
        }, 700);
    },
    { passive: false }
);

window.addEventListener("scroll", updateCurrentSection);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const sectionId = link.getAttribute("href").replace("#", "");
        updateActiveNav(sectionId);
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