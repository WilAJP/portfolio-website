const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('https://script.google.com/macros/s/AKfycbzJ4gr23JUiQn1P6AmmOzXfxrZS-EUjV1wiA4B2TVoddkoecuKM5HI-C8Ncb1E59t9_Gg/exec', { 
        method: 'POST',
        mode: 'no-cors', // No-cors to prevent CORS issues
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        alert('Your message has been sent!');
        form.reset(); // Reset the form after submission
    })
    .catch(error => {
        alert('There was a problem sending your message.');
        console.error('Error:', error);
    });
});
