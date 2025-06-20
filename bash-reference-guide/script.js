
document.addEventListener('DOMContentLoaded', function () {
  
  const navLinks = document.querySelectorAll('.top-nav a');

  
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); 
      const targetId = this.getAttribute('href').substring(1); 
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, 
        });
      }
    });
  });
});