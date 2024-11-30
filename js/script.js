// Get references to the buttons
const facebookBtn = document.getElementById('facebook-btn');
const githubBtn = document.getElementById('github-btn');
const linkedinBtn = document.getElementById('linkedin-btn');
const portfolioBtn = document.getElementById('portfolio-btn');

// Add click event listeners to open links
facebookBtn.addEventListener('click', () => {
    window.open('https://www.facebook.com/Azazel.Pisslord', '_blank');
});

githubBtn.addEventListener('click', () => {
    window.open('https://github.com/LearnerYas', '_blank');
});

linkedinBtn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/hezekiah-publico-25844833b/', '_blank');
});

const donateBtn = document.getElementById('donate-btn');

donateBtn.addEventListener('click', () => {
    window.location.href = 'coffee.html'; // Replace with the name of your local HTML file
});

portfolioBtn.addEventListener('click', () => {
    window.open('https://learneryas.github.io/Portfolio/', '_blank');
});