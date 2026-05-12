// dark mode

const darkStyles = document.createElement("style");
darkStyles.id = "dark-mode-styles";
darkStyles.textContent = `
  :root.dark {
    --white: #0d1117;
    --off-white: #141d2b;
    --green: #9fef00;
    --green-light: #b3ff1a;
    --green-pale: rgba(159, 239, 0, 0.10);
    --green-glow: rgba(159, 239, 0, 0.18);
    --dark: #e8f5e9;
    --gray: #a4b3c1;
    --gray-light: #2a3a4a;
  }

  :root.dark body {
    background-color: #0d1117;
    color: #e8f5e9;
  }

  /* Navbar */
  :root.dark .navbar {
    background: rgba(13, 17, 23, 0.92);
    border-bottom: 1px solid #1f2d3d;
    box-shadow: 0 0 40px rgba(159, 239, 0, 0.04);
  }
  :root.dark .nav-logo {
  color: #e8f5e9;
}
:root.dark .nav-item {
  color: #a4b3c1;
}
:root.dark .nav-item:hover,
:root.dark .nav-item.active {
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
}
:root.dark .nav-btn {
  background: #9fef00;
  color: #0d1117;
  font-weight: 700;
}
:root.dark .nav-btn:hover {
  background: #b3ff1a;
  box-shadow: 0 8px 32px rgba(159, 239, 0, 0.35);
}
:root.dark .hamburger span {
  background: #e8f5e9;
}

/* Hero */
:root.dark .hero {
  background-color: #0d1117;
}

  /* Grid hijau */
:root.dark .hero::before {
  background-image:
    linear-gradient(rgba(159, 239, 0, 0.46) 1px, transparent 1px),
    linear-gradient(90deg, rgba(159, 239, 0, 0.47) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Sembunyikan foto light mode */
:root.dark .photo-full {
  display: none;
}

/* gelap buat gambar hero */
:root.dark .hero-center::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("img/gambar_dark.png"); 
  background-size: cover;
  background-position: center top;
  z-index: 1;
  pointer-events: none;
}

/* sama juga baut gambaer hero */
/* :root.dark .hero-center::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to right,
      rgba(13, 17, 23, 0.92) 0%,
      rgba(13, 17, 23, 0.25) 38%,
      rgba(13, 17, 23, 0.15) 55%,
      rgba(13, 17, 23, 0.85) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(13, 17, 23, 0.3) 0%,
      transparent 20%,
      transparent 80%,
      rgba(13, 17, 23, 0.5) 100%
    );
  z-index: 2;
  pointer-events: none;
} */



  :root.dark .hero-tag {
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
  border: 1px solid rgba(159, 239, 0, 0.2);
}
:root.dark .hero-greeting {
  color: #a4b3c1;
}
:root.dark .hero-greeting-name {
  color: #9fef00;
}
:root.dark .hero-name {
  color: #e8f5e9;
  text-shadow: 0 0 40px rgba(159, 239, 0, 0.15);
}
:root.dark .hero-name-highlight {
  color: #9fef00;
}
:root.dark .hero-name-highlight::after {
  background: rgba(159, 239, 0, 0.12);
}
:root.dark .hero-divider {
  background: #9fef00;
  box-shadow: 0 0 12px rgba(159, 239, 0, 0.5);
}
:root.dark .hero-sub {
  color: #a4b3c1;
}
:root.dark .social-link {
  background: #141d2b;
  border-color: #2a3a4a;
  color: #a4b3c1;
}
:root.dark .social-link:hover {
  border-color: #9fef00;
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
  box-shadow: 0 0 16px rgba(159, 239, 0, 0.25);
}

:root.dark .welcome-card {
  background: rgba(20, 29, 43, 0.95);
  border: 1px solid #1f2d3d;
  box-shadow: 0 0 40px rgba(159, 239, 0, 0.06);
}
:root.dark .welcome-card::before {
  background: linear-gradient(to bottom, #9fef00, #b3ff1a);
  box-shadow: 2px 0 16px rgba(159, 239, 0, 0.4);
}
:root.dark .welcome-label {
  color: #9fef00;
}
:root.dark .welcome-heading {
  color: #e8f5e9;
}
:root.dark .welcome-heading em {
  color: #9fef00;
}
:root.dark .welcome-text {
  color: #a4b3c1;
}

:root.dark .btn-primary {
  background: #9fef00;
  color: #0d1117;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(159, 239, 0, 0.25);
}
:root.dark .btn-primary:hover {
  background: #b3ff1a;
  box-shadow: 0 8px 32px rgba(159, 239, 0, 0.4);
}
:root.dark .btn-ghost {
  color: #9fef00;
  border-color: #9fef00;
}
:root.dark .btn-ghost:hover {
  background: rgba(159, 239, 0, 0.1);
}

:root.dark .stat-row {
  background: #141d2b;
  border: 1px solid #1f2d3d;
}
:root.dark .stat-number {
  color: #9fef00;
  text-shadow: 0 0 12px rgba(159, 239, 0, 0.5);
}
:root.dark .stat-label {
  color: #a4b3c1;
}
:root.dark .stat-divider {
  background: rgba(159, 239, 0, 0.15);
}

:root.dark .loop {
  background: #080d13;
}
:root.dark .loop::before {
  background: linear-gradient(to right, #080d13, transparent);
}
:root.dark .loop::after {
  background: linear-gradient(to left, #080d13, transparent);
}
:root.dark .card {
  color: #9fef00;
  filter: drop-shadow(0 0 8px rgba(159, 239, 0, 0.4));
}

:root.dark .about {
  background: #0d1117;
}
:root.dark .about-bg {
  opacity: 0.6;
  background-image: url("img/bg-about-dark.png")
}
:root.dark .about-tag {
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
  border: 1px solid rgba(159, 239, 0, 0.2);
}
:root.dark .about-title {
  color: #e8f5e9;
}
:root.dark .about-title-highlight {
  color: #9fef00;
}
:root.dark .about-title-highlight::after {
  background: rgba(159, 239, 0, 0.1);
}
:root.dark .about-divider {
  background: #9fef00;
  box-shadow: 0 0 10px rgba(159, 239, 0, 0.5);
}
:root.dark .about-desc {
  color: #a4b3c1;
}
:root.dark .about-desc strong {
  color: #e8f5e9;
}
:root.dark .info-item {
  background: #141d2b;
  border-color: #1f2d3d;
}
:root.dark .info-label {
  color: #9fef00;
}
:root.dark .info-value {
  color: #e8f5e9;
}
:root.dark .about-img {
  border-color: #1f2d3d;
  filter: brightness(0.85) saturate(0.7);
}
:root.dark .about-badge {
  background: #141d2b;
  border: 1px solid rgba(159, 239, 0, 0.2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}
:root.dark .badge-num {
  color: #9fef00;
  text-shadow: 0 0 12px rgba(159, 239, 0, 0.5);
}
:root.dark .badge-text {
  color: #a4b3c1;
}

:root.dark .projects {
  background: #080d13;
}
:root.dark .proj-tag {
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
  border: 1px solid rgba(159, 239, 0, 0.2);
}
:root.dark .proj-title {
  color: #e8f5e9;
}
:root.dark .proj-highlight {
  color: #9fef00;
}
:root.dark .proj-highlight::after {
  background: rgba(159, 239, 0, 0.12);
}
:root.dark .proj-divider {
  background: #9fef00;
  box-shadow: 0 0 10px rgba(159, 239, 0, 0.5);
}
:root.dark .proj-desc {
  color: #a4b3c1;
}
:root.dark .proj-img-wrap {
  border-color: #1f2d3d;
}
:root.dark .proj-card-title {
  color: #e8f5e9;
}
:root.dark .proj-detail-btn {
  background: #9fef00;
  color: #0d1117;
}
:root.dark .proj-detail-btn:hover {
  background: #b3ff1a;
  box-shadow: 0 0 16px rgba(159, 239, 0, 0.4);
}
:root.dark .dot {
  background: #2a3a4a;
}
:root.dark .dot.active {
  background: #9fef00;
  box-shadow: 0 0 8px rgba(159, 239, 0, 0.5);
}

:root.dark .modal-overlay {
  background: rgba(8, 13, 19, 0.85);
}
:root.dark .modal-box {
  background: #141d2b;
  border: 1px solid #1f2d3d;
  box-shadow: 0 0 60px rgba(159, 239, 0, 0.08);
}
:root.dark .modal-close {
  background: #1f2d3d;
  color: #e8f5e9;
}
:root.dark .modal-close:hover {
  background: #9fef00;
  color: #0d1117;
}
:root.dark .modal-proj-tag {
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
}
:root.dark .modal-proj-title {
  color: #e8f5e9;
}
:root.dark .modal-proj-desc {
  color: #a4b3c1;
}
:root.dark .tech-tag {
  color: #e8f5e9;
  background: #1f2d3d;
  border-color: #2a3a4a;
}
:root.dark .modal-link {
  background: #9fef00;
  color: #0d1117;
  font-weight: 700;
}
:root.dark .modal-link:hover {
  background: #b3ff1a;
  box-shadow: 0 8px 32px rgba(159, 239, 0, 0.35);
}

:root.dark .nav-links[style*="flex"] {
  background: #141d2b !important;
  border-bottom-color: #1f2d3d !important;
}

:root.dark .hero-tag i,
:root.dark .about-tag i,
:root.dark .proj-tag i {
  filter: drop-shadow(0 0 4px rgba(159, 239, 0, 0.6));
}

  /* dark mode skill */
:root.dark .skills {
  background: #0d1117;
}

:root.dark .skill-tag {
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
  border-color: rgba(159, 239, 0, 0.2);
}

:root.dark .skill-title {
  color: #e8f5e9;
}

:root.dark .skill-highlight {
  color: #9fef00;
}

:root.dark .skill-highlight::after {
  background: rgba(159, 239, 0, 0.12);
}

:root.dark .skill-divider {
  background: #9fef00;
  box-shadow: 0 0 10px rgba(159, 239, 0, 0.5);
}

:root.dark .skill-desc {
  color: #a4b3c1;
}

:root.dark .skill-card {
  
  background: #141d2b;
  border-color:#1f2d3d;
}

:root.dark .skill-card:hover {
  box-shadow: 
    inset 0 0 0 2px #9fef00,
    0 8px 32px rgba(159, 239, 0, 0.12);
}

:root.dark .skill-num {
  color: #2a3a4a;
}

:root.dark .skill-icon {
  color: #9fef00;
}

:root.dark .tailwind {
  color: #9fef00;
}

:root.dark .skill-card:hover .skill-icon {
  color: #9fef00;
}

:root.dark .skill-name {
  color: #e8f5e9;
}

:root.dark .skill-hover {
  background: #080d13;
  border: 2px solid var(--green);
}

:root.dark .skill-hover-title {
  color: #9fef00;
  text-shadow: 0 0 12px rgba(159, 239, 0, 0.4);
}

:root.dark .skill-hover-desc {
  color: #a4b3c1;
}

/* kontak */
:root.dark .contact {
  background: #0d1117;
}

:root.dark .contact-tag {
  color: #9fef00;
  background: rgba(159, 239, 0, 0.1);
  border-color: rgba(159, 239, 0, 0.2);
}

:root.dark .contact-title {
  color: #e8f5e9;
}

:root.dark .contact-highlight {
  color: #9fef00;
}

:root.dark .contact-highlight::after {
  background: rgba(159, 239, 0, 0.1);
}

:root.dark .contact-divider {
  background: #9fef00;
  box-shadow: 0 0 10px rgba(159, 239, 0, 0.5);
}

:root.dark .contact-desc {
  color: #a4b3c1;
}

:root.dark .contact-info-item {
  background: #141d2b;
  border-color: #1f2d3d;
}

:root.dark .contact-info-item:hover {
  border-color: rgba(159, 239, 0, 0.3);
  box-shadow: 0 4px 16px rgba(159, 239, 0, 0.08);
}

:root.dark .contact-info-icon {
  background: rgba(159, 239, 0, 0.1);
  border-color: rgba(159, 239, 0, 0.2);
  color: #9fef00;
}

:root.dark .contact-info-label {
  color: #9fef00;
}

:root.dark .contact-info-value {
  color: #e8f5e9;
}

:root.dark .contact-form-card {
  background: #141d2b;
  border-color: #1f2d3d;
  box-shadow: 0 0 40px rgba(159, 239, 0, 0.05);
}

:root.dark .contact-form-card::before {
  background: linear-gradient(to bottom, #9fef00, #b3ff1a);
  box-shadow: 2px 0 16px rgba(159, 239, 0, 0.4);
}

:root.dark .form-label {
  color: #a4b3c1;
}

:root.dark .form-input {
  background: #0d1117;
  border-color: #1f2d3d;
  color: #e8f5e9;
}

:root.dark .form-input::placeholder {
  color: #2a3a4a;
}

:root.dark .form-input:focus {
  border-color: #9fef00;
  box-shadow: 0 0 0 3px rgba(159, 239, 0, 0.1);
}

/* footer */
:root.dark .footer {
  background: #080d13;
}

:root.dark .footer-logo {
  color: #e8f5e9;
}

:root.dark .footer-logo span {
  color: #9fef00;
}

:root.dark .footer-brand-desc {
  color: #a4b3c1;
}

:root.dark .footer-col-title {
  color: #9fef00;
}

:root.dark .footer-link {
  color: #a4b3c1;
}

:root.dark .footer-link:hover {
  color: #9fef00;
}

:root.dark .footer-link.no-hover:hover {
  color: #a4b3c1;
}

:root.dark .footer-status .fa-circle {
  color: #9fef00;
}

:root.dark .footer-divider {
  background: rgba(159, 239, 0, 0.08);
}

:root.dark .footer-copy {
  color: #ffffff;
}

:root.dark .footer-copy span {
  color: #9fef00;
}

:root.dark .footer-credit {
  color: #ffffff;
}
  
:root.dark .footer-credit .fa-heart {
  color: #9fef00;
}

:root.dark .sidebar-close {
  background: #0d1117;
}

:root.dark .sidebar-close:hover {
  background: #9fef00;
}

/* github aktivitas */
:root.dark .gh-launch {
  color: var(--off-white);
}

:root.dark .gh-main-title {
  color: var(--dark);
}

:root.dark .gh-stat-num {
  color: var(--dark);
}

:root.dark .gh-stat-item:hover .gh-stat-icon {
  color: var(--green-light);
}

:root.dark .gh-stat-item:hover .gh-stat-num {
  color: var(--green-light);
}

:root.dark .gh-legend-box {
  background: #22c55e;
}

  /* Toggle button */
  .theme-toggle {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 1000;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 2px solid var(--gray-light);
    background: var(--white);
    color: var(--dark);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  }
  .theme-toggle:hover { transform: scale(1.1) rotate(15deg); }
  :root.dark .theme-toggle { background: #141d2b; border-color: rgba(159,239,0,0.40); color: #9fef00; box-shadow: 0 4px 24px rgba(159,239,0,0.20); }
  :root.dark .theme-toggle:hover { box-shadow: 0 8px 32px rgba(159,239,0,0.35); }
`;
document.head.appendChild(darkStyles);

// perubahan atas web
function updateThemeColor(isDark) {
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = isDark ? "#9fef00" : "#15803d";
}

// Inject toggle button
const toggleBtn = document.createElement("button");
toggleBtn.className = "theme-toggle";
toggleBtn.id = "themeToggle";
toggleBtn.setAttribute("title", "Toggle dark mode");
toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
document.body.appendChild(toggleBtn);

// Check saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

const isCurrentlyDark = document.documentElement.classList.contains("dark");
updateThemeColor(isCurrentlyDark);

// Toggle logic
toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  toggleBtn.innerHTML = isDark
    ? `<i class="fa-solid fa-sun"></i>`
    : `<i class="fa-solid fa-moon"></i>`;
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
