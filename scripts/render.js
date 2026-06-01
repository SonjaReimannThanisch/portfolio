function renderWhyMe() {
    const aboutSection = document.getElementById("about");

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
        </div>
    `;
}

renderWhyMe();