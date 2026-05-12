/* loading */
function startLoading() {
  const screen = document.getElementById("loading-screen");
  const logo = document.getElementById("loading-logo");

  setTimeout(() => {
    logo.classList.add("pop");
  }, 200);

  setTimeout(() => {
    logo.classList.add("fade");
  }, 3200);

  setTimeout(() => {
    screen.classList.add("slide-up");
  }, 3700);

  setTimeout(() => {
    screen.remove();
    document.body.style.overflow = "";
    initAos();
  }, 4400);

  setTimeout(() => {
    screen.remove();
    document.body.style.overflow = "";
    initAos();

    document.querySelector(".navbar").classList.add("nav-enter");

    const isMobile = window.innerWidth <= 768;
    const heroClass = isMobile ? "hero-enter-mobile" : "hero-enter";
    document.querySelector(".hero-left").classList.add(heroClass);
    document.querySelector(".hero-right").classList.add(heroClass);
    document.querySelector(".hero-center").classList.add(heroClass);
  }, 4400);
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";
  startLoading();
});

// navbar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarItems = document.querySelectorAll(".sidebar-item");
const navbar = document.querySelector(".navbar");

/* sidebar buka */
function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("open");
  hamburger.classList.add("open");
  document.body.style.overflow = "hidden";
}

/* sidbar tutup */
function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
  hamburger.classList.remove("open");
  document.body.style.overflow = "";
}

/* toggle hamburger menu */
hamburger.addEventListener("click", function () {
  const isOpen = sidebar.classList.contains("open");
  isOpen ? closeSidebar() : openSidebar();
});

/* toggel x sidebar */
sidebarClose.addEventListener("click", closeSidebar);

/* tutup overlay apa bila klik diluar sidebar  */
overlay.addEventListener("click", closeSidebar);

/* menu diklik dan langsung hilang class aktif */
sidebarItems.forEach(function (item) {
  item.addEventListener("click", function () {
    sidebarItems.forEach(function (i) {
      i.classList.remove("active");
    });
    item.classList.add("active");
    closeSidebar();
  });
});

/* kalau klik tombol esc dilaptop */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeSidebar();
});

/* show navbar  */
window.addEventListener(
  "scroll",
  function () {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

/* kalau discroll dia hilang dan muncul */
let lastScrollY = window.scrollY;
let ticking = false;
const HIDE_THRESHOLD = 120;

window.addEventListener(
  "scroll",
  function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const currentScrollY = window.scrollY;

        navbar.classList.toggle("scrolled", currentScrollY > 20);

        if (currentScrollY > lastScrollY && currentScrollY > HIDE_THRESHOLD) {
          navbar.classList.add("hidden");
        } else {
          navbar.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true },
);

/* apa bila melebihi 768 */
window.addEventListener(
  "resize",
  function () {
    if (window.innerWidth > 768) closeSidebar();
  },
  { passive: true },
);

// projek data
const projects = [
  {
    title: "Website Sekolah",
    category: "Web sekolah",
    image: "img/web_sekolah.jpeg",
    desc: "Ini adalah web pertama saya selama belajar coding, yang dimana saya membuat website ini iseng saja, dan lumayan dari segi tampilan dan layout, namun web ini saya masih memiliki kekurangan yang lumayan karena web ini saya tinggalkan sebelum selesai.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/HEXS1010/web-sekolah",
  },
  {
    title: "Portofolio Pertama",
    category: "Portofolio",
    image: "img/porto_1.png",
    desc: "Web ini dibuat pertama kali memiliki tujuan yang sangat bagus, karena menjelaskan latar belakang saya dengan detail dan warna yang cukup baik, memang terlihat sederhana namun tentu saya tidak melupakan inti dari pembuatan website portofolio saya yang pertama ini.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/HEXS1010/portofolio-1",
  },
  {
    title: "Protofolio Kedua",
    category: "Portofolio",
    image: "img/porto_2.png",
    desc: "Di portofolio yang kedua ini aku buat karena ingin lebih punya website yang modern dan lebih interaktif kepada user yang melihat porto saya, dengan desain yang menarik seperti di luar angkasa, web saya bukan hanya soal desain tapi warna layout dan UX yang sangat menarik. Walaupun terlihat sangat modern tetapi saya tetap mendahulukan inti dari web saya yaitu memperkenalkan diri saya sedalam mungkin.",
    tech: ["CSS", "JavaScript", "PHP"],
    link: "#",
  },
  {
    title: "Coding Learn",
    category: "Learning",
    image: "img/web_coding.png",
    desc: "web ini dibuat karena melihat seseorang yang kesusahan dalam belajar coding yang dimana mereka belajar tanpa alur yang jelas menyebabkan mereka kebingungan, tapi tenang solusinya coding learn disini kamu bukan hanya belajar coding tapi juga berinteraksi bersama dengan semua orang dan berbagi ilmu tentang coding dan masih banyak lagi. Coding learn menyediakan tempat latihan coding tanpa download text editor dan alur pembelajaran yang lebih jelas.",
    tech: ["HTML", "CSS", "GSAP"],
    link: "https://github.com/HEXS1010/projek",
  },
  {
    title: "Web Ramen",
    category: "Web Development",
    image: "img/web_ramen.png",
    desc: "Web ini dibuat untuk orang yang ingin membeli makanan tanpa ribet, yang dimana selain menyajikan makanan yang enak web ini memberikan UI/UX yang sangat cantik, mulai dari permainan warna dan lain lain.",
    tech: ["Canva", "Javascript", "CSS"],
    link: "https://github.com/HEXS1010/web-ramen",
  },
];

// slider logika
const slider = document.getElementById("projectSlider");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;

function getCardWidth() {
  const card = slider.querySelector(".proj-card");
  if (!card) return 620;
  return card.offsetWidth + 20;
}

function buildDots() {
  dotsContainer.innerHTML = "";
  projects.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });
}

