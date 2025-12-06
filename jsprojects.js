// js/projects.js - Projects Section Functionality

// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-15px)';
        console.log('🎨 Project card ' + (index + 1) + ' hovered!');
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });

    // Click effect
    card.addEventListener('click', function() {
        const title = this.querySelector('.project-title').textContent;
        console.log('🔗 Project clicked:', title);
    });
});

// Add stagger animation to project cards on load
projectCards.forEach((card, index) => {
    card.style.animation = `fadeIn 0.6s ease-in-out ${index * 0.1}s both`;
});

console.log('🚀 Projects section loaded with ' + projectCards.length + ' cards!');
