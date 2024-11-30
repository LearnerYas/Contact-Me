const gcashBtn = document.getElementById('gcash-btn');
const gcashModal = document.getElementById('gcash-modal');
const closeBtn = document.getElementById('close-btn');
const backBtn = document.getElementById('back-btn');

// Open the modal when the "Donate via GCash" button is clicked
gcashBtn.addEventListener('click', () => {
    gcashModal.style.display = 'block';  // Show the modal
});

// Close the modal when the "X" button is clicked
closeBtn.addEventListener('click', () => {
    gcashModal.style.display = 'none';  // Hide the modal
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === gcashModal) {
        gcashModal.style.display = 'none';  // Hide the modal
    }
});

// Go back to index.html when the back button is clicked
backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';  // Redirect to index.html
});
