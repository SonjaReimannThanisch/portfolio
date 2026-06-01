function renderWhyMe() {
    let aboutSection = document.getElementById("about");

    aboutSection.innerHTML = `
        <h2 class="why-me-title">Why me</h2>
        <div class="why-me-content">
            <p class="why-me-text">
                Was mich an der Softwareentwicklung begeistert, ist die Möglichkeit, komplexe Probleme in kleine, lösbare Schritte zu zerlegen. Ich habe Freude daran, neue Technologien zu verstehen, Fehler zu analysieren und so lange an einer Lösung zu arbeiten, bis sie funktioniert.
                Als Quereinsteigerin habe ich gelernt, dass Fortschritt nicht immer geradlinig verläuft. Viele Herausforderungen haben mich Geduld, Ausdauer und strukturiertes Arbeiten gelehrt. Gerade diese Erfahrungen haben meinen Wunsch gestärkt, mich kontinuierlich weiterzuentwickeln und mein Wissen auszubauen.
                Für mich bedeutet Programmieren, jeden Tag etwas Neues zu lernen und Ideen in funktionierende Anwendungen zu verwandeln. Genau diese Kombination aus Kreativität, Logik und lebenslangem Lernen macht diesen Bereich für mich so spannend.
            </p>
            <h3>I am</h3>
            <div class="why-me-facts">
                <div class="fact-card">
                    <img src="./assets/icons/location.png" alt="Location">
                </div>
                <div class="fact-card">
                    <img src="./assets/icons/remote.png" alt="Remote Work">
                </div>
                <div class="fact-card">
                    <img src="./assets/icons/relocation.png" alt="Relocation">
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
    <div class="skills-content">
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
            <img src="./assets/icons/Property 1=Challenge me.png">
        </div>
        <div class="skills-side-text">
            <p class="skills-side-text">
                Mich motiviert die Möglichkeit, jeden Tag etwas Neues zu lernen. Ob neue Technologien, bessere Lösungswege oder ungewohnte Herausforderungen: Ich habe Freude daran, mich kontinuierlich weiterzuentwickeln und mein Wissen durch praktische Projekte auszubauen.
            </p>
        </div>
        <a class="skills-next-link" href="#projects"><img src="./assets/icons/Property 1=Default.png" alt="Next Page"></a>
    </div>

    `;
}

renderMySkills();