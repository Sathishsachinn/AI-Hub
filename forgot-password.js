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

// Forgot Password Logic
const forgotForm = document.getElementById('forgot-pw-form');
if (forgotForm) {
  forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const contact = document.getElementById('contact').value.trim();
    
    if (contact.length < 5) {
      showToast('Please enter a valid email or phone number.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('aihub_users') || '{}');
    
    // Check if the contact exists either as an email or phone number
    let foundUser = false;
    for (const emailKey in users) {
      if (emailKey === contact || users[emailKey].phone === contact) {
        foundUser = true;
        break;
      }
    }

    if (foundUser) {
      showToast(`We've sent a password reset link to ${contact}.`);
      // Simulate sending and return to login page
      setTimeout(() => { window.location.href = 'login.html'; }, 2500);
    } else {
      showToast('No account found with that email or phone number.');
    }
  });
}
