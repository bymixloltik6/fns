// Example URL for making a request (update this with your actual API endpoint)
const apiUrl = 'https://example.com/api/resource'; 

// Function to make the request and display the Authorization token
function showAlert() {
    // Token that would normally be in headers
    const authToken = 'Bearer ' + localStorage.getItem('authToken'); // or sessionStorage.getItem

    // Make a request with the token in headers
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': authToken,
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.ok) {
            alert(`Authorization Token: ${authToken}`);
        } else {
            alert('Request failed. Unable to display token.');
        }
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
}

// Add event listener to the button
document.getElementById('alertButton').addEventListener('click', showAlert);
