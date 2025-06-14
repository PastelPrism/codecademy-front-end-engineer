document.addEventListener('DOMContentLoaded', () => {
  // Tea details for modal
  const teaDetails = {
    "Fall Berry Blitz Tea": {
      title: "Fall Berry Blitz Tea",
      description:
        "A nice and sweet fall tea for the rainy days. Comes with a hint of cinnamon and red berries.",
      image: "../img/img-berryblitz.webp",
    },
    "Spiced Rum Tea": {
      title: "Spiced Rum Tea",
      description:
        "For the winter days when you are feeling extra tea-cozy, we recommend this nice blend of tea and spiced rum. Perfect to keep you warm during the cold winter days.",
      image: "../img/img-spiced-rum.webp",
    },
    "Seasonal Donuts": {
      title: "Seasonal Donuts",
      description:
        "Who doesn't like donuts with their tea??",
      image: "../img/img-donut.webp",
    },
    "Myrtle Ave Tea": {
      title: "Myrtle Ave Tea",
      description:
        "A delightful breezy tea, perfect for neighbourhood gossips during spring. This tea is refreshing and light with a hint of mint",
      image: "../img/img-myrtle-ave.webp",
    },
    "Bedford Bizarre Tea": {
      title: "Bedford Bizarre Tea",
      description:
        "Feeling adventurous during the summer holidays? Try out our Bedford Bizarre Tea, with its exotic flavors you imagine yourself on a deserted island",
      image: "../img/img-bedford-bizarre.webp",
    },
  };

  // Modal for tea details
  const modal = document.createElement('div');
  modal.id = 'modal';
  Object.assign(modal.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000',
    padding: '1rem',
  });

  modal.innerHTML = `
    <div id="modal-content" style="
      max-width: 500px;
      background: #fff;
      padding: 1.5rem;
      border-radius: 8px;
      position: relative;
      text-align: center;
      animation: fadeInUp 0.5s ease;
    ">
      <span id="modal-close" style="
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
      ">&times;</span>
      <img id="modal-image" src="" alt="" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">
      <h2 id="modal-title"></h2>
      <p id="modal-description"></p>
    </div>
  `;
  document.body.appendChild(modal);

 
  const closeModal = () => {
    modal.style.display = 'none';
  };

  document.getElementById('modal-close').addEventListener('click', closeModal);

 
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

 
  document.querySelectorAll('.tea-otm-item').forEach((item) => {
    item.addEventListener('click', () => {
      const teaTitleElement = item.querySelector('h4');
      const teaTitle = teaTitleElement.innerText.trim();
      const details = teaDetails[teaTitle];
      if (details) {
        document.getElementById('modal-title').textContent = details.title;
        document.getElementById('modal-description').textContent = details.description;
        document.getElementById('modal-image').src = details.image;
        document.getElementById('modal-image').alt = details.title;
        modal.style.display = 'flex';
      }
    });
  });


  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetClass = link.innerText.trim().toLowerCase();
      const target = document.querySelector(`section.${targetClass}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dark mode
  const themeToggler = document.createElement('button');
  themeToggler.innerText = 'Toggle Dark Mode';
  Object.assign(themeToggler.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '0.5rem 1rem',
    backgroundColor: '#d4af37',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: '1001',
  });
  document.body.appendChild(themeToggler);

  let darkMode = false;
  themeToggler.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.style.setProperty('--background-color', '#1e1e1e');
      document.documentElement.style.setProperty('--primary-color', '#e0e0e0');
      document.documentElement.style.setProperty('--secondary-color', '#a8a8a8');
      document.documentElement.style.setProperty('--header-background', '#2a2a2a');
      document.documentElement.style.setProperty('--footer-background', '#2a2a2a');
      document.documentElement.style.setProperty('--footer-text', '#ccc');
    } else {
      document.documentElement.style.setProperty('--background-color', '#f4f4f4');
      document.documentElement.style.setProperty('--primary-color', '#3a3a3a');
      document.documentElement.style.setProperty('--secondary-color', '#7e7e7e');
      document.documentElement.style.setProperty('--header-background', '#fff');
      document.documentElement.style.setProperty('--footer-background', '#333');
      document.documentElement.style.setProperty('--footer-text', '#ccc');
    }
  });
});
