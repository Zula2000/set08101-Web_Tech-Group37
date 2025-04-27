// sai_main.js - For the homepage load game functionality#
// Sai's JS

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the load game button
    const loadGameBtn = document.getElementById('load-game');
    if (loadGameBtn) {
        loadGameBtn.addEventListener('click', loadGame);
    }
});

// Function to load the last saved game
function loadGame() {
    const lastScene = localStorage.getItem('lastScene');
    
    if (!lastScene) {
        alert('No saved game found! Starting a new game...');
        window.location.href = 'Adventure Pages/scene1.html';
        return;
    }
    
    // Load the last scene
    window.location.href = `Adventure Pages/${lastScene}.html`;
}
