// js/navbar.js - Navbar Functionality

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            console.log('🔗 Scrolling to:', this.getAttribute('href'));
        }
    });
});

// Logo click to scroll to home
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', function() {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        console.log('🏠 Scrolled to home');
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.5)';
    } else {
        navbar.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.4)';
    }
});

console.log('✨ Navbar loaded successfully!');
