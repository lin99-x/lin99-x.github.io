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

let currentProject = 0;
const projects = document.querySelectorAll('.project-carousel .project-card');
const dots = document.querySelectorAll('.project-dots .dot');

function showProject(index) {
  projects.forEach(p => p.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  
  projects[index].classList.add('active');
  dots[index].classList.add('active');
  currentProject = index;
}

function changeProject(direction) {
  let newIndex = currentProject + direction;
  if (newIndex < 0) newIndex = projects.length - 1;
  if (newIndex >= projects.length) newIndex = 0;
  showProject(newIndex);
}

function goToProject(index) {
  showProject(index);
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