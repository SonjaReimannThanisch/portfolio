const sections = [...document.querySelectorAll("#portfolio > section")];
const navLinks = document.querySelectorAll(".nav-item a");

let currentSection = 0;
let isScrolling = false;

/**
 * Updates the active navigation link for the current section.
 * @param {string} sectionId - ID of the current section.
 */
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

/**
 * Updates the current section based on the horizontal scroll position.
 */
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

/**
 * Handles wheel scrolling for the portfolio.
 * @param {WheelEvent} event - The wheel event.
 */
function handleWheelScroll(event) {
    if (isTabletOrMobile()) return;
    if (isLegalViewOpen()) {
        scrollLegalView(event);
        return;
    }
    scrollPortfolioSection(event);
}

/**
 * Checks whether the current viewport is tablet or mobile size.
 * @returns {boolean} True if the viewport width is 1280px or smaller.
 */
function isTabletOrMobile() {
    return window.innerWidth <= 1280;
}

/**
 * Checks whether the legal view is currently open.
 * @returns {boolean} True if the legal view is visible.
 */
function isLegalViewOpen() {
    let legalView = document.getElementById("legal-view");
    let legalSlider = document.querySelector(".legal-slider");
    return legalSlider && legalView?.innerHTML !== "";
}

/**
 * Scrolls horizontally inside the legal view.
 * @param {WheelEvent} event - The wheel event.
 */
function scrollLegalView(event) {
    event.preventDefault();
    let legalSlider = document.querySelector(".legal-slider");
    legalSlider.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
    });
}

/**
 * Handles section-based scrolling on desktop.
 * @param {WheelEvent} event - The wheel event.
 */
function scrollPortfolioSection(event) {
    event.preventDefault();
    if (isScrolling) return;
    isScrolling = true;
    updateCurrentSectionByWheel(event.deltaY);
    scrollToCurrentSection();
    resetScrollLock();
}

/**
 * Updates the current section index based on the wheel direction.
 * @param {number} deltaY - Vertical wheel movement.
 */
function updateCurrentSectionByWheel(deltaY) {
    if (deltaY > 0) {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
        return;
    }
    currentSection = Math.max(currentSection - 1, 0);
}

/**
 * Scrolls to the currently selected portfolio section.
 */
function scrollToCurrentSection() {
    let section = sections[currentSection];
    section.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
    });
    updateActiveNav(section.id);
}

/**
 * Resets the scroll lock after the scroll animation.
 */
function resetScrollLock() {
    setTimeout(() => {
        isScrolling = false;
    }, 700);
}

window.addEventListener("wheel", handleWheelScroll, {
    passive: false,
});

window.addEventListener("scroll", updateCurrentSection);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const sectionId = link.getAttribute("href").replace("#", "");
        updateActiveNav(sectionId);
    });
});

/**
 * Toggles the expanded state of a project card.
 * @param {HTMLElement} project - The project element to toggle.
 */
function toggleProject(project) {
    project.classList.toggle("open");
}

/**
 * Initializes the reference carousel and its controls.
 */
function initReferenceCarousel() {
    let grid = document.querySelector(".reference-grid");
    let cards = grid?.querySelectorAll(".grid-item");
    let dots = document.querySelectorAll(".reference-dots .dot");
    if (!grid || !cards?.length || dots.length === 0) return;
    addReferenceScrollListener(grid, cards, dots);
    addReferenceDotListeners(cards, dots);
}

initReferenceCarousel();

/**
 * Adds the scroll listener used to update the active reference dot.
 * @param {HTMLElement} grid - The reference carousel container.
 * @param {NodeList} cards - The reference cards.
 * @param {NodeList} dots - The navigation dots.
 */
function addReferenceScrollListener(grid, cards, dots) {
    grid.addEventListener("scroll", () => {
        updateActiveReferenceDot(grid, cards, dots);
    });
}

/**
 * Updates the active navigation dot based on the carousel position.
 * @param {HTMLElement} grid - The reference carousel container.
 * @param {NodeList} cards - The reference cards.
 * @param {NodeList} dots - The navigation dots.
 */
function updateActiveReferenceDot(grid, cards, dots) {
    let cardWidth = cards[0].offsetWidth;
    let activeIndex = Math.round(grid.scrollLeft / cardWidth);
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
    });
}

/**
 * Adds click listeners to the reference navigation dots.
 * @param {NodeList} cards - The reference cards.
 * @param {NodeList} dots - The navigation dots.
 */
function addReferenceDotListeners(cards, dots) {
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            scrollToReferenceCard(cards[index]);
        });
    });
}

/**
 * Scrolls the selected reference card into view.
 * @param {HTMLElement} card - The reference card to display.
 */
function scrollToReferenceCard(card) {
    card.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
    });
}

/**
 * Toggles the expanded state of a reference card.
 * @param {HTMLButtonElement} button - The reference toggle button.
 */
function toggleReference(button) {
    let card = button.closest(".grid-item");
    let isExpanded = card.classList.toggle("expanded");

    button.textContent = isExpanded
        ? button.dataset.showLess
        : button.dataset.showMore;
}

/**
 * Shows or hides reference toggle buttons depending on text overflow.
 */
function updateReferenceToggleButtons() {
    let referenceItems = document.querySelectorAll(".reference-item");
    referenceItems.forEach((item) => {
        let text = item.querySelector(".reference-text");
        let button = item.querySelector(".reference-toggle");
        if (!text || !button) return;
        button.hidden = text.scrollHeight <= text.clientHeight;
    });
}

updateReferenceToggleButtons();

/**
 * Aligns the skills content with the top of the vertical skills title.
 */
function alignSkillsContent() {
    let title = document.querySelector(".skills-title");
    let content = document.querySelector(".skills-content");
    if (!title || !content) return;
    let titleTop = title.getBoundingClientRect().top;
    let contentTop = content.getBoundingClientRect().top;
    content.style.transform = `translateY(${titleTop - contentTop}px)`;
}

alignSkillsContent();