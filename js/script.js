const DATA_ENERGI = {
  "meta": {
    "judul": "Hasil Kuesioner Perilaku Hemat Energi Siswa Kelas XI",
    "sumber": "Kuesioner - ENERGI XI (Perilaku) (Responses).xlsx",
    "skala": "Likert 1-4 per pernyataan (1 = paling rendah/jarang, 4 = paling tinggi/sering). Total 10 butir = 10-40.",
    "catatan_privasi": "Data sudah diagregasi; tidak memuat nama, NIS, maupun email responden.",
    "jumlah_butir": 10,
    "jumlah_siswa_terdata": 639,
    "jumlah_responden": 636,
    "persen_partisipasi": 99.4,
    "tanggal_pengisian": {
      "awal": "2026-10-12",
      "akhir": "2026-11-05"
    },
    "pembersihan": {
      "baris_mentah": 731,
      "baris_tidak_valid_dibuang": 1,
      "isian_ganda_dibuang": 94,
      "aturan_isian_ganda": "Jika satu siswa mengisi lebih dari sekali, dipakai isian TERAKHIR.",
      "kolom_score_google_form_diabaikan": true
    },
    "kategori_skor": {
      "aturan": "Berdasarkan rata-rata skor per butir (1.00-4.00)",
      "rentang": {
        "Kurang": "1.00-1.75",
        "Cukup": "1.76-2.50",
        "Baik": "2.51-3.25",
        "Sangat Baik": "3.26-4.00"
      }
    }
  },
  "ringkasan": {
    "rata_rata_skor": 3.36,
    "rata_rata_total": 33.62,
    "kategori": {
      "Sangat Baik": 378,
      "Baik": 234,
      "Cukup": 23,
      "Kurang": 1
    },
    "kategori_persen": {
      "Sangat Baik": 59.4,
      "Baik": 36.8,
      "Cukup": 3.6,
      "Kurang": 0.2
    },
    "persen_sering_rata_rata": 90.79,
    "sorotan": {
      "butir_tertinggi": [
        {
          "kode": "P01",
          "label": "Praktik hemat energi sehari-hari",
          "rata_rata": 3.51
        },
        {
          "kode": "P02",
          "label": "Tindakan nyata di bengkel, lab, kelas, rumah",
          "rata_rata": 3.46
        },
        {
          "kode": "P06",
          "label": "Cabut charger/steker setelah dipakai",
          "rata_rata": 3.45
        }
      ],
      "butir_terendah": [
        {
          "kode": "P04",
          "label": "Batasi penggunaan gawai/laptop",
          "rata_rata": 3.22,
          "persen_jarang": 13.7
        },
        {
          "kode": "P09",
          "label": "Berani menegur/mengajak teman hemat listrik",
          "rata_rata": 3.22,
          "persen_jarang": 13.2
        },
        {
          "kode": "P05",
          "label": "Pilih fasilitas/transportasi hemat energi",
          "rata_rata": 3.3,
          "persen_jarang": 13.4
        }
      ],
      "jurusan_tertinggi": "PMN",
      "jurusan_terendah": "PPLG"
    }
  },
  "sebaran_skor_total": [
    { "skor_total": 10, "jumlah": 1 },
    { "skor_total": 18, "jumlah": 1 },
    { "skor_total": 20, "jumlah": 1 },
    { "skor_total": 22, "jumlah": 1 },
    { "skor_total": 23, "jumlah": 3 },
    { "skor_total": 24, "jumlah": 5 },
    { "skor_total": 25, "jumlah": 12 },
    { "skor_total": 26, "jumlah": 6 },
    { "skor_total": 27, "jumlah": 22 },
    { "skor_total": 28, "jumlah": 26 },
    { "skor_total": 29, "jumlah": 35 },
    { "skor_total": 30, "jumlah": 64 },
    { "skor_total": 31, "jumlah": 44 },
    { "skor_total": 32, "jumlah": 37 },
    { "skor_total": 33, "jumlah": 44 },
    { "skor_total": 34, "jumlah": 50 },
    { "skor_total": 35, "jumlah": 51 },
    { "skor_total": 36, "jumlah": 42 },
    { "skor_total": 37, "jumlah": 45 },
    { "skor_total": 38, "jumlah": 34 },
    { "skor_total": 39, "jumlah": 26 },
    { "skor_total": 40, "jumlah": 86 }
  ],
  "per_butir": [
    {
      "id": 1,
      "kode": "P01",
      "label": "Praktik hemat energi sehari-hari",
      "pertanyaan": "Saya secara sadar mempraktikkan tindakan pelestarian energi (seperti menghemat air dan listrik) dalam aktivitas saya sehari-hari.",
      "jumlah_per_skor": { "1": 1, "2": 8, "3": 291, "4": 336 },
      "persen_per_skor": { "1": 0.2, "2": 1.3, "3": 45.8, "4": 52.8 },
      "rata_rata": 3.51,
      "persen_sering": 98.6,
      "persen_jarang": 1.4
    },
    {
      "id": 2,
      "kode": "P02",
      "label": "Tindakan nyata di bengkel, lab, kelas, rumah",
      "pertanyaan": "Saya melakukan tindakan nyata untuk menghemat energi, baik saat berada di bengkel, laboratorium, ruang kelas, maupun di rumah.",
      "jumlah_per_skor": { "1": 1, "2": 28, "3": 287, "4": 320 },
      "persen_per_skor": { "1": 0.2, "2": 4.4, "3": 45.1, "4": 50.3 },
      "rata_rata": 3.46,
      "persen_sering": 95.4,
      "persen_jarang": 4.6
    },
    {
      "id": 3,
      "kode": "P03",
      "label": "Matikan lampu/AC/kipas saat kelas kosong",
      "pertanyaan": "Saya berinisiatif mematikan lampu, AC, atau kipas angin di kelas saat jam istirahat atau saat kelas dalam keadaan kosong.",
      "jumlah_per_skor": { "1": 5, "2": 55, "3": 278, "4": 298 },
      "persen_per_skor": { "1": 0.8, "2": 8.6, "3": 43.7, "4": 46.9 },
      "rata_rata": 3.37,
      "persen_sering": 90.6,
      "persen_jarang": 9.4
    },
    {
      "id": 4,
      "kode": "P04",
      "label": "Batasi penggunaan gawai/laptop",
      "pertanyaan": "Saya membatasi penggunaan gawai (Laptop) atau alat elektronik lainnya untuk hal-hal yang tidak perlu agar tidak membuang energi sia-sia.",
      "jumlah_per_skor": { "1": 5, "2": 82, "3": 315, "4": 234 },
      "persen_per_skor": { "1": 0.8, "2": 12.9, "3": 49.5, "4": 36.8 },
      "rata_rata": 3.22,
      "persen_sering": 86.3,
      "persen_jarang": 13.7
    },
    {
      "id": 5,
      "kode": "P05",
      "label": "Pilih fasilitas/transportasi hemat energi",
      "pertanyaan": "Saya lebih memilih menggunakan fasilitas yang hemat energi (misalnya menggunakan transportasi umum, sepeda, atau jalan kaki jika jaraknya dekat).",
      "jumlah_per_skor": { "1": 6, "2": 79, "3": 268, "4": 283 },
      "persen_per_skor": { "1": 0.9, "2": 12.4, "3": 42.1, "4": 44.5 },
      "rata_rata": 3.3,
      "persen_sering": 86.6,
      "persen_jarang": 13.4
    },
    {
      "id": 6,
      "kode": "P06",
      "label": "Cabut charger/steker setelah dipakai",
      "pertanyaan": "Saya mencabut kabel charger (pengisi daya) atau steker dari stopkontak setelah selesai menggunakan peralatan elektronik.",
      "jumlah_per_skor": { "1": 7, "2": 44, "3": 240, "4": 345 },
      "persen_per_skor": { "1": 1.1, "2": 6.9, "3": 37.7, "4": 54.2 },
      "rata_rata": 3.45,
      "persen_sering": 92.0,
      "persen_jarang": 8.0
    },
    {
      "id": 7,
      "kode": "P07",
      "label": "Manfaatkan cahaya matahari (buka tirai/jendela)",
      "pertanyaan": "Saya membuka tirai dan jendela kelas pada siang hari agar cahaya matahari bisa masuk sehingga lampu kelas dapat dimatikan.",
      "jumlah_per_skor": { "1": 9, "2": 58, "3": 262, "4": 307 },
      "persen_per_skor": { "1": 1.4, "2": 9.1, "3": 41.2, "4": 48.3 },
      "rata_rata": 3.36,
      "persen_sering": 89.5,
      "persen_jarang": 10.5
    },
    {
      "id": 8,
      "kode": "P08",
      "label": "Atur suhu AC/kipas secukupnya",
      "pertanyaan": "Saya mengatur suhu AC di ruangan secukupnya (tidak terlalu dingin) atau menggunakan kipas angin seperlunya demi menjaga kelestarian lingkungan.",
      "jumlah_per_skor": { "1": 6, "2": 55, "3": 310, "4": 265 },
      "persen_per_skor": { "1": 0.9, "2": 8.6, "3": 48.7, "4": 41.7 },
      "rata_rata": 3.31,
      "persen_sering": 90.4,
      "persen_jarang": 9.6
    },
    {
      "id": 9,
      "kode": "P09",
      "label": "Berani menegur/mengajak teman hemat listrik",
      "pertanyaan": "Saya berani menegur atau mengajak teman-teman satu kelas untuk ikut peduli dan menghemat penggunaan listrik di sekolah.",
      "jumlah_per_skor": { "1": 11, "2": 73, "3": 319, "4": 233 },
      "persen_per_skor": { "1": 1.7, "2": 11.5, "3": 50.2, "4": 36.6 },
      "rata_rata": 3.22,
      "persen_sering": 86.8,
      "persen_jarang": 13.2
    },
    {
      "id": 10,
      "kode": "P10",
      "label": "Pastikan peralatan mati sebelum pulang",
      "pertanyaan": "Saya secara rutin memastikan seluruh peralatan sekolah (komputer lab, alat praktik yang menggunakan listrik) sudah dimatikan dengan benar sebelum pulang sekolah.",
      "jumlah_per_skor": { "1": 4, "2": 49, "3": 263, "4": 320 },
      "persen_per_skor": { "1": 0.6, "2": 7.7, "3": 41.4, "4": 50.3 },
      "rata_rata": 3.41,
      "persen_sering": 91.7,
      "persen_jarang": 8.3
    }
  ],
  "per_jurusan": [
    {
      "kode": "PMN",
      "nama": "Pemasaran",
      "jumlah_responden": 72,
      "rata_rata_skor": 3.51,
      "rata_rata_total": 35.08,
      "rata_rata_per_butir": [ 3.54, 3.64, 3.57, 3.46, 3.39, 3.51, 3.51, 3.47, 3.38, 3.61 ],
      "kategori": { "Sangat Baik": 51, "Baik": 20, "Cukup": 1, "Kurang": 0 },
      "kategori_persen": { "Sangat Baik": 70.8, "Baik": 27.8, "Cukup": 1.4, "Kurang": 0.0 }
    },
    {
      "kode": "HTL",
      "nama": "Perhotelan",
      "jumlah_responden": 69,
      "rata_rata_skor": 3.46,
      "rata_rata_total": 34.58,
      "rata_rata_per_butir": [ 3.54, 3.54, 3.42, 3.36, 3.45, 3.67, 3.36, 3.39, 3.29, 3.57 ],
      "kategori": { "Sangat Baik": 45, "Baik": 24, "Cukup": 0, "Kurang": 0 },
      "kategori_persen": { "Sangat Baik": 65.2, "Baik": 34.8, "Cukup": 0.0, "Kurang": 0.0 }
    },
    {
      "kode": "KLN",
      "nama": "Kuliner",
      "jumlah_responden": 71,
      "rata_rata_skor": 3.43,
      "rata_rata_total": 34.3,
      "rata_rata_per_butir": [ 3.61, 3.41, 3.42, 3.39, 3.48, 3.37, 3.41, 3.39, 3.32, 3.49 ],
      "kategori": { "Sangat Baik": 46, "Baik": 22, "Cukup": 2, "Kurang": 1 },
      "kategori_persen": { "Sangat Baik": 64.8, "Baik": 31.0, "Cukup": 2.8, "Kurang": 1.4 }
    },
    {
      "kode": "TJKT",
      "nama": "Teknik Jaringan Komputer dan Telekomunikasi",
      "jumlah_responden": 104,
      "rata_rata_skor": 3.42,
      "rata_rata_total": 34.24,
      "rata_rata_per_butir": [ 3.6, 3.52, 3.4, 3.22, 3.39, 3.49, 3.4, 3.36, 3.27, 3.59 ],
      "kategori": { "Sangat Baik": 70, "Baik": 30, "Cukup": 4, "Kurang": 0 },
      "kategori_persen": { "Sangat Baik": 67.3, "Baik": 28.8, "Cukup": 3.8, "Kurang": 0.0 }
    },
    {
      "kode": "DKV",
      "nama": "Desain Komunikasi Visual",
      "jumlah_responden": 107,
      "rata_rata_skor": 3.34,
      "rata_rata_total": 33.45,
      "rata_rata_per_butir": [ 3.47, 3.43, 3.32, 3.21, 3.3, 3.39, 3.36, 3.31, 3.25, 3.41 ],
      "kategori": { "Sangat Baik": 62, "Baik": 42, "Cukup": 3, "Kurang": 0 },
      "kategori_persen": { "Sangat Baik": 57.9, "Baik": 39.3, "Cukup": 2.8, "Kurang": 0.0 }
    },
    {
      "kode": "MPLB",
      "nama": "Manajemen Perkantoran dan Layanan Bisnis",
      "jumlah_responden": 37,
      "rata_rata_skor": 3.24,
      "rata_rata_total": 32.35,
      "rata_rata_per_butir": [ 3.32, 3.38, 3.32, 3.03, 3.05, 3.24, 3.3, 3.24, 3.22, 3.24 ],
      "kategori": { "Sangat Baik": 19, "Baik": 16, "Cukup": 2, "Kurang": 0 },
      "kategori_persen": { "Sangat Baik": 51.4, "Baik": 43.2, "Cukup": 5.4, "Kurang": 0.0 }
    },
    {
      "kode": "PPLG",
      "nama": "Pengembangan Perangkat Lunak dan Gim",
      "jumlah_responden": 176,
      "rata_rata_skor": 3.24,
      "rata_rata_total": 32.36,
      "rata_rata_per_butir": [ 3.47, 3.36, 3.26, 3.05, 3.14, 3.43, 3.28, 3.17, 3.03, 3.18 ],
      "kategori": { "Sangat Baik": 85, "Baik": 80, "Cukup": 11, "Kurang": 0 },
      "kategori_persen": { "Sangat Baik": 48.3, "Baik": 45.5, "Cukup": 6.2, "Kurang": 0.0 }
    }
  ],
  "per_rombel": [
    { "rombel": "KLN XI-1", "jurusan": "KLN", "jumlah_responden": 36, "rata_rata_skor": 3.55 },
    { "rombel": "PMN XI-1", "jurusan": "PMN", "jumlah_responden": 36, "rata_rata_skor": 3.54 },
    { "rombel": "DKV XI-2", "jurusan": "DKV", "jumlah_responden": 35, "rata_rata_skor": 3.51 },
    { "rombel": "HTL XI-1", "jurusan": "HTL", "jumlah_responden": 33, "rata_rata_skor": 3.51 },
    { "rombel": "TJKT XI-1", "jurusan": "TJKT", "jumlah_responden": 35, "rata_rata_skor": 3.5 },
    { "rombel": "PMN XI-2", "jurusan": "PMN", "jumlah_responden": 36, "rata_rata_skor": 3.47 },
    { "rombel": "PPLG XI-3", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.43 },
    { "rombel": "HTL XI-2", "jurusan": "HTL", "jumlah_responden": 36, "rata_rata_skor": 3.41 },
    { "rombel": "TJKT XI-3", "jurusan": "TJKT", "jumlah_responden": 34, "rata_rata_skor": 3.41 },
    { "rombel": "TJKT XI-2", "jurusan": "TJKT", "jumlah_responden": 35, "rata_rata_skor": 3.36 },
    { "rombel": "DKV XI-3", "jurusan": "DKV", "jumlah_responden": 36, "rata_rata_skor": 3.34 },
    { "rombel": "PPLG XI-1", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.31 },
    { "rombel": "KLN XI-2", "jurusan": "KLN", "jumlah_responden": 35, "rata_rata_skor": 3.3 },
    { "rombel": "MPLB XI-1", "jurusan": "MPLB", "jumlah_responden": 37, "rata_rata_skor": 3.24 },
    { "rombel": "PPLG XI-4", "jurusan": "PPLG", "jumlah_responden": 36, "rata_rata_skor": 3.21 },
    { "rombel": "DKV XI-1", "jurusan": "DKV", "jumlah_responden": 36, "rata_rata_skor": 3.19 },
    { "rombel": "PPLG XI-5", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.15 },
    { "rombel": "PPLG XI-2", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.08 }
  ],
  "per_rayon": [
    { "rayon": "Tajur", "jumlah_responden": 83, "rata_rata_skor": 3.41 },
    { "rayon": "Cicurug", "jumlah_responden": 178, "rata_rata_skor": 3.38 },
    { "rayon": "Cibedug", "jumlah_responden": 61, "rata_rata_skor": 3.37 },
    { "rayon": "Ciawi", "jumlah_responden": 98, "rata_rata_skor": 3.34 },
    { "rayon": "Cisarua", "jumlah_responden": 118, "rata_rata_skor": 3.34 },
    { "rayon": "Sukasari", "jumlah_responden": 33, "rata_rata_skor": 3.33 },
    { "rayon": "Wikrama", "jumlah_responden": 65, "rata_rata_skor": 3.31 }
  ],
  "per_gaya_belajar": [
    { "gaya_belajar": "Visual", "jumlah_responden": 289, "rata_rata_skor": 3.32 },
    { "gaya_belajar": "Auditori", "jumlah_responden": 145, "rata_rata_skor": 3.39 },
    { "gaya_belajar": "Kinestetik", "jumlah_responden": 201, "rata_rata_skor": 3.4 }
  ]
};

