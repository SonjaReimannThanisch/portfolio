function showLegalView(startPage) {
    let legal = translations[currentLanguage].legal;
    let privacy = translations[currentLanguage].privacy;
    let footerText = translations[currentLanguage].footer;
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("legal-view").innerHTML = `
        <main id="legal-slider" class="legal-slider">
            ${getMobileHeader()}
            
            <article id="impressum" class="legal-page">
                ${getSidebar()}
                <div class="legal-desktop-socials">
                    ${getSocialLinks()}
                </div>
                
        <div id="impressum-layout" class="impressum-layout">
            <a class="portfolio-back-link" href="index.html#hero">
                <img src="./assets/icons/arrow_back.png" alt="Zurück zum Portfolio">
            </a>
            <h2 class="legal-title">${legal.title}</h2>
            <div class="legal-content">
                ${legal.content}
            </div>
        </div>
            </article>
            <article id="privacy" class="legal-page privacy-page">
                <div class="legal-content">
                    ${privacy.content}
                </div>
                <div class="legal-contact-info">
                    <div class="contact-item">
                        <i class="bi bi-envelope-fill"></i>
                        <a href="mailto:sonja.reimann.thanisch@gmail.com">
                            ${footerText.legalsEmail}
                        </a>
                    </div>
                    <div class="contact-item">
                        <i class="bi bi-telephone-fill"></i>
                        <a href="tel:+491788286541">
                            ${footerText.legalsPhone}
                        </a>
                    </div>
                </div>
                <div class="legal-mobile-actions">
                    <a class="legal-prev-link" href="#impressum">
                        <img src="./assets/icons/Property 1=Default.png" alt="Back">
                    </a>
                        ${getSocialLinks()}
                    </div>
                <aside class="legal-right-footer">
                    <div class="mobile-footer-logo">
                        <a class="footer-logo-link" href="index.html#hero">
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
                    <button onclick="backToPortfolio()" target="_blank">
                        ${footerText.backToPortfolio}
                    </button>
                    <p>${footerText.copyright}</p>
                </aside>

            </article>
        </main>
    `;
    document.getElementById(startPage).scrollIntoView();
}

function backToPortfolio() {
    document.getElementById("legal-view").innerHTML = "";
    document.getElementById("portfolio").style.display = "flex";
}

function openLegalFromUrl() {
    let params = new URLSearchParams(window.location.search);
    let legal = params.get("legal");
    if (legal === "impressum" || legal === "privacy") {
        showLegalView(legal);
    }
}

openLegalFromUrl();