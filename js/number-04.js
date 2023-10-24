const form = document.getElementById('myForm');
const errorMessagesDiv = document.getElementById('errorMessages');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorMessagesDiv.innerHTML = '';
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach((field) => {
        if (field.value.trim() === '') {
            const fieldName = field.getAttribute('name');
            const errorMessage = document.createElement('p');
            errorMessage.textContent = `${fieldName} is required.`;
            errorMessagesDiv.appendChild(errorMessage);
        }
    });
});