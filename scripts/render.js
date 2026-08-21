function renderWhyMe() {
    let text = translations[currentLanguage].about;
    let aboutSection = document.getElementById("about");
    aboutSection.innerHTML = `
        <h2 class="why-me-title">${text.title}</h2>
        <div id="whyMe" class="why-me-content">
            <p class="why-me-text">
                ${text.text}
            </p>
            <h3>${text.subtitle}</h3>
            <div class="why-me-facts">
                <div class="fact-card first" onclick="this.classList.toggle('active')">
                    <div class="fact-icon">
                <img class="icon-default" src="./assets/icons/location.png" alt="Location icon">                        
                <img class="icon-hover" src="./assets/icons/locationHover.png" alt="Location highlighted">
                    </div>
                    <p>${text.location}</p>
                </div>

                <div class="fact-card second" onclick="this.classList.toggle('active')">
                    <div class="fact-icon">
                        <img class="icon-default" src="./assets/icons/Icon Remote.png" alt="Remote work icon">
                        <img class="icon-hover" src="./assets/icons/remoteVector.png" alt="Remote work highlighted">
                    </div>
                    <p>${text.remote}</p>
                </div>

                <div class="fact-card third" onclick="this.classList.toggle('active')">
                    <div class="fact-icon">
                        <img class="icon-default" src="./assets/icons/relocate.png" alt="Relocation icon">
                        <img class="icon-hover" src="./assets/icons/reloacteHover.png" alt="Relocation highlighted">
                    </div>
                    <p>${text.relocation}</p>
                </div>
            </div>
            <a class="contact-button" href="#contact">${text.contactButton}</a>
            <a class="why-me-next-link" href="#skills"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
        </div>
    `;
}

renderWhyMe();

function renderMySkills() {
    let text = translations[currentLanguage].skills;
    let skillsSection = document.getElementById("skills");
    skillsSection.classList.add("skills-section");
    skillsSection.innerHTML = `
    <h2 class="skills-title">${text.title}</h2>
    <div id="mySkills" class="skills-content">
        <p class="skills-text">
            ${text.text}
        </p>
        <div class="skills-grid">
            <img src="./assets/icons/Property 1=Angular.png" alt="Angular">
            <img src="./assets/icons/Property 1=HTML.png" alt="HTML">
            <img src="./assets/icons/Property 1=CSS.png" alt="CSS">
            <img src="./assets/icons/Property 1=JavaScript.png" alt="JavaScript">
            <img src="./assets/icons/Property 1=TypeScipt.png" alt="TypeScript">
            <img src="./assets/icons/Property 1=React.png" alt="React">
            <img src="./assets/icons/Property 1=Firebase.png" alt="Firebase">
            <img src="./assets/icons/Property 1=Rest-Api.png" alt="REST API">
            <img src="./assets/icons/Property 1=GIT.png" alt="Git">
            <img src="./assets/icons/Property 1=Scrum.png" alt="Scrum">
            <img class="challenge-icon" src="./assets/icons/Property 1=Challenge me.png" alt="Challenge me">
            <p class="skills-side-text">
                ${text.sideText}
            </p>
        </div>
        <a class="skills-btn" href="#projects">
            ${text.button}
        </a>
        <a class="skills-next-link" href="#projects"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
        </div>
    `;
}

renderMySkills();

