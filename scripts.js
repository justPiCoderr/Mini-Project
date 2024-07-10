// scripts.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Example: Validate login credentials (replace with actual validation logic)
    const username = formData.get('username');
    const password = formData.get('password');

    // Simulate successful login (replace with actual authentication logic)
    if (username === 'your_username' && password === 'your_password') {
        // Redirect to logged-in.html
        window.location.href = 'logged-in.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
