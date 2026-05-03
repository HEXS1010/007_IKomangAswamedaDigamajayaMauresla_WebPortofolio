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
    link: "#",
  },
  {
    title: "Portofolio Pertama",
    category: "Portofolio",
    image: "img/porto_1.png",
    desc: "Web ini dibuat pertama kali memiliki tujuan yang sangat bagus, karena menjelaskan latar belakang saya dengan detail dan warna yang cukup baik, memang terlihat sederhana namun tentu saya tidak melupakan inti dari pembuatan website portofolio saya yang pertama ini.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
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
    link: "#",
  },
  {
    title: "Web Ramen",
    category: "Web Development",
    image: "img/web_ramen.png",
    desc: "Web ini dibuat untuk orang yang ingin membeli makanan tanpa ribet, yang dimana selain menyajikan makanan yang enak web ini memberikan UI/UX yang sangat cantik, mulai dari permainan warna dan lain lain.",
    tech: ["Canva", "Javascript", "CSS"],
    link: "#",
  },
  {
    title: "Judul Projek 6",
    category: "Frontend",
    image: "img/project6.png",
    desc: "Deskripsi proyek keenam kamu bisa ditulis di sini.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Judul Projek 7",
    category: "Web App",
    image: "img/project7.png",
    desc: "Deskripsi proyek ketujuh kamu bisa ditulis di sini.",
    tech: ["React", "CSS Modules"],
    link: "#",
  },
];

// slider logika
const slider = document.getElementById("projectSlider");
const dotsContainer = document.getElementById("dots");

const CARD_WIDTH = 620;
let currentIndex = 0;
let isDragging = false;
let startX = 0;
let scrollStart = 0;

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
  slider.style.transform = `translateX(-${currentIndex * CARD_WIDTH}px)`;
  updateDots(currentIndex);
}

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollStart = currentIndex * CARD_WIDTH;
  slider.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const diff = startX - e.pageX;
  slider.style.transform = `translateX(-${scrollStart + diff}px)`;
});

document.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  slider.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";
  const diff = startX - e.pageX;
  if (diff > 60) goTo(currentIndex + 1);
  else if (diff < -60) goTo(currentIndex - 1);
  else goTo(currentIndex);
});

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollStart = currentIndex * CARD_WIDTH;
  slider.style.transition = "none";
});

slider.addEventListener("touchend", (e) => {
  slider.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";
  const diff = startX - e.changedTouches[0].pageX;
  if (diff > 50) goTo(currentIndex + 1);
  else if (diff < -50) goTo(currentIndex - 1);
  else goTo(currentIndex);
});

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

// ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// init slider
buildDots();
