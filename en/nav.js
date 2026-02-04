class MyNav extends HTMLElement {
    connectedCallback() {
      const currentPath = window.location.pathname;

      let switchLangLink = '../pl/index.html';

      if(currentPath.includes('/en/')) {
        switchLangLink = currentPath.replace('/en/', '/pl/');
      }
      
      this.innerHTML = `
        <div class="nav-container">
            <div class="profile-section">
                <div class="avatar-placeholder">PS</div>
                <div class="name">Piotr Sawecki</div>
            </div>

            <nav>
              <ul>
                <li><a href="../en/index.html" class="nav-link">Home Page</a></li>
                <li><a href="../en/projects.html" class="nav-link">Projects</a></li>
                <li><a href="../en/technologies.html" class="nav-link">Technologies</a></li>
                <li><a href="../en/education.html" class="nav-link">Education</a></li>
                <li><a href="../en/contact.html" class="nav-link">Contact</a></li>
              </ul>
            </nav>

            <div class="language-switch">
                <a href="${switchLangLink}" class="lang-link" title="Przełącz na Polski">
                    <img src="https://flagcdn.com/w40/pl.png" srcset="https://flagcdn.com/w80/pl.png 2x" width="20" height="15" alt="PL Flag" class="flag-icon"> Polski
                </a>
            </div>

            <button id="close-menu-btn" aria-label="Zamknij menu">&times;</button>
        </div>
      `;

      this.initMobileMenu();
    }

    initMobileMenu() {
        // Logika hamburgera
        const trigger = document.getElementById('mobile-menu-trigger');
        const sidebar = document.querySelector('.sidebar');
        const closeBtn = this.querySelector('#close-menu-btn');

        // Tworzymy przycisk hamburgera, jeśli go nie ma
        if (trigger && !trigger.hasChildNodes()) {
            trigger.innerHTML = `
                <button class="hamburger" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            `;
            
            trigger.addEventListener('click', () => {
                sidebar.classList.add('active');
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        }
    }
}

customElements.define('my-nav', MyNav);