function renderMyWork() {
    let text = translations[currentLanguage].projects;
    let workSection = document.getElementById("projects");
    workSection.classList.add("work-section");
    workSection.innerHTML = `
    <h2 class="work-title">${text.title}</h2>
    <div id="myWork" class="project-grid">
        <div class="work-grid">
            <div class="project-left">
               <div class="project-header" onclick="toggleProject(this.closest('.work-grid'))"> 
                    <span class="project-number">1</span>
                    <h2>${text.projectOne.title}</h2>
                </div>
                <h3>${text.projectOne.aboutTitle}</h3>
                <p>
                    ${text.projectOne.aboutText}
                </p>
                <div class="project-extra">
                    <h3>${text.projectOne.technologiesTitle}</h3>
                    <p>${text.projectOne.technologies}</p>
                    
                    <h3>${text.projectOne.learningTitle}</h3>
                    <p>
                        ${text.projectOne.learningText}
                    </p>
                </div>
            </div>
            <div class="project-right">
                <img src="./assets/img/Property 1=Join.png" alt="Screenshot of the Join project">
                
                <div class="project-buttons">
                    <a href="https://github.com/SonjaReimannThanisch/project-join" target="_blank">${text.projectOne.github}</a>
                    <a href="https://join-business-app.netlify.app/" target="_blank">${text.projectOne.liveTest}</a>
                </div>
            </div>
            <button
                class="project-toggle"
                type="button"
                onclick="toggleProject(this.closest('.work-grid'))"
            >
                <span class="show-more-text">${text.projectOne.showMore}</span>
                <span class="show-less-text">${text.projectOne.showLess}</span>
            </button>
        </div>
        <div class="work-grid">
            <div class="project-left">
                <div class="project-header" onclick="toggleProject(this.closest('.work-grid'))"> 
                    <span class="project-number">2</span>
                    <h2>${text.projectTwo.title}</h2>
                </div>
                <h3>${text.projectTwo.aboutTitle}</h3>
                <p>
                    ${text.projectTwo.aboutText}
                </p>
                <div class="project-extra">
                    <h3>${text.projectTwo.technologiesTitle}</h3>
                    <p>${text.projectTwo.technologies}</p>
                    
                    <h3>${text.projectTwo.learningTitle}</h3>
                    <p>
                        ${text.projectTwo.learningText}
                    </p>
                </div>
            </div>
            <div class="project-right">
                <img src="./assets/img/Screenshot 2026-06-02 160822-u.jpeg" alt="Screenshot of the Sharkie game">
            
                <div class="project-buttons">
                    <a href="https://github.com/SonjaReimannThanisch/Sharky_recover" target="_blank">${text.projectTwo.github}</a>
                    <a href="https://sharky-the-happy-shark.netlify.app//" target="_blank">${text.projectTwo.liveTest}</a>
                </div>
            </div>
            <button
                class="project-toggle"
                type="button"
                onclick="toggleProject(this.closest('.work-grid'))"
            >
                <span class="show-more-text">${text.projectTwo.showMore}</span>
                <span class="show-less-text">${text.projectTwo.showLess}</span>
            </button>
        </div>
        <div class="work-grid">
            <div class="project-left">
                <div class="project-header" onclick="toggleProject(this.closest('.work-grid'))"> 
                    <span class="project-number">3</span>
                    <h2>${text.projectThree.title}</h2>
                </div>
                 <h3>${text.projectThree.aboutTitle}</h3>
                <p>
                    ${text.projectThree.aboutText}
                </p>
                <div class="project-extra">
                     <h3>${text.projectThree.technologiesTitle}</h3>
                    <p>${text.projectThree.technologies}</p>
                    
                    <h3>${text.projectThree.learningTitle}</h3>
                    <p>
                        ${text.projectThree.learningText}
                    </p>
                </div>
            </div>
            <div class="project-right">
                <img src="./assets/img/Screenshot DA Bubble.png" alt="Screenshot of DA Bubble">
            </div>
            <button
                class="project-toggle"
                type="button"
                onclick="toggleProject(this.closest('.work-grid'))"
            >
                <span class="show-more-text">${text.projectThree.showMore}</span>
                <span class="show-less-text">${text.projectThree.showLess}</span>
            </button>
        </div>
        <div class="work-grid-last">
            <div class="ongoing-header">
                <span class="project-number-last">4</span>
                <h2>${text.projectFour.title}</h2>
            </div>
            <p style="margin: 0;">
                ${text.projectFour.text}
            </p>
            <a class="ongoing-btn" href="#contact">${text.projectFour.button}</a>

        </div>
        <a class="projects-next-link" href="#references"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
    </div>
    `;
}

renderMyWork();

