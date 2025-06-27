const mobileMenu = document.getElementById('mobile');
  const openIcon = document.getElementById('openMenu');
  const closeIcon = document.getElementById('closeMenu');
  const mobileLinks = document.querySelectorAll('.mobileNavs a');

  // Open menu
  openIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
    openIcon.style.display = 'none';
  });

  // Close menu
  closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    openIcon.style.display = 'block';
  });

  // Hide on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      openIcon.style.display = 'block';
    });
  });

  // Hide on scroll
  window.addEventListener('scroll', () => {
    mobileMenu.classList.remove('show');
    openIcon.style.display = 'block';
  });
