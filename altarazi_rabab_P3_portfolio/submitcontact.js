document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you as soon as possible.');
        this.reset();
    });
});
