let currentLanguage = "de";

function renderHero() {
    let heroSection = document.getElementById("hero");
    let text = translations[currentLanguage];
    heroSection.innerHTML = `
        ${getMobileHeader()}
        ${getSidebar()}

        <div class="hero-content">
            ${getSocialLinks()}

            <img
                class="hero-image"
                src="./assets/img/Q46-Z25-SAM-1_1721735680737-removebg-preview.png"
                alt="Portrait of Sonja Reimann-Thanisch"
            >

            <div class="hero-naming">
                <div class="name">
                    <h1>Sonja Reimann-Thanisch</h1>
                </div>

                <div class="designation">
                    <h2>${text.hero.designation}</h2>
                </div>

                <p class="hero-location">${text.hero.location}</p>
            </div>

            <a class="next-section-link" href="#about">
                <img
                    src="./assets/icons/Property 1=Default.png"
                    alt="Next Page"
                >
            </a>
        </div>
    `;
}

renderHero();

function getSidebar() {
    let text = translations[currentLanguage].sidebar;
    return `
        <aside class="hero-sidebar">
            <div class="logo">
                <a class="logo" href="index.html#hero">
                    <svg viewBox="0 0 130 110" class="logo-svg" aria-label="Frontend Developer SR Logo">
                        <defs>
                            <path id="logo-arc" d="M 20 70 A 45 45 0 0 1 110 70" />
                        </defs>
                        <text class="logo-arc-text">
                            <textPath href="#logo-arc" startOffset="50%" text-anchor="middle">
                                frontend developer
                            </textPath>
                        </text>
                        <text class="logo-initials" x="60" y="70" text-anchor="middle">
                            SR
                        </text>
                    </svg>
                </a>
            </div>
            <nav id="main-nav">
                <ul>
                    <li class="nav-item">
                        <a href="index.html#about">${text.about}</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#skills">${text.skills}</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#projects">${text.projects}</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#contact">${text.contact}</a>
                    </li>
                </ul>
            </nav>
        </aside>
    `;
}

function getSocialLinks() {
    return `
        <div id="social-links" class="social-links">
            <nav>
                <ul>
                    <li>
                        <a href="mailto:sonja.reimann.thanisch@gmail.com">
                                <img src="./assets/icons/Vector (1).png" alt="Email">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sonja-reimann-thanisch-1574881b3/" target="_blank" rel="noopener noreferrer">
                                <img src="./assets/icons/Vector.png" alt="LinkedIn">
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SonjaReimannThanisch" target="_blank" rel="noopener noreferrer">
                                <img src="./assets/icons/Vector (2).png" alt="GitHub">
                            </a>
                        </li>
                    <li class="language-link">
                        <span>DE</span>
                        <span>|</span>
                        <span>EN</span>
                    </li>
                </ul>
            </nav>
        </div>
    `;
}

function getMobileHeader() {
    return`
        <header class="mobile-header">
            <a class="mobile-logo" href="index.html#hero">
                <svg viewBox="0 0 130 110" class="logo-svg" aria-label="Frontend Developer SR Logo">
                    <defs>
                        <path id="legal-mobile-logo-arc" d="M 20 70 A 45 45 0 0 1 110 70" />
                    </defs>
                    <text class="logo-arc-text">
                        <textPath href="#legal-mobile-logo-arc" startOffset="50%" text-anchor="middle">
                            frontend developer
                        </textPath>
                    </text>
                    <text class="logo-initials" x="60" y="70" text-anchor="middle">
                        SR
                    </text>
                </svg>
            </a>
            <button class="mobile-menu-button" type="button" aria-label="Open menu" aria-expanded="false" onclick="openMobileMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
        ${getBurgerMenuOverlay()}
    `;
}