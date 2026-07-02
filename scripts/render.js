function renderWhyMe() {
    let aboutSection = document.getElementById("about");
    aboutSection.innerHTML = `
        <h2 class="why-me-title">Why me</h2>
        <div id="whyMe" class="why-me-content">
            <p class="why-me-text">
                Was mich an der Softwareentwicklung begeistert, ist die Möglichkeit, komplexe Probleme in kleine, lösbare Schritte zu zerlegen. Ich habe Freude daran, neue Technologien zu verstehen, Fehler zu analysieren und so lange an einer Lösung zu arbeiten, bis sie funktioniert.
                Als Quereinsteigerin habe ich gelernt, dass Fortschritt nicht immer geradlinig verläuft. Viele Herausforderungen haben mich Geduld, Ausdauer und strukturiertes Arbeiten gelehrt. Gerade diese Erfahrungen haben meinen Wunsch gestärkt, mich kontinuierlich weiterzuentwickeln und mein Wissen auszubauen.
                Für mich bedeutet Programmieren, jeden Tag etwas Neues zu lernen und Ideen in funktionierende Anwendungen zu verwandeln. Genau diese Kombination aus Kreativität, Logik und lebenslangem Lernen macht diesen Bereich für mich so spannend.
            </p>
            <h3>I am</h3>
            <div class="why-me-facts">
                <div class="fact-card first">
                    <img class="icon-default" src="./assets/icons/location.png" alt="Location">
                    <img class="icon-hover" src="./assets/icons/Property 1=hover.png" alt="Location hover">
                </div>
                <div class="fact-card second">
                    <img class="icon-default" src="./assets/icons/remote.png" alt="Remote Work">
                    <img class="icon-hover" src="./assets/icons/Property 1=Hover (1).png" alt="Remote hover">
                </div>
                <div class="fact-card third">
                    <img class="icon-default" src="./assets/icons/relocation.png" alt="Relocation">
                    <img class="icon-hover" src="./assets/icons/Property 1=hover (2).png" alt="Relocation hover">
                </div>
            </div>
            <a class="contact-button" href="#contact">Contact me</a>
            <a class="why-me-next-link" href="#skills"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
        </div>
    `;
}

renderWhyMe();

function renderMySkills() {
    let skillsSection = document.getElementById("skills");
    skillsSection.classList.add("skills-section");
    skillsSection.innerHTML = `
    <h2 class="skills-title">My Skill Set</h2>
    <div id="mySkills" class="skills-content">
        <p class="skills-text">
            Ich lerne gerne neue Technologien und arbeite mich selbstständig in unbekannte Themen ein. Herausforderungen motivieren mich, meine Fähigkeiten weiterzuentwickeln und kreative Lösungen zu finden.
        </p>
        <div class="skills-grid">
            <img src="./assets/icons/Property 1=Angular.png">
            <img src="./assets/icons/Property 1=HTML.png">
            <img src="./assets/icons/Property 1=CSS.png">
            <img src="./assets/icons/Property 1=JavaScript.png">
            <img src="./assets/icons/Property 1=TypeScipt.png">
            <img src="./assets/icons/Property 1=React.png">
            <img src="./assets/icons/Property 1=Firebase.png">
            <img src="./assets/icons/Property 1=Rest-Api.png">
            <img src="./assets/icons/Property 1=GIT.png">
            <img src="./assets/icons/Property 1=Scrum.png">
            <img class="challenge-icon" src="./assets/icons/Property 1=Challenge me.png">
            <p class="skills-side-text">
                Neugier und kontinuierliche Weiterentwicklung treiben mich an.         
            </p>
        </div>
        <a class="skills-btn" href="#projects">
            Let's talk
        </a>
        <a class="skills-next-link" href="#projects"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
    </div>
    `;
}

renderMySkills();

