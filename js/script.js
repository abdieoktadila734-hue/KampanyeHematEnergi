// Nunggu semua elemen di halaman web siap dulu sebelum kodenya jalan
document.addEventListener("DOMContentLoaded", function () {

  // --- 1. MENU HP (HAMBURGER MENU) ---
  // Ambil tombol menu dan area navigasinya
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
      // Buka atau tutup menu saat tombol diklik
      mainNav.classList.toggle("nav-open");
    });
  }

  // --- 2. TAHUN OTOMATIS DI FOOTER ---
  // Biar gak perlu ganti tahun manual setiap ganti tahun
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- 3. TOMBOL TIPS HEMAT ENERGI ---
  // Daftar tips yang bakal tampil bergantian
  const tips = [
    "Matikan lampu saat meninggalkan ruangan, walau hanya sebentar.",
    "Cabut charger dari stopkontak setelah selesai digunakan.",
    "Manfaatkan cahaya matahari di siang hari daripada menyalakan lampu.",
    "Matikan kipas angin atau AC saat ruangan sedang kosong.",
    "Gunakan lampu hemat energi (LED) di rumah maupun sekolah.",
    "Matikan monitor komputer atau proyektor saat tidak dipakai."
  ];

  let currentTipIndex = -1;
  const tipButton = document.getElementById("tipButton");
  const tipText = document.getElementById("tipText");

  if (tipButton && tipText) {
    tipButton.addEventListener("click", function () {
      // Geser ke tips berikutnya, kalau sudah habis balik lagi ke tips pertama
      currentTipIndex = (currentTipIndex + 1) % tips.length;
      tipText.textContent = "💡 " + tips[currentTipIndex];
    });
  }

  // --- 4. EFEK PINDAH HALAMAN HALUS (FADE OUT) ---
  // Ambil semua link yang mengarah ke file .html
  const pageLinks = document.querySelectorAll('a[href$=".html"]');

  pageLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // Tahan dulu perpindahan halaman biar gak langsung mengagetkan
      e.preventDefault();
      const destination = this.getAttribute("href");

      // Tambahkan efek redup (fade-out)
      document.body.classList.add("fade-out");

      // Tunggu 0.3 detik (biar animasi selesai), baru pindah halaman
      setTimeout(function () {
        window.location.href = destination;
      }, 300);
    });
  });

});