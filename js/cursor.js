/* ===== CURSOR JS ===== */
(function () {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) return; // skip touch devices

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let raf;
  const LERP = 0.14; // ring lag smoothing

  // Track mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
    spawnTrail(mouseX, mouseY);
  });

  // Smooth ring via rAF
  function animateRing() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    raf = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover detection
  const hoverTargets = 'a, button, .btn, .nav-link, .proj-btn, .cert-verify-btn, .ach-link, .contact-item, .social-link, .glass-card';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });

  // Cursor trail
  let lastTrailTime = 0;
  function spawnTrail(x, y) {
    const now = Date.now();
    if (now - lastTrailTime < 40) return; // throttle
    lastTrailTime = now;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top  = y + 'px';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 600);
  }
})();
