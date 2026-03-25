/* ===== SCROLL ANIMATIONS (IntersectionObserver) ===== */
(function () {
  const targets = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, stop observing to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach((el) => observer.observe(el));

  // Also animate stat numbers when visible
  const statNumbers = document.querySelectorAll('.stat-number');
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => statObserver.observe(el));

  function animateStat(el) {
    const text = el.textContent.trim();
    // Only animate pure numbers
    const num = parseFloat(text);
    if (isNaN(num)) return;

    const isDecimal = text.includes('.');
    const decimals  = isDecimal ? (text.split('.')[1] || '').length : 0;
    const duration  = 1200;
    const start     = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const current  = num * eased;
      el.textContent = isDecimal
        ? current.toFixed(decimals)
        : Math.floor(current).toString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = text; // restore original exactly
    }
    requestAnimationFrame(step);
  }
})();
