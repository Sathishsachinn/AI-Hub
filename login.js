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

// Toggle Password Visibility
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
  // Show/hide icon depending on whether there is text inside
  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length > 0) {
      togglePassword.style.display = 'block';
    } else {
      togglePassword.style.display = 'none';
      // Reset type back to password when emptied, for safety
      passwordInput.setAttribute('type', 'password');
      togglePassword.classList.remove('fa-eye-slash');
      togglePassword.classList.add('fa-eye');
    }
  });

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
  });
}

// Forgot Password / Sign Up / Social Hooks
const forgotPwLink = document.getElementById('forgot-pw-link');
if (forgotPwLink) {
  forgotPwLink.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Password reset link sent to your email.');
  });
}

const signupLink = document.getElementById('signup-link');
if (signupLink) {
  signupLink.addEventListener('click', (e) => {
    // If it's a real link, we can let it navigate. But we can also transition.
    // e.preventDefault();
    // showToast('Sign up functionality is coming soon!');
  });
}

const googleLogin = document.getElementById('google-login');
if (googleLogin) {
  googleLogin.addEventListener('click', () => {
    const email = prompt("Simulating OAuth: Enter your Google Email to log in:");
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
    const username = prompt("Simulating OAuth: Enter your GitHub Username to log in:");
    if (username && username.trim() !== '') {
      showToast('Connecting to GitHub...');
      setTimeout(() => { 
        localStorage.setItem('aihub_user', username.trim()); 
        window.location.href = 'index.html'; 
      }, 1000);
    }
  });
}

// Fake Auth Logic
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      showToast('Please fill in all fields.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('aihub_users') || '{}');

    if (users[email] && users[email].password === password) {
      localStorage.setItem('aihub_user', email);
      showToast('Login successful!');
      setTimeout(() => { window.location.href = 'index.html'; }, 1000);
    } else {
      showToast('Invalid email or password.');
    }
  });
}
