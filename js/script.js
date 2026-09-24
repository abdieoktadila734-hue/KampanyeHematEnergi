document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
      mainNav.classList.toggle("nav-open");
    });
  }

  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    const today = new Date();
    yearSpan.textContent = today.getFullYear();
  }

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
      currentTipIndex = currentTipIndex + 1;

      if (currentTipIndex >= tips.length) {
        currentTipIndex = 0;
      }

      tipText.textContent = "💡 " + tips[currentTipIndex];
    });
  }

});