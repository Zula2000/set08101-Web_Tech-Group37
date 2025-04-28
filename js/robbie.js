// --- script.js ---
// Robbie's JS

document.addEventListener("DOMContentLoaded", function () {
    const storyText = document.getElementById("story");
    const shadowTrailBtn = document.getElementById("shadowTrailBtn");
    const riverPathBtn = document.getElementById("riverPathBtn");

    shadowTrailBtn.addEventListener("click", function () {
        storyText.innerHTML = "You have died! Try again";
        shadowTrailBtn.remove();
        riverPathBtn.remove();
    });

    riverPathBtn.addEventListener("click", function () {
        storyText.innerHTML = "You following the path up the river and as you draw near you see a shining pot of gold sitting there, waiting for you to take it.";
        shadowTrailBtn.remove();
        riverPathBtn.remove();
    });
});

// Navigation to a different page
function goToPage(pageId) {
    document.body.classList.add('fade-out'); // Apply fade-out effect
    setTimeout(() => {
        window.location.href = pageId + ".html"; // Navigate to target page
    }, 500); // Wait for fade-out animation to complete
}

// Save the current page to localStorage
function saveProgress(currentPage) {
    localStorage.setItem('savedPage', currentPage);
    alert("Game progress saved!");
}

// Load the saved page from localStorage
function loadProgress() {
    const savedPage = localStorage.getItem('savedPage');
    if (savedPage) {
        window.location.href = savedPage + ".html";
    } else {
        alert("No saved progress found!");
    }
}

// Apply fade-in effect when page loads
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

// Optional helper: Clear saved progress (for testing)
function clearProgress() {
    localStorage.removeItem('savedPage');
    alert("Saved progress cleared.");
}
