// Simple client-side contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const alertDiv = document.getElementById('formAlert');
  if(!name || !email || !msg){
    alertDiv.style.display = 'block';
    alertDiv.className = 'alert alert-danger';
    alertDiv.textContent = 'Please fill out all fields.';
    return;
  }
  // No backend in this template — show success message
  alertDiv.style.display = 'block';
  alertDiv.className = 'alert alert-success';
  alertDiv.textContent = 'Thanks! Your message has been received (demo).';
  this.reset();
});
