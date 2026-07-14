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
    const button = getMobileMenuButton();

    if (!overlay) return;

    overlay.classList.add("open");
    button?.setAttribute("aria-expanded", "true");
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
    return `
        <div class="mobile-menu-overlay">
            <button
                class="mobile-menu-close"
                type="button"
                aria-label="Menü schließen"
                onclick="closeMobileMenu()"
            >
                ×
            </button>

            <nav>
                <a href="index.html#about" onclick="closeMobileMenu()">Why me</a>
                <a href="index.html#skills" onclick="closeMobileMenu()">My Skill Set</a>
                <a href="index.html#projects" onclick="closeMobileMenu()">My Work</a>
                <a href="index.html#contact" onclick="closeMobileMenu()">Contact me</a>
            </nav>

            <div class="mobile-menu-language">
                DE | EN
            </div>
        </div>
    `;
}

function renderBurgerMenuOverlay() {
    const root = document.getElementById("mobile-menu-root");

    if (!root || root.innerHTML.trim()) return;

    root.innerHTML = getBurgerMenuOverlay();
}

renderBurgerMenuOverlay();