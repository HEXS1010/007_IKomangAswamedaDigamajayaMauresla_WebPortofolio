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
    img: "img/achievement3.jpeg",
    badge: "website",
    title: "Sertifikat Belajar Dasar AI Dicoding",
    date: "10 Juni 2023",
    desc: "Sertifikan ini diraih dengan mengikuti bootcamp dari Dicoding, yang dimana saya menyelesaikan pelajaran Dasar AI. yang dimana saya diajarkan sejarah AI apa saja manfaatnya, cara mengunakanya, logika dari AI, model model AI apa saja, cara membuat AI.",
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=85",
    badge: "website",
    title: "Cisco Certified Network Associate",
    date: "5 Februari 2023",
    desc: "Saya mendapatkan sertifikat ini dari cisco setelah menyelesaikan pembelajaran yang diberikan cisco. yang dimana kurikulum mereka mengejarkan saya tentang",
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
