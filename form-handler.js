document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    })
    .then(() => {
      alert('Form submitted successfully!'); // Replace with your custom success message
      this.reset();
    })
    .catch((error) => alert('Error!', error));
  });