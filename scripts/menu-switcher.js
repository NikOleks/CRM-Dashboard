(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('sidebar-menu'),
          activeClass = 'sidebar__menu-link_active';
    let currentMenuLink = menu.getElementsByClassName(activeClass);

    menu.addEventListener('click', function(event) {
      let menuLink = event.target.closest('.sidebar__menu-link');

      if (menuLink) {
        toggleSidebar();
        activateMenuLink(menuLink);
      }
    });

    function activateMenuLink(link) {
      if (!link.classList.contains(activeClass)) {
        currentMenuLink.length && deactivateMenuLink(currentMenuLink[0]);
        link.classList.add(activeClass);
        link.setAttribute('tabindex', "-1");
        setTimeout(function () {
          toggleAdminSection(link.getAttribute('href').slice(1)); 
        }, 300);
      }
    };

    function deactivateMenuLink(link) {
      link.classList.remove(activeClass);
      link.setAttribute('tabindex', '0');
      toggleAdminSection(link.getAttribute('href').slice(1));
    };

    function toggleAdminSection(id) {
      const adminSection = document.getElementById(id);

      adminSection.classList.toggle('section_active');
    };

    function toggleSidebar() {
      if (window.matchMedia('(max-width: 768px)').matches == true) {
        const switcher = document.querySelector('label.sidebar__toggle');

        switcher.click();
      };
    };
  });
})();
