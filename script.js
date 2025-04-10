document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const messageElement = document.getElementById('message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        // Clear previous messages
        messageElement.textContent = '';
        messageElement.className = 'message-container';
        
        // Validate inputs
        if (username !== 'Matthew') {
            showMessage('Username is required', 'error');
            return;
        }
        
        if (password !== "12*Ba") {
            showMessage('Invalid password. The correct password is 12*Ba', 'error');
            return;
        }
        
        // Successful login
        showMessage(`Login successful! Welcome, ${username}`, 'success');
    });
    
    function showMessage(text, type) {
        messageElement.textContent = text;
        messageElement.classList.add(type);
    }
});