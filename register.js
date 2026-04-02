// Toast Logic
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// Theme Toggle Logic
const tBtn = document.getElementById('theme-toggle');
if (tBtn) {
  tBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('aihub_theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  });
}
if (localStorage.getItem('aihub_theme') === 'light') {
  document.body.classList.add('light-theme');
}

const googleLogin = document.getElementById('google-login');
if (googleLogin) {
  googleLogin.addEventListener('click', () => {
    const email = prompt("Simulating OAuth: Enter your Google Email to register:");
    if (email && email.trim() !== '') {
      showToast('Connecting to Google...');
      setTimeout(() => { 
        localStorage.setItem('aihub_user', email.trim()); 
        window.location.href = 'index.html'; 
      }, 1000);
    }
  });
}

const githubLogin = document.getElementById('github-login');
if (githubLogin) {
  githubLogin.addEventListener('click', () => {
    const username = prompt("Simulating OAuth: Enter your GitHub Username to register:");
    if (username && username.trim() !== '') {
      showToast('Connecting to GitHub...');
      setTimeout(() => { 
        localStorage.setItem('aihub_user', username.trim()); 
        window.location.href = 'index.html'; 
      }, 1000);
    }
  });
}

// Fake Auth Logic for Register
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();
    const countryCodeSelect = document.getElementById('country-code');
    const countryCode = countryCodeSelect ? countryCodeSelect.value : '';
    const phone = countryCode + ' ' + phoneInput;
    const password = document.getElementById('password').value;

    if (name.length < 2) {
      showToast('Name must be at least 2 characters.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^[0-9\+\-\(\)\s]{8,20}$/;
    if (!phoneRegex.test(phone)) {
      showToast('Please enter a valid phone number.');
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('aihub_users') || '{}');
    
    if (users[email]) {
      showToast('An account with this email already exists!');
      return;
    }

    users[email] = { name, phone, password };
    localStorage.setItem('aihub_users', JSON.stringify(users));

    localStorage.setItem('aihub_user', email);
    showToast('Registration successful! Logging you in...');
    setTimeout(() => { window.location.href = 'index.html'; }, 1000);
  });
}
