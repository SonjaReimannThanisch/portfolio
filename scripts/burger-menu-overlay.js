function openMobileMenu() {
    document.querySelector(".mobile-menu-overlay").classList.add("open");
}

function closeMobileMenu() {
    document.querySelector(".mobile-menu-overlay").classList.remove("open");
}

function toggleMobileMenu() {
    document.querySelector(".mobile-menu-overlay").classList.toggle("open");
}

function getBurgerMenuOverlay() {
    return `
        <div class="mobile-menu-overlay" onclick="openMobileMenu()">
            <button
                class="mobile-menu-close"
                type="button"
                aria-label="Menü schließen"
                onclick="closeMobileMenu()"
            >
                ×
            </button>

            <nav>
                <a href="#about" onclick="toggleMobileMenu()">Why me</a>
                <a href="#skills" onclick="toggleMobileMenu()">My Skill Set</a>
                <a href="#projects" onclick="toggleMobileMenu()">My Work</a>
                <a href="#contact" onclick="toggleMobileMenu()">Contact me</a>
            </nav>

            <div class="mobile-menu-language">
                DE | EN
            </div>
        </div>
    `;
}

