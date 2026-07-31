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
        let legalSlider = document.querySelector(".legal-slider");
        if (legalSlider && document.getElementById("legal-view").innerHTML !== "") {
            event.preventDefault();
            legalSlider.scrollBy({
                left: event.deltaY,
                behavior: "smooth",
            });
            return;
        }
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

function toggleProject(project) {
    project.classList.toggle("open");
}

function initReferenceCarousel() {
    let grid = document.querySelector(".reference-grid");
    let cards = grid?.querySelectorAll(".grid-item");
    let dots = document.querySelectorAll(".reference-dots .dot");

    if (!grid || !cards?.length || dots.length === 0) return;

    addReferenceScrollListener(grid, cards, dots);
    addReferenceDotListeners(cards, dots);
}

function addReferenceScrollListener(grid, cards, dots) {
    grid.addEventListener("scroll", () => {
        updateActiveReferenceDot(grid, cards, dots);
    });
}

function updateActiveReferenceDot(grid, cards, dots) {
    let cardWidth = cards[0].offsetWidth;
    let activeIndex = Math.round(grid.scrollLeft / cardWidth);

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
    });
}

function addReferenceDotListeners(cards, dots) {
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            scrollToReferenceCard(cards[index]);
        });
    });
}

function scrollToReferenceCard(card) {
    card.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
    });
}

initReferenceCarousel();

function initContactForm() {
    let form = document.querySelector(".contact-form");
    let submitButton = form?.querySelector('button[type="submit"]');
    if (!form || !submitButton) return;
    addContactFieldValidation(form);
    form.addEventListener("input", () => {
        updateContactSubmitButton(form, submitButton);
    });
    form.addEventListener("submit", submitContactForm);
}

function addContactFieldValidation(form) {
    let fields = form.querySelectorAll("input, textarea");
    fields.forEach((field) => {
        field.addEventListener("blur", () => {
            updateFieldValidationState(field);
        });
    });
}

function updateFieldValidationState(field) {
    let isValid = field.checkValidity();

    field.classList.toggle("valid", isValid);
    field.classList.toggle("error", !isValid);
}

async function submitContactForm(event) {
    event.preventDefault();
    let form = event.target;
    let submitButton = form.querySelector('button[type="submit"]');
    setSubmitButtonLoading(submitButton);
    let success = await sendContactForm(form);
    handleContactFormResponse(success, form, submitButton);
}

async function sendContactForm(form) {
    let response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            Accept: "application/json",
        },
    });
    return response.ok;
}

function handleContactFormResponse(success, form, submitButton) {
    if (success) {
        showContactSuccess(form, submitButton);
        return;
    }
    showContactError(submitButton);
}

function setSubmitButtonLoading(button) {
    button.disabled = true;
    button.textContent = "Sending...";
}

function showContactError(button) {
    button.disabled = false;
    button.textContent = "Send";
}

function showContactSuccess(form, button) {
    form.reset();
    button.textContent = "✓ Thank you!";
    button.disabled = true;
}

function updateContactSubmitButton(form, submitButton) {
    submitButton.textContent = "Send";
    submitButton.disabled = !form.checkValidity();
}

initContactForm();
