// --- script.js ---

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
