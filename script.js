


// Select the required elements
/*const menuIcon = document.querySelector('.menu-icon');
const exitIcon = document.querySelector('.exit-icon');
const navLinks = document.querySelector('.nav-links');

// Hide the exit icon by default
exitIcon.style.display = 'none';

// Show the menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('active');  // Show the nav links by adding 'active' class
  menuIcon.style.display = 'none';  // Hide the menu icon
  exitIcon.style.display = 'block'; // Show the exit icon
});

// Hide the menu when the exit icon is clicked
exitIcon.addEventListener('click', () => {
  navLinks.classList.remove('active');  // Hide the nav links by removing 'active' class
  menuIcon.style.display = 'block';  // Show the menu icon again
  exitIcon.style.display = 'none'; // Hide the exit icon
});

function toggleAnswer(answerId, iconId) {
  const answer = document.getElementById(answerId);
  const icon = document.getElementById(iconId);
  answer.classList.toggle('show');
  if (answer.classList.contains('show')) {
    icon.textContent = '-';
  } else {
    icon.textContent = '+';
  }
}



// Smooth scroll when clicking nav links
navLinkItems.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Stop default jump
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Also close the menu
    navLinks.classList.remove('active');
    menuIcon.style.display = 'block';
    exitIcon.style.display = 'none';
  });
});

// Show the menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('active');  // Show the nav links by adding 'active' class
  menuIcon.style.display = 'none';  // Hide the menu icon
  exitIcon.style.display = 'block'; // Show the exit icon
  document.body.classList.add('menu-open'); // Disable body scrolling
});

// Hide the menu when the exit icon is clicked
/*exitIcon.addEventListener('click', () => {
  navLinks.classList.remove('active');  // Hide the nav links by removing 'active' class
  menuIcon.style.display = 'block';  // Show the menu icon again
  exitIcon.style.display = 'none'; // Hide the exit icon
  document.body.classList.remove('menu-open'); // Enable body scrolling again
});


let link = document.getElementById("meetTeamLink")
let meatTeam = document.getElementById("meerTheTeam")

link.addEventListener("scroll",function(){
  meatTeam.scrollIntoView(behavior:"smooth")
})*/

/*const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Hide the navigation links
    menuIcon.style.display = 'block';    // Show the menu icon
    exitIcon.style.display = 'none';     // Hide the exit icon
  });
});*/


/* links about us */

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
