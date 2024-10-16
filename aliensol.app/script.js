// Function to show alert with the authorization token
function showAlert() {
    // Retrieve the token from localStorage (or sessionStorage if needed)
    const authToken = localStorage.getItem('authToken'); // key used while storing the token

    // Check if token exists
    if (authToken) {
        alert(`Authorization Token: Bearer ${authToken}`);
    } else {
        alert('Authorization token not found in storage.');
    }
}

// Add event listener to the button
document.getElementById('alertButton').addEventListener('click', showAlert);
