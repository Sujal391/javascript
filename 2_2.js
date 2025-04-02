// Create a function that generates a navigation menu from an array of page names
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = '';
   
    if (!name) {
        errorMessage.textContent = 'Name is required';
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address';
        return;
    }
    
    errorMessage.textContent = 'Form submitted successfully!';
    
    console.log('Form data:', { name, email });
});