function updateDots(index) {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function goTo(index) {
  currentIndex = Math.max(0, Math.min(index, projects.length - 1));
  slider.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;
  updateDots(currentIndex);
}

// scroll mouse buat laptop aja rusak kalau pakai geser manual
let isScrolling = false;

document.querySelector(".slider-wrapper").addEventListener(
  "wheel",
  (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    e.preventDefault();
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0 || e.deltaX > 0) {
      goTo(currentIndex + 1);
    } else {
      goTo(currentIndex - 1);
    }

    setTimeout(() => {
      isScrolling = false;
    }, 500);
  },
  { passive: false },
);

// bisa di geser pakai jari
let touchStartX = 0;
let touchStartY = 0;
let isDragging = false;

document.querySelector(".slider-wrapper").addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].pageX;
    touchStartY = e.touches[0].pageY;
    isDragging = false;
  },
  { passive: true },
);

document.querySelector(".slider-wrapper").addEventListener(
  "touchmove",
  (e) => {
    const diffX = Math.abs(touchStartX - e.touches[0].pageX);
    const diffY = Math.abs(touchStartY - e.touches[0].pageY);

    // kalau gerak horizontal lebih dominan, tandai sebagai drag slider
    if (diffX > diffY && diffX > 10) {
      isDragging = true;
      e.preventDefault(); // cegah scroll halaman ikut bergerak
    }
  },
  { passive: false },
);

document.querySelector(".slider-wrapper").addEventListener(
  "touchend",
  (e) => {
    if (!isDragging) return;
    const diff = touchStartX - e.changedTouches[0].pageX;
    if (diff > 50) goTo(currentIndex + 1);
    else if (diff < -50) goTo(currentIndex - 1);
    isDragging = false;
  },
  { passive: true },
);

// recalculate saat resize
window.addEventListener(
  "resize",
  () => {
    goTo(currentIndex);
  },
  { passive: true },
);

