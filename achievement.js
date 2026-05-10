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

// data achievement
const achievementList = [
  {
    img: "img/achievement1.jpg",
    badge: "Lomba Nasional",
    title: "Juara 1 Hackathon Nasional",
    date: "15 Maret 2024",
    desc: "Bersama tim yang solid, kami berhasil meraih juara pertama dalam kompetisi hackathon nasional. Proyek yang kami bangun adalah web UMKM yang dimana sistem pemesanan bisa online dan ini membuat semua orang dapat mencoba tanpa datang langsung.",
  },
  {
    img: "img/achievement2.png",
    badge: "Lomba Nasional",
    title: "Juara 1 techtopia VOL.1",
    date: "22 Agustus 2023",
    desc: "meraih juara pertama dalam kompetisi techtopia tingkat nasional dengan mengembangkan web pelatihan coding, yang dimana agar mengajak orang bahwa belajar coding itu menyenangkan dan dalam web tersebut jelas cara mengerjakannya dan UX yang kami terapkan tidak akan membingunkan orang dalam mengikuti pelajarkan kami",
  },
  {
    img: "img/achievement3.jpeg",
    badge: "Sertifikat",
    title: "Sertifikat Belajar Dasar AI Dicoding",
    date: "10 Juni 2023",
    desc: " Sertifikan ini diraih dengan mengikuti bootcamp dari Dicoding, yang dimana saya menyelesaikan pelajaran Dasar AI. yang dimana saya diajarkan sejarah AI apa saja manfaatnya, cara mengunakanya, logika dari AI, model model AI apa saja, cara membuat AI.",
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=85",
    badge: "Sertifikat",
    title: "Cisco Certified Network Associate",
    date: "5 Februari 2023",
    desc: "Saya mendapatkan sertifikat ini dari cisco setelah menyelesaikan pembelajaran yang diberikan cisco. yang dimana kurikulum mereka mengejarkan saya tentang",
  },
];

// pop up alur
function openModal(index) {
  const item = achievementList[index];

  document.getElementById("ach-popup-img").src = item.img;
  document.getElementById("ach-popup-img").alt = item.title;
  document.getElementById("ach-popup-badge").textContent = item.badge;
  document.getElementById("ach-popup-title").textContent = item.title;
  document.getElementById("ach-popup-date").textContent = item.date;
  document.getElementById("ach-popup-desc").textContent = item.desc;

  document.getElementById("ach-popup-bg").classList.add("visible");
  document.body.style.overflow = "hidden";
}

function achClose() {
  document.getElementById("ach-popup-bg").classList.remove("visible");
  document.body.style.overflow = "";
}

function achCloseOutside(e) {
  if (e.target === document.getElementById("ach-popup-bg")) {
    achClose();
  }
}

// tombol esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") achClose();
});
