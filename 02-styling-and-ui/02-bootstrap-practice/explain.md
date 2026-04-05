# 📦 Penjelasan: Apa itu Bootstrap?

**Bootstrap** adalah framework CSS paling populer di dunia untuk membangun situs web yang responsif dan mengutamakan perangkat seluler (mobile-first).

---

## 1. Konsep Utama: Grid System
Bootstrap menggunakan sistem 12 kolom untuk mengatur tata letak. Anda membagi halaman menjadi baris (`row`) dan kolom (`col`).

-   **`.container`**: Membungkus konten agar memiliki jarak di sisi kiri & kanan.
-   **`.row`**: Baris horizontal yang menampung kolom.
-   **`.col-md-6`**: Mengambil 6 dari 12 kolom (setengah lebar layar) pada ukuran medium ke atas.

---

## 2. Kelas Utilitas (Utilities)
Anda tidak perlu menulis CSS untuk hal-hal sederhana. Gunakan kelas bawaan:
-   **`m-5`**: Margin besar.
-   **`p-3`**: Padding sedang.
-   **`text-center`**: Teks di tengah.
-   **`bg-primary`**: Latar belakang biru khas Bootstrap.
-   **`d-flex`**: Mengaktifkan Flexbox pada elemen.

---

## 3. Komponen Siap Pakai
Bootstrap menyediakan komponen yang sudah jadi styling-nya:
-   **Navbar**: Navigasi atas.
-   **Cards**: Kotak konten dengan bayangan (shadow).
-   **Buttons**: Tombol dengan berbagai warna (`btn-primary`, `btn-danger`).
-   **Modals/Alerts**: Pop-up dan pesan peringatan.

---

## 🖥️ Cara Menjalankan
Cukup buka `index.html` di browser. Karena kita menggunakan CDN, Anda memerlukan **koneksi internet** agar file CSS Bootstrap bisa ter-load dengan benar.

---

> [!IMPORTANT]
> Urutan penempatan Class di HTML sangat berpengaruh. Biasakan menaruh class dasar (seperti `btn`) terlebih dahulu sebelum class spesifik (seperti `btn-primary`).
