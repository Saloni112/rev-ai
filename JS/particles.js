// particles.js
class ParticleSystem {
  constructor() {
    this.container = document.getElementById('particles-container');
    this.particles = [];
    this.init();
  }

  init() {
    this.createParticles(50);
    this.animate();
  }

  createParticles(count) {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      // Random color based on type
      const types = ['primary', 'secondary', 'accent'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      switch(type) {
        case 'primary':
          particle.style.backgroundColor = '#00D4FF';
          particle.style.boxShadow = '0 0 10px #00D4FF';
          break;
        case 'secondary':
          particle.style.backgroundColor = '#9D4EDD';
          particle.style.boxShadow = '0 0 10px #9D4EDD';
          break;
        case 'accent':
          particle.style.backgroundColor = '#00FF9D';
          particle.style.boxShadow = '0 0 10px #00FF9D';
          break;
      }
      
      this.container.appendChild(particle);
      this.particles.push(particle);
    }
  }

  animate() {
    // Update particle positions
    this.particles.forEach(particle => {
      if (Math.random() < 0.01) {
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
      }
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize particle system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
});