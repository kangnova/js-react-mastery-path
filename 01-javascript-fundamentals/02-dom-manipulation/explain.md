# 🌐 Penjelasan: Apa itu DOM Manipulation?

DOM (**Document Object Model**) adalah representasi dari halaman web Anda yang bisa dimanipulasi oleh JavaScript. Bayangkan HTML adalah struktur bangunan, dan JavaScript adalah renovator yang bisa mengubah warna cat, mengganti pintu, atau menambah dekorasi tanpa harus membangun ulang seluruh gedung.

---

## 1. Memilih Elemen (Selecting)
Sebelum kita bisa mengubah sesuatu, kita harus "menangkap" elemen tersebut terlebih dahulu.

-   **`document.getElementById('id-elemen')`**: Digunakan untuk mengambil satu elemen unik berdasarkan ID-nya.
-   **`document.querySelector('.class-atau-tag')`**: Cara yang lebih modern dan fleksibel (bisa menggunakan selector CSS seperti class atau tag).

---

## 2. Mengubah Isi & Gaya (Modifying)
Setelah elemen ditangkap, kita bisa melakukan banyak hal:

-   **`element.innerText`**: Mengubah teks di dalam elemen.
-   **`element.style.backgroundColor`**: Mengubah warna background elemen secara langsung.
-   **`element.classList.add('nama-class')`**: Menambah class CSS ke dalam elemen.

---

## 3. Menangani Interaksi (Events)
Kita ingin perubahan terjadi saat user melakukan sesuatu (misal: klik tombol).

-   **`addEventListener('click', fungsi)`**: Menunggu interaksi klik dari user, lalu menjalankan fungsi tertentu sebagai respons.

---

## 🖥️ Cara Menjalankan
Buka file `index.html` di browser Anda. Anda akan melihat tombol yang belum berfungsi. Tugas Anda adalah membuat tombol tersebut bekerja melalui file `index.js`.
