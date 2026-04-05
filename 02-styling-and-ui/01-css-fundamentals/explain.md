# 🎨 Penjelasan: CSS Fundamentals (Box Model & Flexbox)

Sebelum kita masuk ke Framework modern seperti Tailwind, sangat penting bagi Anda untuk memahami bagaimana CSS mengatur tata letak (layout) di balik layar.

---

## 1. Box Model
Setiap elemen di halaman web (seperti gambar, tombol, atau teks) dianggap sebagai sebuah kotak (**Box**). Ada 4 lapisan utama:
-   **Content**: Isi asli (teks/gambar).
-   **Padding**: Jarak antara isi dan garis tepi (border).
-   **Border**: Garis tepi elemen.
-   **Margin**: Jarak antara elemen dengan elemen lain di luarnya.

---

## 2. Flexbox (Flexible Box)
Ini adalah sistem tata letak 1-dimensi yang sangat ampuh. Digunakan untuk membuat elemen berjejer ke samping atau ke bawah dengan mudah.

Property Utama pada **Flex Container**:
-   **`display: flex;`**: Mulai menggunakan mode fleksibel.
-   **`flex-direction`**: Mengatur arah (row/column).
-   **`justify-content`**: Mengatur posisi horisontal (left, center, space-between).
-   **`align-items`**: Mengatur posisi vertikal (center, start, end).

---

## 🖥️ Cara Belajar & Berlatih
1.  Buka `index.html` di browser.
2.  Gunakan file `style.css` untuk mulai menulis kode styling Anda sendiri.
3.  Klik Kanan > **Inspect (F12)** di browser, lalu arahkan kursor ke elemen. Perhatikan diagram **Box Model** di tab **Computed**.

---

> [!TIP]
> Hampir semua komponen di React nanti akan diatur tata letaknya menggunakan Flexbox. Jadi, pastikan Anda memahami konsep `justify-content` dan `align-items` dengan baik!
