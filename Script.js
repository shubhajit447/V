// Function to check zoom level
function checkZoom() {
    const zoomWarning = document.getElementById('zoom-warning');
    const zoomLevel = window.devicePixelRatio || 1;

    if (zoomLevel !== 1) {
        // Show warning if zoomed
        zoomWarning.style.display = 'block';
    } else {
        // Hide warning if at 100% zoom
        zoomWarning.style.display = 'none';
    }
}

// Check zoom on page load
document.addEventListener('DOMContentLoaded', checkZoom);

// Check zoom on window resize
window.addEventListener('resize', checkZoom);
