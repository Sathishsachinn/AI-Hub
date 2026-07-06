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
  googleLogin.addEventListener('click', async () => {
    await signInWithProvider('google');
  });
}

const githubLogin = document.getElementById('github-login');
if (githubLogin) {
  githubLogin.addEventListener('click', async () => {
    await signInWithProvider('github');
  });
}

async function signInWithProvider(providerName) {
  if (!window.AIHubAuth || !window.AIHubAuth.enabled || !window.AIHubAuth.auth || !window.firebase) {
    showToast('Firebase is not configured. Please update firebase-config.js.');
    return;
  }

  const provider = providerName === 'google'
    ? new firebase.auth.GoogleAuthProvider()
    : new firebase.auth.GithubAuthProvider();

  if (providerName === 'github') {
    provider.addScope('user:email');
  }

  try {
    showToast(`Connecting to ${providerName === 'google' ? 'Google' : 'GitHub'}...`);
    const result = await window.AIHubAuth.auth.signInWithPopup(provider);
    const user = result.user;
    try {
      await window.AIHubAuth.upsertUserProfile(user.uid, {
        name: user.displayName || '',
        email: user.email || '',
        provider: providerName,
        photoURL: user.photoURL || '',
        lastLoginAt: new Date().toISOString()
      });
    } catch (dbErr) {
      console.error('OAuth profile sync error:', dbErr);
      showToast(`Logged in, but DB sync failed (${dbErr.code || 'unknown'}).`);
    }
    localStorage.setItem('aihub_user', user.email || user.uid);
    showToast('Login successful!');
    setTimeout(() => { window.location.href = 'index.html'; }, 700);
  } catch (err) {
    console.error(`${providerName} OAuth error:`, err);
    if (err.code === 'auth/popup-closed-by-user') {
      showToast('Login popup was closed.');
    } else if (err.code === 'auth/operation-not-allowed') {
      showToast(`Enable ${providerName === 'google' ? 'Google' : 'GitHub'} provider in Firebase.`);
    } else if (err.code === 'auth/unauthorized-domain') {
      showToast('Add this domain in Firebase Authorized domains.');
    } else {
      showToast(`${providerName === 'google' ? 'Google' : 'GitHub'} login failed (${err.code || 'unknown'}).`);
    }
  }
}

// Firebase Auth Logic
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      showToast('Please fill in all fields.');
      return;
    }

    if (!window.AIHubAuth || !window.AIHubAuth.enabled || !window.AIHubAuth.auth) {
      showToast('Firebase is not configured. Please update firebase-config.js.');
      return;
    }

    try {
      const cred = await window.AIHubAuth.auth.signInWithEmailAndPassword(email, password);
      try {
        await window.AIHubAuth.upsertUserProfile(cred.user.uid, {
          email: cred.user.email || email,
          lastLoginAt: new Date().toISOString()
        });
      } catch (dbErr) {
        console.error('Email login profile sync error:', dbErr);
        showToast(`Login ok, DB sync failed (${dbErr.code || 'unknown'}).`);
      }
      localStorage.setItem('aihub_user', cred.user.email || email);
      showToast('Login successful!');
      setTimeout(() => { window.location.href = 'index.html'; }, 700);
    } catch (err) {
      console.error('Email login error:', err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        showToast('Invalid email or password.');
      } else if (err.code === 'auth/operation-not-allowed') {
        showToast('Enable Email/Password in Firebase Authentication.');
      } else if (err.code === 'auth/too-many-requests') {
        showToast('Too many attempts. Please try again later.');
      } else if (err.code === 'auth/network-request-failed') {
        showToast('Network error. Check internet and try again.');
      } else if (err.code === 'auth/invalid-email') {
        showToast('Please enter a valid email address.');
      } else if (err.code === 'auth/unauthorized-domain') {
        showToast('Add this domain in Firebase Authorized domains.');
      } else {
        showToast(`Login failed (${err.code || 'unknown'}).`);
      }
    }
  });
}
