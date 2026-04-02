document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetSection = this.getAttribute('data-section');
      
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetSection) {
          section.classList.add('active');
        }
      });

      document.getElementById('navLinks').classList.remove('active');
    });
  });
});

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(function() {
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(function() {
      btn.classList.remove('copied');
      btn.innerHTML = '<i class="fas fa-copy"></i>';
    }, 2000);
  });
}