const DATA_KOMITMEN_SEED = [
  {
    nama: "Fajar Pratama",
    jurusan: "PPLG",
    aksi: ["Cabut Charger", "Matikan Lampu/AC"],
    pesan: "Siap matikan monitor lab setelah selesai praktik koding!",
    waktu: "Baru saja"
  },
  {
    nama: "Alya Rahmawati",
    jurusan: "PMN",
    aksi: ["Buka Tirai Siang", "Tegur Teman"],
    pesan: "Buka gorden kelas tiap pagi biar terang tanpa lampu.",
    waktu: "1 jam lalu"
  },
  {
    nama: "Rizky Firmansyah",
    jurusan: "TJKT",
    aksi: ["Cabut Charger", "Tegur Teman"],
    pesan: "Kawal stopkontak lab jaringan sebelum jam pulang.",
    waktu: "2 jam lalu"
  },
  {
    nama: "Siti Nurhaliza",
    jurusan: "KLN",
    aksi: ["Matikan Lampu/AC", "Buka Tirai Siang"],
    pesan: "Pastikan exhaust fan dan lampu dapur praktik mati setelah masak.",
    waktu: "3 jam lalu"
  },
  {
    nama: "Bima Arya",
    jurusan: "DKV",
    aksi: ["Cabut Charger", "Matikan Lampu/AC"],
    pesan: "Render selesai, PC langsung shut down!",
    waktu: "Kemarin"
  }
];

