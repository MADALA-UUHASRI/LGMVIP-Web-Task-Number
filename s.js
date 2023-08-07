const registrationForm = document.getElementById('registration-form');
const displayData = document.getElementById('display-data');

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = registrationForm.name.value;
  const email = registrationForm.email.value;
  const password = registrationForm.password.value;

  const userData = `
    <h2>Registered User</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
  `;

  displayData.innerHTML = userData;
});
