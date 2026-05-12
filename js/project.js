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

/* sidebar tutup */
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

/* toggle x sidebar */
sidebarClose.addEventListener("click", closeSidebar);

/* tutup overlay apabila klik diluar sidebar */
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

/* kalau klik tombol esc di laptop */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeSidebar();
});

/* show navbar */
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

/* apabila melebihi 768 */
window.addEventListener(
  "resize",
  function () {
    if (window.innerWidth > 768) closeSidebar();
  },
  { passive: true },
);

// data project
const projectList = [
  {
    img: "img/web_sekolah.jpeg",
    badge: "website",
    title: "Website Sekolah",
    date: "15 Maret 2024",
    desc: "Web ini adalah projek pertama saya dalam dunia coding, saya membuat web ini sebagai bahan utama tema awal saya. Dalam pembuataan web ini saya masih di bantu oleh youtube",
  },
  {
    img: "img/porto_1.png",
    badge: "website",
    title: "Portofolio_1",
    date: "22 Agustus 2023",
    desc: "Website ini adalah website kedua yang saya buat setelah web sekolah yang dimana web ini cukup sederhana dan interaksi dalam web ini masih agak kaku tapi sudah termasuk bagus dalam pemula. ",
  },
  {
    img: "img/porto_2.png",
    badge: "website",
    title: "Website portofolio 2",
    date: "10 Juni 2023",
    desc: "Website portofolio 2 ini sudah modern yang dimana desain in sangat indah, karena dalam desain ini dibuat seperti di laur angkasa ada bintang dan gambar inti seperti matahari, lalu ada bahasa pemrograman seperti planet yang mengitari matahari.",
  },
  {
    img: "img/web_coding.png",
    badge: "website",
    title: "Website Coding Learn",
    date: "5 Februari 2023",
    desc: "Website ini dibuat saat saya mengikuti lomba techtopia tahun 2025, yang dimana saya membuat website belajar coding dengan struktur yang bagus dan terarah bagi pemula yang baru terjun dalam dunia coding.",
  },
  {
    img: "img/web_ramen.png",
    badge: "website",
    title: "Website Ramen",
    date: "5 Februari 2023",
    desc: " Website ini dibuat juga untuk lomba Hackaton, yang dimana website ini dibuat untuk UMKM yang dimana website ini menjual ramen berbagia rasa yang enak dan lezat, selain menjual ramen mereka juga ada menjual merchandise yaitu baju, gantungan kunci, tas belanja, dan sepatu.",
  },
];

// pop up alur
function openModal(index) {
  const item = projectList[index];

  document.getElementById("proj-popup-img").src = item.img;
  document.getElementById("proj-popup-img").alt = item.title;
  document.getElementById("proj-popup-badge").textContent = item.badge;
  document.getElementById("proj-popup-title").textContent = item.title;
  document.getElementById("proj-popup-date").textContent = item.date;
  document.getElementById("proj-popup-desc").textContent = item.desc;

  document.getElementById("proj-popup-bg").classList.add("visible");
  document.body.style.overflow = "hidden";
}

function projClose() {
  document.getElementById("proj-popup-bg").classList.remove("visible");
  document.body.style.overflow = "";
}

function projCloseOutside(e) {
  if (e.target === document.getElementById("proj-popup-bg")) {
    projClose();
  }
}

// tombol esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") projClose();
});

// AOS
const animationMap = [
  {
    selector: ".project-header",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 2000,
    duration: 1000,
  },
  {
    selector: ".proj-card",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 1000,
    duration: 1000,
  },
  {
    selector: ".footer-brand",
    desktop: "fade-up",
    mobile: "fade-up",
    delay: 1000,
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



const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;

        setTimeout(() => {
          entry.target.classList.add("project-enter");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

// header
const header = document.querySelector(".project-header");

if (header) {
  header.dataset.delay = 300;
  observer.observe(header);
}

// cards
document.querySelectorAll(".proj-card").forEach((card) => {
  card.dataset.delay = 500;
  observer.observe(card);
});

// footer
const footerBrand = document.querySelector(".footer-brand");

if (footerBrand) {
  footerBrand.dataset.delay = 100;
  observer.observe(footerBrand);
}

document.querySelectorAll(".footer-col").forEach((col, i) => {
  col.dataset.delay = i * 150;
  observer.observe(col);
});