function renderReferences() {
    let text = translations[currentLanguage].references;
    let referencesSection = document.getElementById("references");
    referencesSection.classList.add("references-section");
    referencesSection.innerHTML = `
        <h2 class="references-title">${text.title}</h2>
        <div class="mobile-text">
            <h3>${text.mobile.title}</h3>
            <p>${text.mobile.subtitle}</p>
        </div>
        <div class="reference-grid">
            <div class="grid-item">
                <div class="reference-item">
                    <p>"${text.referenceOne.text}"</p>
                </div>
                <div class="separator"></div>
                <div class="project-item">
                    <p>${text.referenceOne.name}</p>
                    <p>${text.referenceOne.project}</p>
                </div>
            </div>
            <div class="grid-item">
                <div class="reference-item">
                    <p>"${text.referenceTwo.text}"</p>
                </div>
                <div class="separator"></div>
                <div class="project-item">
                    <p>${text.referenceTwo.name}</p>
                    <p>${text.referenceTwo.project}</p>
                </div>
            </div>
            <div class="grid-item">
                <div class="reference-item">
                    <p>"${text.referenceThree.text}"</p>
                </div>
                <div class="separator"></div>
                <div class="project-item">
                    <p>${text.referenceThree.name}</p>
                    <p>${text.referenceThree.project}</p>
                </div>
            </div>
        </div>
        <div class="reference-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <a class="references-next-link" href="#contact"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
    `;
}

renderReferences();

function renderContact() {
    let text = translations[currentLanguage].contact;
    let footerText = translations[currentLanguage].footer;
    let contactsection = document.getElementById("contact");
    contactsection.classList.add("contact-section");
    contactsection.innerHTML = `
        <h2 class="contact-title">${text.title}</h2>
        <div id="contact" class="contact-content">
            <form id="contact-form" class="contact-form" action="https://formspree.io/f/xwvgagbw" method="POST" novalidate>
                <input type="text" name="name" placeholder="${text.form.name}" data-default-placeholder="${text.form.name}" data-error-message="${translations[currentLanguage].validation.nameRequired}" data-fs-field required>
                <input type="email" name="email" placeholder="${text.form.email}" data-default-placeholder="${text.form.email}" data-error-message="${translations[currentLanguage].validation.emailRequired}" data-fs-field required>
                <textarea name="message" placeholder="${text.form.message}" data-default-placeholder="${text.form.message}" data-error-message="${translations[currentLanguage].validation.messageRequired}" data-fs-field required></textarea>                
                <label>
                    <input type="checkbox" name="privacy" required>
                    <span>
                        ${text.form.privacyBefore}
                        <a href="index.html?legal=privacy" target="_blank">
                            ${text.form.privacyLink}
                        </a>
                        ${text.form.privacyAfter}
                    </span>
                </label>
                <p class="privacy-error"></p>
                <button type="submit" data-fs-submit-btn>
                    ${text.form.send}
                </button>
            </form>

            <div class="contact-info">
                <p>${text.info.title}</p>
                <p class="contact-description">
                    ${text.info.text}
                </p>
                <div class="contact-item">
                    <i class="bi bi-envelope-fill"></i>
                    <a href="mailto:sonja.reimann.thanisch@gmail.com">
                        ${text.info.email}: sonja.reimann.thanisch@gmail.com
                    </a>
                </div>
                <div class="contact-item">
                    <i class="bi bi-telephone-fill"></i>
                    <a href="tel:+491788286541">
                        ${text.info.phone}: 0178 828 65 41
                    </a>
                </div>
                <a class="contact-back-link" href="#hero">
                    <img src="./assets/icons/Property 1=Default.png" alt="Back">
                </a>
                ${getSocialLinks()}
            </div>
            <div class="contact-footer">
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

            <div class="footer-links">
                <a href="index.html?legal=impressum" target="_blank">${footerText.legalNotice}</a>
                <a href="index.html?legal=privacy" target="_blank">${footerText.privacyPolicy}</a>
            </div>

            <p class="footer-copyright">
                ${footerText.copyright}
            </p>

        </div>
    `;
}

renderContact();

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