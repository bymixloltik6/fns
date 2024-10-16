// Example token for demonstration
const authToken = 'Bearer your_authorization_token_here';

// Function to show alert with the authorization token
function showAlert() {
    alert(`Authorization Token: ${authToken}`);
}

// Add event listener to the button
document.getElementById('alertButton').addEventListener('click', showAlert);
