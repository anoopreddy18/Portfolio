/* ===== HERO CANVAS: CYBER GRID + MATRIX RAIN ===== */
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, raf;
  const chars = '01アイウエオカキクケコ#$%&?<>{}[]';
  const COLS_DATA = [];
  const FONT_SIZE = 13;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    initCols();
  }

  function initCols() {
    COLS_DATA.length = 0;
    const cols = Math.floor(W / FONT_SIZE);
    for (let i = 0; i < cols; i++) {
      COLS_DATA.push({
        y: Math.random() * -H,
        speed: 0.5 + Math.random() * 1.2,
        opacity: 0.03 + Math.random() * 0.07,
      });
    }
  }

  function drawGrid() {
    // Subtle horizontal + vertical grid lines
    const step = 60;
    ctx.strokeStyle = 'rgba(0,212,255,0.04)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < W; x += step) {
      ctx.moveTo(x, 0); ctx.lineTo(x, H);
    }
    for (let y = 0; y < H; y += step) {
      ctx.moveTo(0, y); ctx.lineTo(W, y);
    }
    ctx.stroke();
  }

  function drawMatrix() {
    ctx.font = `${FONT_SIZE}px "Space Mono", monospace`;
    COLS_DATA.forEach((col, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * FONT_SIZE;

      // Head glow
      ctx.fillStyle = `rgba(0,212,255,${col.opacity * 4})`;
      ctx.fillText(char, x, col.y);

      // Trailing chars above
      for (let j = 1; j < 6; j++) {
        const ty = col.y - j * FONT_SIZE;
        if (ty < 0) continue;
        ctx.fillStyle = `rgba(0,180,255,${col.opacity * (1 - j * 0.18)})`;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, ty);
      }

      col.y += col.speed;
      if (col.y > H + FONT_SIZE * 8) {
        col.y = -FONT_SIZE * (5 + Math.random() * 20);
        col.speed = 0.5 + Math.random() * 1.2;
      }
    });
  }

  function drawGlowNodes() {
    // Animated intersection nodes on grid
    const t = Date.now() * 0.001;
    const step = 60;
    ctx.fillStyle = 'rgba(0,212,255,0.25)';
    for (let x = 60; x < W; x += step * 2) {
      for (let y = 60; y < H; y += step * 2) {
        const pulse = 0.5 + 0.5 * Math.sin(t + x * 0.01 + y * 0.01);
        ctx.globalAlpha = pulse * 0.18;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawGlowNodes();
    drawMatrix();
    raf = requestAnimationFrame(render);
  }

  window.addEventListener('resize', () => { resize(); });
  resize();
  render();
})();
