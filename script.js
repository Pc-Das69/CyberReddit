// Register form
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = registerForm['username'].value;

  // Simulate registration process
  console.log('User registered with username:', username);
  alert('User registered with username: ' + username);
  // You can redirect the user to another page after successful registration
});
