(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDzKgIke8ruF7G4hNXEpDrjlKkAqNiKQTA",
    authDomain: "ai-hub-6d811.firebaseapp.com",
    databaseURL: "https://ai-hub-6d811-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ai-hub-6d811",
    storageBucket: "ai-hub-6d811.firebasestorage.app",
    messagingSenderId: "268940291618",
    appId: "1:268940291618:web:59f35ec84af4b6f465647b"
  };

  const hasRealConfig =
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.includes("YOUR_FIREBASE_API_KEY") &&
    firebaseConfig.projectId &&
    !firebaseConfig.projectId.includes("YOUR_PROJECT_ID");

  const fallback = {
    enabled: false,
    auth: null,
    db: null,
    getCurrentUser: () => null,
    onAuthStateChanged: () => {},
    signOut: async () => {},
    upsertUserProfile: async () => {}
  };

  if (!window.firebase) {
    window.AIHubAuth = fallback;
    return;
  }

  if (!hasRealConfig) {
    console.warn("Firebase config is not set. Update firebase-config.js with your project values.");
    window.AIHubAuth = fallback;
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const db = firebase.database();

  // Ensure auth persistence so sign-ins survive page reloads/redirects.
  // Use the compat API's Persistence constants and handle any errors silently.
  try {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(err => {
      console.warn('Failed to set auth persistence:', err);
    });
  } catch (e) {
    // Older SDKs or unavailable API — ignore and continue (fallback will still work).
    console.warn('Auth persistence not supported in this environment:', e);
  }

  window.AIHubAuth = {
    enabled: true,
    auth,
    db,
    getCurrentUser: () => auth.currentUser,
    onAuthStateChanged: (cb) => auth.onAuthStateChanged(cb),
    signOut: () => auth.signOut(),
    upsertUserProfile: async (uid, payload) => {
      await db.ref(`users/${uid}`).update(payload);
    }
  };
})();
