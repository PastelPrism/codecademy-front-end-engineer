document.addEventListener('DOMContentLoaded', function() {
  // Assigns ID's based on their content
  const header = document.querySelector('header');
  if (header) header.id = 'home';

  // Assigns ID's from <H2>
  document.querySelectorAll('section').forEach(section => {
    const heading = section.querySelector('h2');
    if (heading) {
      let id = heading.innerText.trim().toLowerCase().replace(/\s+/g, '-');
      section.id = id;
    }
  });

  // Mapping nav link texts
  const navMapping = {
    'home': 'home',
    'about us': 'about-us',
    'portfolio': 'portfolio',
    'employees': 'our-great-employees',
    'contact': 'contact-us'
  };

  // Scrolling
  document.querySelectorAll('.nav a').forEach(link => {
    link.style.cursor = 'pointer';
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const text = link.innerText.trim().toLowerCase();
      let targetId = navMapping[text];
      if (targetId) {
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

 
  const modal = document.createElement('div');
  modal.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  const modalImg = document.createElement('img');
  modalImg.style.cssText = 'max-width: 90%; max-height: 90%;';
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  document.querySelectorAll('.portfolio-images img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      modalImg.src = img.src;
      modal.style.display = 'flex';
    });
  });

  modal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

   //text rotation for photographers missions
  const missionText = document.querySelector('.mission');
  if (missionText) {
    const quotes = [
      `"Here we take pictures, pictures of good quality. Better quality than your phone." Eric Cartman - CEO`,
      `"Capture the world through your lens."`,
      `"Every snapshot tells a story."`,
      `"We don’t just take pictures, we create art."`
    ];
    let quoteIndex = 0;
    setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      missionText.innerText = quotes[quoteIndex];
    }, 5000);
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.classList.remove('hidden');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});