function renderMyWork() {
    let workSection = document.getElementById("projects");
    workSection.classList.add("work-section");
    workSection.innerHTML = `
    <h2 class="work-title">My Work</h2>
    <div id="myWork" class="project-grid">
        <div class="work-grid">
            <div class="project-left">
               <div class="project-header"> 
                    <span class="project-number">1</span>
                    <h2>Project Join</h2>
                </div>
                <h3>Über das Projekt</h3>
                <p>
                Eine Kanban-basierte Webanwendung zur Organisation von Aufgaben und Projekten. Nutzer können Aufgaben erstellen, Kontakte zuweisen, Kategorien verwalten und den Arbeitsfortschritt über ein interaktives Drag-and-Drop-Board verfolgen.
                </p>
                
                <h3>Verwendete Technologien</h3>
                <p>JavaScript, HTML, CSS, Firebase</p>
                
                <h3>Das habe ich gelernt</h3>
                <p>
                Durch dieses Teamprojekt habe ich den Umgang mit Angular und TypeScript vertieft und gelernt, größere Anwendungen strukturiert aufzubauen. Außerdem konnte ich praktische Erfahrungen mit Git, Teamarbeit und einer sauberen Komponentenstruktur sammeln.
                </p>
            </div>
            <div class="project-right">
                <img src="./assets/img/Property 1=Join.png" alt="Join App">
                
                <div class="project-buttons">
                    <a href="https://github.com/SonjaReimannThanisch/project-join" target="_blank">GitHub</a>
                    <a href="https://join-business-app.netlify.app/" target="_blank">Live Test</a>
                </div>
            </div>
        </div>
        <div class="work-grid">
            <div class="project-left">
                <div class="project-header"> 
                    <span class="project-number">2</span>
                    <h2>Project Sharky</h2>
                </div>
                <h3>Über das Projekt</h3>
                <p>
                Ein browserbasiertes 2D-Spiel, das mit JavaScript und HTML5 Canvas entwickelt wurde. Der Spieler erkundet eine Unterwasserwelt, sammelt Münzen und Giftflaschen, kämpft gegen verschiedene Gegner und besiegt am Ende den Endgegner.
                </p>
            
                <h3>Verwendete Technologien</h3>
                <p>JavaScript, HTML5 Canvas, CSS</p>
            
                <h3>Das habe ich gelernt</h3>
                <p>
                Dieses Projekt hat meine Kenntnisse in der objektorientierten Programmierung deutlich erweitert. Ich habe gelernt, Spiellogik zu strukturieren, Animationen zu steuern, Kollisionen zu erkennen und größere JavaScript-Projekte übersichtlich zu organisieren.
                </p>
            </div>
            <div class="project-right">
                <img src="./assets/img/Screenshot 2026-06-02 160822.png" alt="Join App">
            
                <div class="project-buttons">
                    <a href="https://github.com/SonjaReimannThanisch/Sharky_recover" target="_blank">GitHub</a>
                    <a href="https://sharky-the-happy-shark.netlify.app//" target="_blank">Live Test</a>
                </div>
            </div>
        </div>
        <div class="work-grid">
            <div class="project-left">
                <div class="project-header"> 
                    <span class="project-number">3</span>
                    <h2>Project DA Bubble</h2>
                </div>
                <h3>Über das Projekt</h3>
                <p>
                Eine Chat-Anwendung, die derzeit noch aussteht. Ziel ist es, moderne Kommunikationsfunktionen mit einer klaren Architektur und einer intuitiven Benutzeroberfläche umzusetzen.
                </p>
                <h3>Verwendete Technologien</h3>
                <p>JavaScript, HTML, CSS, Firebase/p>
                <h3>Das habe ich gelernt</h3>
                <p>
                Im Mittelpunkt stehen eine saubere Projektstruktur, gut wartbarer Code und die Weiterentwicklung meiner Kenntnisse in der Entwicklung moderner Webanwendungen.
                </p>
            </div>
            <div class="project-right">
                <img src="./assets/img/Screenshot DA Bubble.png" alt="Join App">
                

            </div>
        </div>
        <div class="work-grid-last">
            <div class="ongoing-header">
                <span class="project-number-last">4</span>
                <h2 class="grid-hero">Laufende Weiterentwicklung</h2>
            </div>
            
            <p style="margin: 0;">
            Ich erweitere kontinuierlich meine Kenntnisse über die Frontend-Entwicklung hinaus. Aktuell beschäftige ich mich mit Backend-Grundlagen, DevOps-Themen und modernen Entwicklungsprozessen, um Anwendungen ganzheitlich verstehen und entwickeln zu können.
            </p>

            
            <a class="ongoing-btn" href="#contact">Let's talk</a>
            
        </div>
        <a class="projects-next-link" href="#references"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
    </div>
    `;
}

renderMyWork();

