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
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString()
      });
    } catch (dbErr) {
      console.error('OAuth registration profile sync error:', dbErr);
      showToast(`Logged in, but DB sync failed (${dbErr.code || 'unknown'}).`);
    }
    localStorage.setItem('aihub_user', user.email || user.uid);
    showToast('Registration successful! Logging you in...');
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

// Firebase Auth Logic for Register
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
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

    if (!window.AIHubAuth || !window.AIHubAuth.enabled || !window.AIHubAuth.auth) {
      showToast('Firebase is not configured. Please update firebase-config.js.');
      return;
    }

    try {
      const cred = await window.AIHubAuth.auth.createUserWithEmailAndPassword(email, password);
      try {
        await window.AIHubAuth.upsertUserProfile(cred.user.uid, {
          name,
          email,
          phone,
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString()
        });
      } catch (dbErr) {
        console.error('Email registration profile sync error:', dbErr);
        showToast(`Registered, but DB sync failed (${dbErr.code || 'unknown'}).`);
      }
      localStorage.setItem('aihub_user', email);
      showToast('Registration successful! Logging you in...');
      setTimeout(() => { window.location.href = 'index.html'; }, 700);
    } catch (err) {
      console.error('Email registration error:', err);
      if (err.code === 'auth/email-already-in-use') {
        showToast('An account with this email already exists!');
      } else if (err.code === 'auth/operation-not-allowed') {
        showToast('Enable Email/Password in Firebase Authentication.');
      } else if (err.code === 'auth/invalid-email') {
        showToast('Please enter a valid email address.');
      } else if (err.code === 'auth/weak-password') {
        showToast('Password is too weak. Use at least 6 characters.');
      } else if (err.code === 'auth/unauthorized-domain') {
        showToast('Add this domain in Firebase Authorized domains.');
      } else if (err.code === 'auth/network-request-failed') {
        showToast('Network error. Check internet and try again.');
      } else {
        showToast(`Registration failed (${err.code || 'unknown'}).`);
      }
    }
  });
}
