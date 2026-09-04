/**
 * Returns the currently available mobile menu overlay.
 * @returns {HTMLElement|null} The mobile menu overlay or null if none exists.
 */
function getMobileMenuOverlay() {
    return (
        document.querySelector("#legal-view .mobile-menu-overlay") ||
        document.querySelector("#portfolio .mobile-menu-overlay")
    );
}

/**
 * Returns the currently available mobile menu button.
 * @returns {HTMLElement|null} The mobile menu button or null if none exists.
 */
function getMobileMenuButton() {
    return (
        document.querySelector("#legal-view .mobile-menu-button") ||
        document.querySelector("#portfolio .mobile-menu-button")
    );
}

/**
 * Opens the mobile menu overlay.
 */
function openMobileMenu() {
    const overlay = getMobileMenuOverlay();
    if (!overlay) return;
    overlay.classList.add("open");
}

/**
 * Closes the mobile menu overlay and resets the menu button state.
 */
function closeMobileMenu() {
    const overlay = getMobileMenuOverlay();
    const button = getMobileMenuButton();
    if (!overlay) return;
    overlay.classList.remove("open");
    button?.setAttribute("aria-expanded", "false");
}

/**
 * Toggles the mobile menu between open and closed states.
 */
function toggleMobileMenu() {
    const overlay = getMobileMenuOverlay();
    if (!overlay) return;
    if (overlay.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * Returns the HTML markup for the mobile burger menu overlay.
 * @returns {string} The mobile menu markup.
 */
function getBurgerMenuOverlay() {
    let text = translations[currentLanguage].sidebar;
    let activeDe = currentLanguage === "de" ? "active" : "";
    let activeEn = currentLanguage === "en" ? "active" : "";
    return `
        <div class="mobile-menu-overlay">

            <button class="mobile-menu-close" type="button" aria-label="Menü schließen" onclick="closeMobileMenu()">
                <span></span>
                <span></span>
            </button>

            <nav>
                <a class="mobile-nav-link" href="index.html#about" onclick="closeMobileMenu()">
                    ${text.about}
                </a>

                <a class="mobile-nav-link" href="index.html#skills" onclick="closeMobileMenu()">
                    ${text.skills}
                </a>

                <a class="mobile-nav-link" href="index.html#projects" onclick="closeMobileMenu()">
                    ${text.projects}
                </a>

                <a class="mobile-nav-link" href="index.html#contact" onclick="closeMobileMenu()">
                    ${text.contact}
                </a>
            </nav>
            <div class="mobile-menu-language">
                <button class="language-link ${activeDe}" onclick="switchLanguage('de')">DE</button>
                <span>|</span>
                <button class="language-link ${activeEn}" onclick="switchLanguage('en')">EN</button>
            </div>
        </div>
    `;
}

/**
 * Renders the burger menu overlay into the mobile menu root.
 */
function renderBurgerMenuOverlay() {
    const root = document.getElementById("mobile-menu-root");
    if (!root || root.innerHTML.trim()) return;
    root.innerHTML = getBurgerMenuOverlay();
}

document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("mobile-nav-link")) return;
    closeMobileMenu();
});

renderBurgerMenuOverlay();