const DATA_BIVARIAT_POINTS = [
  {x: 30, y: 32}, {x: 31, y: 30}, {x: 31, y: 39}, {x: 32, y: 31}, {x: 36, y: 29},
  {x: 27, y: 24}, {x: 30, y: 29}, {x: 30, y: 31}, {x: 36, y: 36}, {x: 38, y: 39},
  {x: 36, y: 35}, {x: 30, y: 27}, {x: 40, y: 39}, {x: 38, y: 25}, {x: 30, y: 35},
  {x: 30, y: 31}, {x: 37, y: 31}, {x: 37, y: 35}, {x: 37, y: 35}, {x: 39, y: 38},
  {x: 30, y: 30}, {x: 30, y: 30}, {x: 40, y: 34}, {x: 29, y: 33}, {x: 36, y: 28},
  {x: 37, y: 30}, {x: 40, y: 35}, {x: 31, y: 37}, {x: 35, y: 27}, {x: 38, y: 33},
  {x: 36, y: 35}, {x: 40, y: 25}, {x: 35, y: 34}, {x: 35, y: 33}, {x: 37, y: 28},
  {x: 37, y: 36}, {x: 31, y: 37}, {x: 31, y: 27}, {x: 31, y: 34}, {x: 35, y: 34},
  {x: 35, y: 36}, {x: 32, y: 34}, {x: 29, y: 40}, {x: 36, y: 37}, {x: 31, y: 34},
  {x: 36, y: 34}, {x: 40, y: 39}, {x: 32, y: 30}, {x: 36, y: 29}, {x: 34, y: 32},
  {x: 38, y: 40}, {x: 35, y: 31}, {x: 40, y: 37}, {x: 36, y: 39}, {x: 38, y: 31},
  {x: 30, y: 35}, {x: 30, y: 40}, {x: 32, y: 32}, {x: 34, y: 32}, {x: 33, y: 36},
  {x: 39, y: 40}, {x: 35, y: 40}, {x: 39, y: 40}, {x: 39, y: 30}, {x: 34, y: 34},
  {x: 33, y: 36}, {x: 38, y: 40}, {x: 33, y: 35}, {x: 35, y: 34}, {x: 38, y: 29},
  {x: 34, y: 39}, {x: 35, y: 30}, {x: 37, y: 35}, {x: 32, y: 26}, {x: 39, y: 40},
  {x: 35, y: 35}, {x: 31, y: 30}, {x: 39, y: 33}, {x: 39, y: 34}, {x: 38, y: 39},
  {x: 32, y: 30}, {x: 35, y: 32}, {x: 30, y: 27}, {x: 30, y: 29}, {x: 39, y: 33},
  {x: 40, y: 38}, {x: 38, y: 38}, {x: 33, y: 33}, {x: 34, y: 37}, {x: 28, y: 37},
  {x: 38, y: 34}, {x: 36, y: 28}, {x: 34, y: 29}, {x: 37, y: 34}, {x: 31, y: 29},
  {x: 34, y: 38}, {x: 39, y: 38}, {x: 38, y: 35}, {x: 27, y: 29}, {x: 30, y: 40},
  {x: 40, y: 29}, {x: 30, y: 31}, {x: 36, y: 40}, {x: 33, y: 27}, {x: 38, y: 40},
  {x: 35, y: 30}, {x: 36, y: 32}
];

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
      tipText.style.opacity = "0";
      tipText.style.transform = "translateY(-4px)";

      setTimeout(function () {
        currentTipIndex = (currentTipIndex + 1) % tips.length;
        tipText.textContent = "💡 " + tips[currentTipIndex];
        tipText.style.opacity = "1";
        tipText.style.transform = "translateY(0)";
      }, 160);
    });
  }

  inisialisasiScrollReveal();

  if (document.getElementById("chartKategori")) {
    inisialisasiDataDanGrafik();
  }

  if (document.getElementById("challengeList")) {
    inisialisasiTantangan();
  }

  if (document.getElementById("calcDevice")) {
    inisialisasiKalkulator();
  }

  if (document.getElementById("pledgeForm")) {
    inisialisasiKomitmen();
    inisialisasiAdmin();
  }
});

