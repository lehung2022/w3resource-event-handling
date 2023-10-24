function updateProgress(progressPercentage) {
    const progressBarFill = document.getElementById('progress');
    progressBarFill.style.width = `${progressPercentage}%`;
}
// Example usage: updating progress to 75%
updateProgress(75);