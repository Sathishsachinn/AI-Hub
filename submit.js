document.addEventListener('DOMContentLoaded', () => {
  // Theme Setup
  const themeToggle = document.getElementById('theme-toggle');
  let currentTheme = localStorage.getItem('aihub_theme');
  
  if (!currentTheme) {
    currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      localStorage.setItem('aihub_theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
      themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-circle-half-stroke"></i>';
    });
  }

  // Toast Functionality
  const toast = document.getElementById('toast');
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Form Submission Mock
  const submitForm = document.getElementById('submit-form');
  if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = submitForm.querySelector('.submit-btn');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      btn.disabled = true;
      
      // Simulate network request
      setTimeout(() => {
        showToast('Success! Tool submitted for review.');
        submitForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1500);
    });
  }
});
