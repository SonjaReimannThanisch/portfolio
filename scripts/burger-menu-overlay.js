function getMobileMenuOverlay() {
    return (
        document.querySelector("#legal-view .mobile-menu-overlay") ||
        document.querySelector("#portfolio .mobile-menu-overlay")
    );
}

function getMobileMenuButton() {
    return (
        document.querySelector("#legal-view .mobile-menu-button") ||
        document.querySelector("#portfolio .mobile-menu-button")
    );
}

function openMobileMenu() {
    const overlay = getMobileMenuOverlay();
    if (!overlay) {return;}
    overlay.classList.add("open");
}

function closeMobileMenu() {
    const overlay = getMobileMenuOverlay();
    const button = getMobileMenuButton();
    if (!overlay) return;
    overlay.classList.remove("open");
    button?.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
    const overlay = getMobileMenuOverlay();
    if (!overlay) return;
    if (overlay.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function getBurgerMenuOverlay() {
    let text = translations[currentLanguage].sidebar;
    let activeDe = currentLanguage === "de" ? "active" : "";
    let activeEn = currentLanguage === "en" ? "active" : "";
    return `
        <div class="mobile-menu-overlay">

            <button class="mobile-menu-close" type="button" aria-label="Menü schließen"onclick="closeMobileMenu()">
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