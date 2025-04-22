


// Select the required elements
const menuIcon = document.querySelector('.menu-icon');
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