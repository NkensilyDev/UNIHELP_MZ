      const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Este eh o toggle dropdowns do mobile
    document.querySelectorAll('[data-dropdown-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-dropdown-toggle');
        const dropdown = document.getElementById(targetId);
        const isHidden = dropdown.classList.contains('hidden');
        if (isHidden) {
          dropdown.classList.remove('hidden');
          button.setAttribute('aria-expanded', 'true');
          button.querySelector('svg').classList.add('rotate-180');
        } else {
          dropdown.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
          button.querySelector('svg').classList.remove('rotate-180');
        }
      });
    });