// pop up nya
function openModal(index) {
  const p = projects[index];
  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <img src="${p.image}" alt="${p.title}" onerror="this.style.background='var(--green-pale)';this.removeAttribute('src')" />
    <span class="modal-proj-tag">${p.category}</span>
    <h3 class="modal-proj-title">${p.title}</h3>
    <p class="modal-proj-desc">${p.desc}</p>
    <div class="modal-tech">
      ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
    </div>
    <a href="${p.link}" class="modal-link" target="_blank">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Lihat Proyek
    </a>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// tombol esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// init slider
buildDots();

// data github static
async function loadGitHubStats() {
  try {
    const res = await fetch("https://api.github.com/users/HEXS1010");
    if (!res.ok) return;
    const data = await res.json();

    function countUp(el, target) {
      if (!el) return;
      let start = 0;
      const step = target / (1200 / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(start);
        }
      }, 16);
    }

    countUp(document.getElementById("gh-repos"), data.public_repos ?? 0);
    countUp(document.getElementById("gh-followers"), data.followers ?? 0);
    countUp(document.getElementById("gh-following"), data.following ?? 0);

    const yearEl = document.getElementById("gh-year");
    if (yearEl && data.created_at) {
      yearEl.textContent = new Date(data.created_at).getFullYear();
    }
  } catch (e) {
    console.warn("GitHub API error:", e);
  }
}

// jalankan saat section masuk viewport
const ghSection = document.getElementById("github");
if (ghSection) {
  new IntersectionObserver(
    (entries, obs) => {
      if (entries[0].isIntersecting) {
        loadGitHubStats();
        obs.disconnect();
      }
    },
    { threshold: 0.2 },
  ).observe(ghSection);
}

/* aos setup */
const animationMap = [
  {
    selector: ".navbar",
    desktop: "fade-down",
    mobile: "fade-down",
    delay: 0,
    duration: 900,
  },
  {
    selector: ".hero-left",
    desktop: "fade-right",
    mobile: "fade-up",
    delay: 200,
    duration: 900,
  },
  {
    selector: ".hero-center",
    desktop: "fade-up",
    delay: 200,
    duration: 900,
  },
  {
    selector: ".hero-right",
    desktop: "fade-left",
    mobile: "fade-up",
    delay: 200,
    duration: 900,
  },
  {
    selector: ".about-left",
    desktop: "fade-right",
    mobile: "fade-up",
    delay: 200,
    duration: 900,
  },
  {
    selector: ".about-right",
    desktop: "fade-left",
    mobile: "fade-up",
    delay: 200,
    duration: 900,
  },
  {
    selector: ".projects-left",
    desktop: "fade-right",
    mobile: "fade-up",
    delay: 200,
    duration: 900,
  },
  {
    selector: ".proj-card",
    desktop: "fade-left",
    mobile: "fade-up",
    delay: 0,
    duration: 700,
  },
  {
    selector: ".skills-left",
    desktop: "fade-right",
    mobile: "fade-up",
    delay: 0,
    duration: 800,
  },
  {
    selector: ".skill-card",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 0,
    duration: 600,
  },
  {
    selector: ".gh-hero",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 0,
    duration: 800,
  },
  {
    selector: ".gh-stat-item",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 0,
    duration: 700,
  },
  {
    selector: ".gh-graph-panel",
    desktop: "fade-left",
    mobile: "fade-up",
    delay: 150,
    duration: 800,
  },
  {
    selector: ".contact-left",
    desktop: "fade-right",
    mobile: "fade-up",
    delay: 0,
    duration: 800,
  },
  {
    selector: ".contact-right",
    desktop: "fade-left",
    mobile: "fade-up",
    delay: 200,
    duration: 800,
  },
  {
    selector: ".footer-brand",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 0,
    duration: 700,
  },
  {
    selector: ".footer-col",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 0,
    duration: 700,
  },
];


function initAos() {
  const isMobile = window.innerWidth <= 768;

  animationMap.forEach(({ selector, desktop, mobile, delay, duration }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.setAttribute("data-aos", isMobile ? mobile : desktop);
      el.setAttribute("data-aos-duration", duration);

      if (selector === ".skill-card") {
        el.setAttribute("data-aos-delay", 0);
      } else {
        el.setAttribute("data-aos-delay", delay + i * 120);
      }
    });
  });

  AOS.init({
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });
}
s