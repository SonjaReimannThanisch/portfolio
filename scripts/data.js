function getSidebar() {
    return `
        <aside class="hero-sidebar">
            <div class="logo">
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
            </div>
            <nav id="main-nav">
                <ul>
                    <li class="nav-item" data-section="projects">Why me</li>
                    <li class="nav-item" data-section="skills">Skills</li>
                    <li class="nav-item" data-section="about">My Work</li>
                    <li class="nav-item" data-section="contact">Contact</li>
                </ul>
            </nav>
        </aside>
    `;
}