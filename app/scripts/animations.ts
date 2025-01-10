export function initializeAnimations() {
  function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = Math.random() * 2 + 'px';
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }
  }

  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const numberOfParticles = 50;
    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = (Math.random() * 5 + 1) + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(particle);
    }
  }

  function createShootingStars() {
    const shootingStarsContainer = document.getElementById('shooting-stars');
    if (!shootingStarsContainer) return;
    
    const numberOfShootingStars = 3;
    for (let i = 0; i < numberOfShootingStars; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.top = Math.random() * 50 + '%';
      shootingStar.style.left = Math.random() * 50 + '%';
      shootingStar.style.animationDelay = Math.random() * 5 + 's';
      shootingStarsContainer.appendChild(shootingStar);
    }
  }

  createStars();
  createParticles();
  createShootingStars();
} 