function renderReferences() {
    let referencesSection = document.getElementById("references");
    referencesSection.classList.add("references-section");
    referencesSection.innerHTML = `
        <h2 class="references-title">References</h2>
        <div class="reference-grid">
            <div class="grid-item">
                <div class="reference-item">
                    <p>‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’</p>
                </div>
                <div class="separator"></div>
                <div class="project-item">
                    <p>Name Nachname</p>
                    <p> Project irgendwas</p>
                </div>
            </div>
            <div class="grid-item">
                <div class="reference-item">
                    <p>‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’</p>
                </div>
                <div class="separator"></div>
                <div class="project-item">
                    <p>Name Nachname</p>
                    <p>Project irgendwas</p>
                </div>
            </div>
            <div class="grid-item">
                <div class="reference-item">
                    <p>‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’</p>
                </div>
                <div class="separator"></div>
                <div class="project-item">
                    <p>Name Nachname</p>
                    <p>Project irgendwas</p>
                </div>
            </div>
        </div>
        <a class="references-next-link" href="#contact"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
    `;
}

renderReferences();

function renderContact() {
    let contactsection = document.getElementById("contact");
    contactsection.classList.add("contact-section");
    contactsection.innerHTML = `
        <h2 class="contact-title">Contact me</h2>
        <div id="contact" class="contact-content">
            <form class="contact-form">
                <input type="text" placeholder="Your name" required>
                <input type="email" placeholder="Your e-mail" required>
                <textarea placeholder="Your message" required></textarea>

                <label>
                    <input type="checkbox" required>
                    <span>
                    I have read the 
                    <a href="index.html?legal=privacy" target="_blank">privacy policy</a>
                    and agree to the processing of my data as outlined
                    </span>
                    </label>
                <button type="submit" disabled>Send</button>
            </form>

            <div class="contact-info">
                <p>Lass uns zusammenarbeiten.</p>
                <p class="contact-description">
                    Ich suche nach Möglichkeiten, mich als Entwicklerin
                    weiterzuentwickeln und an spannenden Projekten
                    mitzuwirken. Besonders interessieren mich moderne
                    Webanwendungen, saubere Lösungen und die Möglichkeit,
                    jeden Tag etwas Neues zu lernen.
                </p>
                <div class="contact-item">
                    <i class="bi bi-envelope-fill"></i>
                    <a href="mailto:sonja.reimann.thanisch@gmail.com">
                        E-mail: sonja.reimann.thanisch@gmail.com
                    </a>
                </div>
                <div class="contact-item">
                    <i class="bi bi-telephone-fill"></i>
                    <a href="tel:+491788286541">
                        Tel: 0178 828 65 41
                    </a>
                </div>
                <a class="contact-back-link" href="#hero">
                    <img src="./assets/icons/Property 1=Default.png" alt="Back">
                </a>
            </div>
            <div class="contact-footer">
                <a href="index.html?legal=impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
                <a href="index.html?legal=privacy" target="_blank" rel="noopener noreferrer">Datenschutz</a>
                <p>© Sonja Reimann-Thanisch 2026</p>
            </div>
        </div>
    `;
}

renderContact();

function getSidebar() {
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
                        <a href="index.html#about">Why me</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#projects">My Work</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#contact">Contact</a>
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

function showLegalView(startPage) {
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("legal-view").innerHTML = `
        <section id="legal-slider" class="legal-slider">
            <article id="impressum" class="legal-page">
                ${getSidebar()}
                ${getSocialLinks()}
                
        <div id="impressum-layout" class="impressum-layout">
            <h2 class="legal-title">Legal Notice</h2>
            <div class="legal-content">
                ${LEGAL_NOTICE_TEXT}
            </div>
            <a class="legal-next-link" href="#privacy">
                <img src="./assets/icons/Property 1=Default.png" alt="Next">
            </a>
        </div>
            </article>
            <article id="privacy" class="legal-page privacy-page">
                <div class="legal-content">
                    ${PRIVACY_POLICY_TEXT_ONE}
                </div>
                <div class="legal-contact-info">
                    <div class="contact-item">
                        <i class="bi bi-envelope-fill"></i>
                        <a href="mailto:sonja.reimann.thanisch@gmail.com">
                            E-mail: sonja.reimann.thanisch@gmail.com
                        </a>
                    </div>
                    <div class="contact-item">
                        <i class="bi bi-telephone-fill"></i>
                        <a href="tel:+491788286541">
                            Tel: 0178 828 65 41
                        </a>
                    </div>
                </div>
                <aside class="legal-right-footer">
                    <button onclick="backToPortfolio()" target="_blank">
                      <a target="_blank">  Zurück zum Portfolio </a>
                    </button>

                    <p>© Sonja Reimann-Thanisch 2026</p>
                </aside>
                <a class="legal-prev-link" href="#impressum">
                    <img src="./assets/icons/Property 1=Default.png" alt="Back">
                </a>
            </article>
        </section>
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