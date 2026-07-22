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
    console.log(overlay.className);
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

            <button class="mobile-menu-close" type="button" aria-label="Menü schließen"onclick="closeMobileMenu()">
                <span></span>
                <span></span>
            </button>

            <nav>
                <a class="mobile-nav-link" href="index.html#about">Why me</a>
                <a class="mobile-nav-link" href="index.html#skills">Skills</a>
                <a class="mobile-nav-link" href="index.html#projects">My Work</a>
                <a class="mobile-nav-link" href="index.html#contact">Contact</a>
            </nav>
            <div class="mobile-menu-language">
                <button class="language-link">DE</button>
                <span>|</span>
                <button class="language-link">EN</button>
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