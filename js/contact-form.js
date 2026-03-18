/* ===== CONTACT FORM JS ===== */
(function () {
  const form   = document.getElementById('contactForm');
  const note   = document.getElementById('formNote');
  const submit = document.getElementById('formSubmit');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = form.querySelector('#fname').value.trim();
    const email   = form.querySelector('#femail').value.trim();
    const subject = form.querySelector('#fsubject').value.trim();
    const message = form.querySelector('#fmessage').value.trim();

    // Basic validation
    if (!name) { showNote('Please enter your name.', true); return; }
    if (!isValidEmail(email)) { showNote('Please enter a valid email address.', true); return; }
    if (!message) { showNote('Please write a message before sending.', true); return; }

    // Open default email client as fallback (works without a backend)
    const mailSubject = subject || `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:anoopreddythokala@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;

    // Open mailto
    window.location.href = mailto;

    // Show success
    showNote('✓ Opening your email client — thank you for reaching out!', false);
    submit.disabled = true;
    submit.textContent = 'Message Ready ✓';

    setTimeout(() => {
      submit.disabled = false;
      submit.innerHTML = 'Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    }, 5000);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showNote(message, isError) {
    note.textContent = message;
    note.className   = 'form-note' + (isError ? ' error' : '');
    if (!isError) {
      setTimeout(() => { note.textContent = ''; note.className = 'form-note'; }, 7000);
    }
  }

  // Clear error on input
  form.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('input', () => {
      if (note.classList.contains('error')) {
        note.textContent = '';
        note.className   = 'form-note';
      }
    });
  });
})();
