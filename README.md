# Anoop Reddy Thokala — Personal Portfolio

A modern, dark-themed, recruiter-focused personal portfolio website for a Cybersecurity & Linux Automation student.

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← Main HTML (all sections)
├── assets/
│   └── Anoop_Reddy_CV.pdf      ← CV (linked in Download CV buttons)
├── css/
│   ├── reset.css               ← CSS reset / normalization
│   ├── variables.css           ← Design tokens (colors, fonts, spacing)
│   ├── base.css                ← Global styles, buttons, containers
│   ├── cursor.css              ← Custom glowing cursor + trail
│   ├── nav.css                 ← Sticky navbar + mobile hamburger menu
│   ├── hero.css                ← Hero section (avatar, headline, CTAs)
│   ├── about.css               ← About section + education timeline + stats
│   ├── skills.css              ← Skills grid cards
│   ├── projects.css            ← Project cards + terminal/browser mockups
│   ├── certifications.css      ← Certification glass cards
│   ├── achievements.css        ← Achievement badge + animated card
│   ├── contact.css             ← Contact links + message form
│   ├── footer.css              ← Footer layout
│   └── animations.css          ← Scroll fade-in animations + section glows
└── js/
    ├── cursor.js               ← Custom cursor tracking + trail effect
    ├── nav.js                  ← Navbar scroll behavior + active link highlight
    ├── hero-canvas.js          ← Cyber grid + matrix rain canvas animation
    ├── animations.js           ← IntersectionObserver fade-in + stat counter
    └── contact-form.js         ← Form validation + mailto fallback
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary background | `#050a18` |
| Card background | `rgba(8,18,46,0.55)` |
| Accent (cyan) | `#00d4ff` |
| Accent 2 (blue) | `#0066ff` |
| Heading font | Poppins |
| Body font | Inter |
| Mono font | Space Mono |

---

## ✏️ Customization

- **Profile photo**: Replace the base64 image in `index.html` (search for `class="avatar-img"`) with a new `src` path
- **CV**: Replace `assets/Anoop_Reddy_CV.pdf` with an updated PDF — the filename must remain the same, or update all `href="assets/Anoop_Reddy_CV.pdf"` references in `index.html`
- **Colors**: Edit `css/variables.css` — all colors are CSS custom properties
- **Content**: All text content lives in `index.html` — sections are clearly commented

---

## ✅ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Custom glowing cursor with trail effect
- ✅ Cyber grid + matrix rain canvas hero animation
- ✅ Glassmorphism cards throughout
- ✅ Smooth scroll + active nav link highlighting
- ✅ IntersectionObserver scroll animations
- ✅ Animated stat counters
- ✅ Floating tech icons in hero
- ✅ Terminal & browser mockup illustrations
- ✅ Verified certification links
- ✅ Contact form with mailto fallback
- ✅ SEO meta tags (title, description, keywords, OG)
- ✅ ARIA labels for accessibility
- ✅ Zero external JS dependencies

---

© 2026 Anoop Reddy Thokala
