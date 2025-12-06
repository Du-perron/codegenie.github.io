// js/home.js - Home Section Functionality

// Emoji hover effects
const emojis = document.querySelectorAll('.emoji');
emojis.forEach((emoji, index) => {
    emoji.addEventListener('click', function() {
        this.style.transform = 'scale(1.5) rotate(20deg)';
        console.log('🎉 Emoji ' + (index + 1) + ' clicked!');
        
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// Profile picture animation
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
    profilePic.addEventListener('mouseenter', function() {
        this.style.animation = 'spin 0.6s ease-in-out';
    });
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotateY(0deg); }
        50% { transform: rotateY(180deg); }
        100% { transform: rotateY(360deg); }
    }
`;
document.head.appendChild(style);

console.log('🚀 Home section loaded!');
