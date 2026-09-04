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

initReferenceCarousel();

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

function initContactForm() {
    let form = document.querySelector(".contact-form");
    let submitButton = form?.querySelector('button[type="submit"]');
    if (!form || !submitButton) return;
    addContactFieldValidation(form);
    form.addEventListener("input", () => {
        updateContactSubmitButton(form, submitButton);
        updatePrivacyValidationState(form);
    });
    form.addEventListener("submit", submitContactForm);
}

function addContactFieldValidation(form) {
    let fields = getContactFields(form);
    fields.forEach((field) => {
        field.addEventListener("blur", () => {
            updateFieldValidationState(field);
        });
    });
}

function validateContactForm(form) {
    let fields = getContactFields(form);
    fields.forEach(updateFieldValidationState);
    updatePrivacyValidationState(form);
    return form.checkValidity();
}

function updatePrivacyValidationState(form) {
    let checkbox = form.querySelector('input[name="privacy"]');
    let errorElement = form.querySelector(".privacy-error");
    updatePrivacyErrorText(checkbox, errorElement);
    updatePrivacyErrorClass(checkbox);
}

function updatePrivacyErrorText(checkbox, errorElement) {
    let validationText = translations[currentLanguage].validation;
    errorElement.textContent = checkbox.checked
        ? ""
        : validationText.privacyRequired;
}

function updatePrivacyErrorClass(checkbox) {
    checkbox.classList.toggle("error", !checkbox.checked);
}

function getContactFields(form) {
    return form.querySelectorAll(
        'input:not([type="checkbox"]), textarea'
    );
}

function updateFieldValidationState(field) {
    let isValid = field.checkValidity();

    updateFieldValidationClasses(field, isValid);
    updateFieldPlaceholder(field, isValid);
}

function updateFieldValidationClasses(field, isValid) {
    field.classList.toggle("valid", isValid);
    field.classList.toggle("error", !isValid);
}

function updateFieldPlaceholder(field, isValid) {
    field.placeholder = isValid
        ? field.dataset.defaultPlaceholder
        : field.dataset.errorMessage;
}

async function submitContactForm(event) {
    event.preventDefault();
    let form = event.target;
    if (!validateContactForm(form)) {
        return;
    }
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
    let text = translations[currentLanguage].contact.form;
    button.disabled = true;
    button.textContent = text.sending;
}

function showContactError(button) {
    let text = translations[currentLanguage].contact.form;
    button.disabled = false;
    button.textContent = text.send;
}

function showContactSuccess(form, button) {
    let text = translations[currentLanguage].contact.form;
    form.reset();
    button.textContent = text.success;
    button.disabled = true;
}

function updateContactSubmitButton(form, submitButton) {
    let text = translations[currentLanguage].contact.form;
    let checkbox = form.querySelector('input[name="privacy"]');
    submitButton.textContent = text.send;
    submitButton.disabled = false;
    submitButton.classList.toggle("active", checkbox.checked);
}

initContactForm();


function toggleReference(button) {
    let card = button.closest(".grid-item");
    let isExpanded = card.classList.toggle("expanded");

    button.textContent = isExpanded
        ? button.dataset.showLess
        : button.dataset.showMore;
}

function updateRefrenceToggleButtons() {
    let referenceItems = document.querySelectorAll(".reference-item");
    referenceItems.forEach((item) => {
        let text = item.querySelector(".reference-text");
        let button = item.querySelector(".reference-toggle");
        if (!text || !button) return;
        button.hidden = text.scrollHeight <= text.clientHeight;
    });
}

updateRefrenceToggleButtons();

function alignSkillsContent() {
    let title = document.querySelector(".skills-title");
    let content = document.querySelector(".skills-content");
    if (!title || !content) return;
    let titleTop = title.getBoundingClientRect().top;
    let contentTop = content.getBoundingClientRect().top;
    content.style.transform = `translateY(${titleTop - contentTop}px)`;
}

alignSkillsContent();