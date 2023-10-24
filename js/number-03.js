function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = color;
        });
    }
}

// Call the function with element ID and desired color
changeBackgroundColor('myDiv', '0f046b');