function keKoma(angka) {
  if (angka === undefined || angka === null) return "-";
  return String(angka).replace(".", ",");
}

function ambilData(daftar, namaLabel, namaNilai) {
  const label = [];
  const nilai = [];

  if (!daftar || !Array.isArray(daftar)) {
    return { label: label, nilai: nilai };
  }

  for (let i = 0; i < daftar.length; i++) {
    const item = daftar[i];
    if (!item) continue;

    let lbl = item[namaLabel];
    if (lbl === undefined) {
      lbl = item.kode || item.label || item.skor_total || item.skor || item.nama || item.rayon || item.gaya_belajar || item.rombel;
    }
    label.push(lbl);

    let val = item[namaNilai];
    if (val === undefined) {
      val = item.rata_rata !== undefined ? item.rata_rata :
            item.rata_rata_skor !== undefined ? item.rata_rata_skor :
            item.rataRata !== undefined ? item.rataRata :
            item.jumlah !== undefined ? item.jumlah : 0;
    }
    nilai.push(val);
  }

  return { label: label, nilai: nilai };
}

function animasiAngka(elemen, nilaiAkhir, adalahPersen, desimal, durasi) {
  if (!elemen) return;

  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elemen.textContent = keKoma(nilaiAkhir.toFixed(desimal)) + (adalahPersen ? "%" : "");
    return;
  }

  const startTime = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
  const dur = durasi || 1100;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / dur, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const currentVal = ease * nilaiAkhir;

    if (desimal > 0) {
      elemen.textContent = keKoma(currentVal.toFixed(desimal)) + (adalahPersen ? "%" : "");
    } else {
      elemen.textContent = Math.round(currentVal) + (adalahPersen ? "%" : "");
    }

    if (progress < 1) {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(update);
      }
    } else {
      elemen.textContent = keKoma(nilaiAkhir.toFixed(desimal)) + (adalahPersen ? "%" : "");
    }
  }

  if (typeof requestAnimationFrame !== "undefined") {
    requestAnimationFrame(update);
  } else {
    elemen.textContent = keKoma(nilaiAkhir.toFixed(desimal)) + (adalahPersen ? "%" : "");
  }
}

