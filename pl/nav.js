class MyNav extends HTMLElement {
    connectedCallback() {
      const currentPath = window.location.pathname;

      let switchLangLink = '../en/index.html';

      if(currentPath.includes('/pl/')) {
        switchLangLink = currentPath.replace('/pl/', '/en/');
      }
      
      this.innerHTML = `
        <div class="nav-container">
            <div class="profile-section">
                <div class="avatar-placeholder">PS</div>
                <div class="name">Piotr Sawecki</div>
            </div>

            <nav>
              <ul>
                <li><a href="../pl/index.html" class="nav-link">Strona Główna</a></li>
                <li><a href="../pl/projects.html" class="nav-link">Projekty</a></li>
                <li><a href="../pl/technologies.html" class="nav-link">Technologie</a></li>
                <li><a href="../pl/education.html" class="nav-link">Wykształcenie</a></li>
                <li><a href="../pl/contact.html" class="nav-link">Kontakt</a></li>
              </ul>
            </nav>

            <div class="language-switch">
                <a href="${switchLangLink}" class="lang-link" title="Switch to English">
                    <img src="https://flagcdn.com/w40/gb.png" srcset="https://flagcdn.com/w80/gb.png 2x" width="20" height="15" alt="UK Flag" class="flag-icon"> English
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