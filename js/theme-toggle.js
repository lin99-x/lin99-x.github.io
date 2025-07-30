document.addEventListener('DOMContentLoaded', function () {
  const currentTheme = localStorage.getItem('theme');
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  const coffeeImage = document.getElementById('coffeeImage');

  if (currentTheme === 'light') {
    body.classList.add('light-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    coffeeImage.src = 'assets/coffee-no-background-dark.png';
  }

  document.getElementById('themeToggle').addEventListener('click', function() {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    icon.classList.toggle('fa-moon', !isLight);
    icon.classList.toggle('fa-sun', isLight);

    // Swap the coffee image source
    coffeeImage.src = isLight 
    ? 'assets/coffee-no-background-dark.png' 
    : 'assets/coffee-no-background.png';
  });
});