function inisialisasiScrollReveal() {
  if (typeof IntersectionObserver === "undefined") return;

  const targetElements = document.querySelectorAll(".section-block, .hero-badge-box, .stat-card, .rekomendasi-card, .challenge-card, .calc-container, .pledge-box");
  targetElements.forEach(function (el) {
    el.classList.add("fade-in-section");
  });

  const observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targetElements.forEach(function (el) {
    observer.observe(el);
  });
}

function inisialisasiDataDanGrafik() {
  if (window.location && window.location.protocol && window.location.protocol.startsWith("http")) {
    fetch("data-perilaku-energi.json")
      .then(function (response) {
        if (!response.ok) throw new Error("Gagal mengambil data JSON");
        return response.json();
      })
      .then(function (dataJson) {
        buatGrafik(dataJson);
      })
      .catch(function (err) {
        buatGrafik(DATA_ENERGI);
      });
  } else {
    buatGrafik(DATA_ENERGI);
  }
}

function buatGrafik(data) {
  const dataSumber = data || (typeof DATA_ENERGI !== "undefined" ? DATA_ENERGI : null);
  if (!dataSumber) return;

  if (typeof Chart === "undefined") return;

  const hijauTua = "#2e7d32";
  const hijauMuda = "#66bb6a";
  const kuning = "#fdd835";
  const merah = "#ef5350";

  const jumlahResponden = dataSumber.meta && dataSumber.meta.jumlah_responden !== undefined
    ? dataSumber.meta.jumlah_responden
    : dataSumber.jumlahResponden || 636;

  const persenPartisipasi = dataSumber.meta && dataSumber.meta.persen_partisipasi !== undefined
    ? dataSumber.meta.persen_partisipasi
    : dataSumber.persenPartisipasi || 99.4;

  const rataRataSkor = dataSumber.ringkasan && dataSumber.ringkasan.rata_rata_skor !== undefined
    ? dataSumber.ringkasan.rata_rata_skor
    : dataSumber.rataRataSkor || 3.36;

  const persenSering = dataSumber.ringkasan && dataSumber.ringkasan.persen_sering_rata_rata !== undefined
    ? dataSumber.ringkasan.persen_sering_rata_rata
    : dataSumber.persenSering || 90.79;

  const elResponden = document.getElementById("statResponden");
  const elPartisipasi = document.getElementById("statPartisipasi");
  const elRataRata = document.getElementById("statRataRata");
  const elSering = document.getElementById("statSering");

  animasiAngka(elResponden, Number(jumlahResponden), false, 0, 1100);
  animasiAngka(elPartisipasi, Number(persenPartisipasi), true, 1, 1100);
  animasiAngka(elRataRata, Number(rataRataSkor), false, 2, 1100);
  animasiAngka(elSering, Number(persenSering), true, 2, 1100);

  const elChartKategori = document.getElementById("chartKategori");
  if (elChartKategori) {
    const kategoriData = (dataSumber.ringkasan && dataSumber.ringkasan.kategori) || dataSumber.kategori || {};
    const namaKategori = ["Sangat Baik", "Baik", "Cukup", "Kurang"];
    const jumlahKategori = [];

    for (let i = 0; i < namaKategori.length; i++) {
      jumlahKategori.push(kategoriData[namaKategori[i]] || 0);
    }

    new Chart(elChartKategori, {
      type: "doughnut",
      data: {
        labels: namaKategori,
        datasets: [{
          data: jumlahKategori,
          backgroundColor: [hijauTua, hijauMuda, kuning, merah]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 1100,
          easing: "easeOutQuart"
        },
        plugins: {
          legend: { position: "bottom" }
        }
      }
    });
  }

  const elChartButir = document.getElementById("chartButir");
  const listButir = dataSumber.per_butir || dataSumber.butir || [];
  if (elChartButir && listButir.length > 0) {
    const dataButir = ambilData(listButir, "kode", "rata_rata");

    new Chart(elChartButir, {
      type: "bar",
      data: {
        labels: dataButir.label,
        datasets: [{
          label: "Rata-rata skor",
          data: dataButir.nilai,
          backgroundColor: hijauMuda
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: "easeOutQuart"
        },
        scales: {
          x: { min: 1, max: 4 }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  const daftarKeterangan = document.getElementById("keteranganButir");
  if (daftarKeterangan && listButir.length > 0) {
    daftarKeterangan.innerHTML = "";
    for (let i = 0; i < listButir.length; i++) {
      const butir = listButir[i];
      const item = document.createElement("li");
      const kode = butir.kode || ("P" + (i + 1));
      const label = butir.label || butir.pertanyaan || "";
      item.textContent = kode + " = " + label;
      daftarKeterangan.appendChild(item);
    }
  }

  const elChartJurusan = document.getElementById("chartJurusan");
  const listJurusan = dataSumber.per_jurusan || dataSumber.jurusan || [];
  if (elChartJurusan && listJurusan.length > 0) {
    const dataJurusan = ambilData(listJurusan, "kode", "rata_rata_skor");

    new Chart(elChartJurusan, {
      type: "bar",
      data: {
        labels: dataJurusan.label,
        datasets: [{
          label: "Rata-rata skor",
          data: dataJurusan.nilai,
          backgroundColor: hijauTua
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: "easeOutQuart"
        },
        scales: {
          y: { min: 1, max: 4 }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  const elChartSebaran = document.getElementById("chartSebaran");
  const listSebaran = dataSumber.sebaran_skor_total || dataSumber.sebaran || [];
  if (elChartSebaran && listSebaran.length > 0) {
    const dataSebaran = ambilData(listSebaran, "skor_total", "jumlah");

    new Chart(elChartSebaran, {
      type: "bar",
      data: {
        labels: dataSebaran.label,
        datasets: [{
          label: "Jumlah siswa",
          data: dataSebaran.nilai,
          backgroundColor: kuning,
          borderColor: hijauTua,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1100,
          easing: "easeOutQuart"
        },
        scales: {
          x: { title: { display: true, text: "Skor total (10 - 40)" } },
          y: { title: { display: true, text: "Jumlah siswa" } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  const elChartRayon = document.getElementById("chartRayon");
  const listRayon = dataSumber.per_rayon || [];
  if (elChartRayon && listRayon.length > 0) {
    const dataRayon = ambilData(listRayon, "rayon", "rata_rata_skor");

    new Chart(elChartRayon, {
      type: "bar",
      data: {
        labels: dataRayon.label,
        datasets: [{
          label: "Rata-rata skor",
          data: dataRayon.nilai,
          backgroundColor: hijauMuda,
          borderColor: hijauTua,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: "easeOutQuart"
        },
        scales: {
          y: { min: 1, max: 4 }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  const elChartGayaBelajar = document.getElementById("chartGayaBelajar");
  const listGayaBelajar = dataSumber.per_gaya_belajar || [];
  if (elChartGayaBelajar && listGayaBelajar.length > 0) {
    const dataGaya = ambilData(listGayaBelajar, "gaya_belajar", "rata_rata_skor");

    new Chart(elChartGayaBelajar, {
      type: "bar",
      data: {
        labels: dataGaya.label,
        datasets: [{
          label: "Rata-rata skor",
          data: dataGaya.nilai,
          backgroundColor: [hijauTua, hijauMuda, kuning]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: "easeOutQuart"
        },
        scales: {
          y: { min: 1, max: 4 }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  const elChartBivariat = document.getElementById("chartBivariat");
  if (elChartBivariat && typeof DATA_BIVARIAT_POINTS !== "undefined") {
    new Chart(elChartBivariat, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Titik Responden (107 Siswa DKV)",
            data: DATA_BIVARIAT_POINTS,
            backgroundColor: "rgba(46, 125, 50, 0.65)",
            borderColor: "#2e7d32",
            borderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 7
          },
          {
            type: "line",
            label: "Garis Regresi Linier (Y = 22,34 + 0,322X)",
            data: [
              { x: 26, y: 30.71 },
              { x: 40, y: 35.22 }
            ],
            borderColor: "#d32f2f",
            borderWidth: 3,
            fill: false,
            pointRadius: 0,
            tension: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,
          easing: "easeOutQuart"
        },
        plugins: {
          legend: {
            display: true,
            position: "top"
          },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                if (ctx.dataset.type === "line") {
                  return "Garis Regresi: Y = 22,34 + 0,322X";
                }
                return "KIK (X): " + ctx.raw.x + " | PP (Y): " + ctx.raw.y;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Variabel Bebas (X): Nilai Pengetahuan KIK (Skala Maks 40)",
              color: "#2e7d32",
              font: { weight: "bold" }
            },
            min: 25,
            max: 42
          },
          y: {
            title: {
              display: true,
              text: "Variabel Terikat (Y): Nilai Perilaku Realistis PP (Skala Maks 40)",
              color: "#2e7d32",
              font: { weight: "bold" }
            },
            min: 22,
            max: 42
          }
        }
      }
    });
  }
}

function inisialisasiTantangan() {
  const checkboxes = document.querySelectorAll("#challengeList input[type='checkbox']");
  const progressBar = document.getElementById("progressBarFill");
  const progressText = document.getElementById("challengeProgressText");
  const badge = document.getElementById("challengeBadge");
  const btnReset = document.getElementById("btnResetChallenge");

  let savedState = {};
  try {
    const raw = localStorage.getItem("tantangan_hemat_energi");
    if (raw) savedState = JSON.parse(raw);
  } catch (e) {}

  checkboxes.forEach(function (chk) {
    const id = chk.id;
    if (savedState[id]) {
      chk.checked = true;
      chk.closest(".challenge-item").classList.add("completed");
    }

    chk.addEventListener("change", function () {
      const parent = chk.closest(".challenge-item");
      if (chk.checked) {
        parent.classList.add("completed");
        savedState[id] = true;
      } else {
        parent.classList.remove("completed");
        delete savedState[id];
      }
      try {
        localStorage.setItem("tantangan_hemat_energi", JSON.stringify(savedState));
      } catch (e) {}
      updateTantanganUI();
    });
  });

  function updateTantanganUI() {
    let completed = 0;
    checkboxes.forEach(function (c) {
      if (c.checked) completed++;
    });

    const total = checkboxes.length || 7;
    const persen = Math.round((completed / total) * 100);

    if (progressBar) progressBar.style.width = persen + "%";
    if (progressText) progressText.textContent = completed + " dari " + total + " tantangan selesai (" + persen + "%)";

    if (badge) {
      if (completed === 0) {
        badge.textContent = "Mulai Tantangan!";
        badge.style.backgroundColor = "#fff9c4";
        badge.style.color = "#f57f17";
      } else if (completed < total) {
        badge.textContent = "Langkah Bagus! (" + persen + "%)";
        badge.style.backgroundColor = "#e8f5e9";
        badge.style.color = "#2e7d32";
      } else {
        badge.textContent = "🌟 Hebat! 7/7 Tuntas!";
        badge.style.backgroundColor = "#c8e6c9";
        badge.style.color = "#1b5e20";
      }
    }
  }

  if (btnReset) {
    btnReset.addEventListener("click", function () {
      if (confirm("Reset semua centang tantangan 7 hari?")) {
        savedState = {};
        try {
          localStorage.removeItem("tantangan_hemat_energi");
        } catch (e) {}
        checkboxes.forEach(function (chk) {
          chk.checked = false;
          chk.closest(".challenge-item").classList.remove("completed");
        });
        updateTantanganUI();
      }
    });
  }

  updateTantanganUI();
}

function inisialisasiKalkulator() {
  const selDevice = document.getElementById("calcDevice");
  const inQty = document.getElementById("calcQty");
  const inHours = document.getElementById("calcHours");
  const lblHours = document.getElementById("lblHours");
  const inDays = document.getElementById("calcDays");

  const resKwh = document.getElementById("resKwh");
  const resCost = document.getElementById("resCost");
  const resCo2 = document.getElementById("resCo2");

  function hitung() {
    const watt = Number(selDevice.value) || 40;
    const qty = Number(inQty.value) || 1;
    const hours = Number(inHours.value) || 1;
    const days = Number(inDays.value) || 22;

    if (lblHours) lblHours.textContent = hours + " Jam/hari";

    const totalKwh = (watt * qty * hours * days) / 1000;
    const totalRupiah = totalKwh * 1444.70;
    const totalCo2 = totalKwh * 0.85;

    if (resKwh) resKwh.textContent = keKoma(totalKwh.toFixed(2)) + " kWh";
    if (resCost) resCost.textContent = "Rp " + Math.round(totalRupiah).toLocaleString("id-ID");
    if (resCo2) resCo2.textContent = keKoma(totalCo2.toFixed(2)) + " kg";
  }

  [selDevice, inQty, inHours, inDays].forEach(function (el) {
    if (el) el.addEventListener("input", hitung);
  });

  hitung();
}

function inisialisasiKomitmen() {
  const form = document.getElementById("pledgeForm");
  const feedContainer = document.getElementById("commitFeedContainer");
  const liveCount = document.getElementById("liveCommitCount");
  const filterSelect = document.getElementById("filterFeedMajor");

  let komitmenList = [];
  try {
    const stored = localStorage.getItem("komitmen_pengunjung");
    if (stored) {
      komitmenList = JSON.parse(stored);
    } else {
      komitmenList = [...DATA_KOMITMEN_SEED];
      localStorage.setItem("komitmen_pengunjung", JSON.stringify(komitmenList));
    }
  } catch (e) {
    komitmenList = [...DATA_KOMITMEN_SEED];
  }

  function renderFeed(filter) {
    if (!feedContainer) return;
    feedContainer.innerHTML = "";

    const filtered = (filter && filter !== "ALL")
      ? komitmenList.filter(item => item.jurusan === filter)
      : komitmenList;

    if (liveCount) {
      liveCount.textContent = komitmenList.length + " Warga Sekolah Berikrar";
    }

    if (filtered.length === 0) {
      feedContainer.innerHTML = '<div style="text-align: center; color: #78909c; padding: 20px;">Belum ada komitmen untuk jurusan ini. Jadilah yang pertama!</div>';
      return;
    }

    filtered.forEach(function (item) {
      const card = document.createElement("div");
      card.className = "commit-card";

      const tagsHtml = (item.aksi || []).map(a => `<span class="commit-tag">✓ ${a}</span>`).join("");

      card.innerHTML = `
        <div class="commit-top">
          <span class="commit-name">${item.nama}</span>
          <span class="commit-meta">${item.jurusan} • ${item.waktu || 'Baru saja'}</span>
        </div>
        <div class="commit-tags">${tagsHtml}</div>
        ${item.pesan ? `<div class="commit-note">"${item.pesan}"</div>` : ''}
      `;

      feedContainer.appendChild(card);
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("pledgeName").value.trim();
      const jurusan = document.getElementById("pledgeMajor").value;
      const pesan = document.getElementById("pledgeMsg").value.trim();

      const chkActions = document.querySelectorAll("input[name='pledgeActions']:checked");
      const aksiDipilih = [];
      chkActions.forEach(c => aksiDipilih.push(c.value));

      if (aksiDipilih.length === 0) {
        alert("Pilih minimal satu aksi komitmen yang ingin Anda lakukan.");
        return;
      }

      const newPledge = {
        nama: nama,
        jurusan: jurusan,
        aksi: aksiDipilih,
        pesan: pesan,
        waktu: "Baru saja"
      };

      komitmenList.unshift(newPledge);
      try {
        localStorage.setItem("komitmen_pengunjung", JSON.stringify(komitmenList));
      } catch (err) {}

      form.reset();
      alert("Terima kasih, " + nama + "! Ikrar komitmen hemat energi Anda telah berhasil disimpan dan ditampilkan.");
      renderFeed(filterSelect ? filterSelect.value : "ALL");
    });
  }

  if (filterSelect) {
    filterSelect.addEventListener("change", function () {
      renderFeed(filterSelect.value);
    });
  }

  renderFeed("ALL");
}

function inisialisasiAdmin() {
  const modal = document.getElementById("adminModal");
  const btnOpen = document.getElementById("btnOpenAdmin");
  const btnClose = document.getElementById("btnCloseAdmin");
  const btnExportJson = document.getElementById("btnExportJson");
  const btnExportCsv = document.getElementById("btnExportCsv");
  const btnExportExcel = document.getElementById("btnExportExcel");
  const btnReset = document.getElementById("btnResetData");

  const statTotal = document.getElementById("adminTotalCount");
  const statMajor = document.getElementById("adminTopMajor");
  const statAction = document.getElementById("adminTopAction");

  function hitungStatistik() {
    let list = [];
    try {
      const stored = localStorage.getItem("komitmen_pengunjung");
      list = stored ? JSON.parse(stored) : [...DATA_KOMITMEN_SEED];
    } catch (e) {
      list = [...DATA_KOMITMEN_SEED];
    }

    if (statTotal) statTotal.textContent = list.length;

    const majorCounts = {};
    const actionCounts = {};

    list.forEach(item => {
      if (item.jurusan) {
        majorCounts[item.jurusan] = (majorCounts[item.jurusan] || 0) + 1;
      }
      if (Array.isArray(item.aksi)) {
        item.aksi.forEach(a => {
          actionCounts[a] = (actionCounts[a] || 0) + 1;
        });
      }
    });

    let topM = "-";
    let maxM = 0;
    for (const m in majorCounts) {
      if (majorCounts[m] > maxM) {
        maxM = majorCounts[m];
        topM = m;
      }
    }
    if (statMajor) statMajor.textContent = topM;

    let topA = "-";
    let maxA = 0;
    for (const a in actionCounts) {
      if (actionCounts[a] > maxA) {
        maxA = actionCounts[a];
        topA = a;
      }
    }
    if (statAction) statAction.textContent = topA;
  }

  if (btnOpen && modal) {
    btnOpen.addEventListener("click", function () {
      hitungStatistik();
      modal.classList.add("active");
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (btnExportJson) {
    btnExportJson.addEventListener("click", function () {
      try {
        const stored = localStorage.getItem("komitmen_pengunjung") || JSON.stringify(DATA_KOMITMEN_SEED);
        const blob = new Blob([stored], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data-komitmen-pengunjung.json";
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        alert("Gagal mengekspor data: " + e.message);
      }
    });
  }

  if (btnExportExcel) {
    btnExportExcel.addEventListener("click", function () {
      try {
        const stored = localStorage.getItem("komitmen_pengunjung");
        const list = stored ? JSON.parse(stored) : DATA_KOMITMEN_SEED;

        let tableHtml = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">';
        tableHtml += '<head><meta charset="utf-8">';
        tableHtml += '<style>';
        tableHtml += 'table { border-collapse: collapse; width: 100%; font-family: Segoe UI, Calibri, Arial, sans-serif; }';
        tableHtml += 'th { background-color: #2E7D32; color: #FFFFFF; font-weight: bold; border: 1px solid #1B5E20; padding: 10px; text-align: center; font-size: 11pt; }';
        tableHtml += 'td { border: 1px solid #CFD8DC; padding: 8px 10px; font-size: 10pt; vertical-align: middle; }';
        tableHtml += '.td-no { text-align: center; width: 45px; background-color: #F1F8F2; font-weight: bold; }';
        tableHtml += '.td-jurusan { text-align: center; width: 90px; font-weight: bold; color: #1B5E20; }';
        tableHtml += '.td-waktu { text-align: center; width: 110px; color: #546E7A; }';
        tableHtml += '.even { background-color: #F9FBF9; }';
        tableHtml += '</style></head><body>';
        tableHtml += '<h2 style="color: #2E7D32; font-family: Segoe UI, Arial, sans-serif;">TABEL DATA KOMITMEN PENGUNJUNG KAMPANYE HEMAT ENERGI</h2>';
        tableHtml += '<p style="color: #546E7A; font-family: Segoe UI, Arial, sans-serif; font-size: 10pt; margin-bottom: 14px;">SMK Wikrama Bogor &bull; Total Komitmen: ' + list.length + ' Peserta Didik</p>';
        tableHtml += '<table border="1" cellpadding="8" cellspacing="0">';
        tableHtml += '<thead><tr>';
        tableHtml += '<th style="background-color: #2E7D32; color: #FFFFFF; width: 45px;">No</th>';
        tableHtml += '<th style="background-color: #2E7D32; color: #FFFFFF; width: 180px;">Nama Siswa / Pengunjung</th>';
        tableHtml += '<th style="background-color: #2E7D32; color: #FFFFFF; width: 90px;">Jurusan</th>';
        tableHtml += '<th style="background-color: #2E7D32; color: #FFFFFF; width: 220px;">Aksi Komitmen</th>';
        tableHtml += '<th style="background-color: #2E7D32; color: #FFFFFF; width: 320px;">Pesan / Janji Perilaku</th>';
        tableHtml += '<th style="background-color: #2E7D32; color: #FFFFFF; width: 120px;">Waktu Kirim</th>';
        tableHtml += '</tr></thead><tbody>';

        list.forEach(function (item, idx) {
          const rowClass = idx % 2 === 1 ? ' class="even"' : '';
          const aksiStr = (item.aksi || []).join("; ");
          tableHtml += '<tr' + rowClass + '>';
          tableHtml += '<td class="td-no">' + (idx + 1) + '</td>';
          tableHtml += '<td>' + (item.nama || "-") + '</td>';
          tableHtml += '<td class="td-jurusan">' + (item.jurusan || "-") + '</td>';
          tableHtml += '<td>' + aksiStr + '</td>';
          tableHtml += '<td>' + (item.pesan || "-") + '</td>';
          tableHtml += '<td class="td-waktu">' + (item.waktu || "-") + '</td>';
          tableHtml += '</tr>';
        });

        tableHtml += '</tbody></table></body></html>';

        const blob = new Blob([tableHtml], { type: "application/vnd.ms-excel;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "tabel-komitmen-pengunjung.xls";
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        alert("Gagal mengekspor tabel Excel: " + e.message);
      }
    });
  }

  if (btnExportCsv) {
    btnExportCsv.addEventListener("click", function () {
      try {
        const stored = localStorage.getItem("komitmen_pengunjung");
        const list = stored ? JSON.parse(stored) : DATA_KOMITMEN_SEED;

        let csv = "\uFEFFsep=;\r\nNo;Nama;Jurusan;Aksi Komitmen;Pesan;Waktu\r\n";
        list.forEach(function (item, idx) {
          const aksiStr = (item.aksi || []).join(", ");
          const nama = (item.nama || "").replace(/"/g, '""');
          const jurusan = (item.jurusan || "").replace(/"/g, '""');
          const aksi = aksiStr.replace(/"/g, '""');
          const pesan = (item.pesan || "").replace(/"/g, '""');
          const waktu = (item.waktu || "").replace(/"/g, '""');
          csv += (idx + 1) + ';"' + nama + '";"' + jurusan + '";"' + aksi + '";"' + pesan + '";"' + waktu + '"\r\n';
        });

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data-komitmen-pengunjung.csv";
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        alert("Gagal mengekspor CSV: " + e.message);
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", function () {
      if (confirm("Kembalikan data komitmen pengunjung ke data awal?")) {
        try {
          localStorage.setItem("komitmen_pengunjung", JSON.stringify(DATA_KOMITMEN_SEED));
        } catch (e) {}
        hitungStatistik();
        inisialisasiKomitmen();
        alert("Data berhasil direset ke data awal.");
      }
    });
  }
}
