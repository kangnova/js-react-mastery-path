# 📝 Tutorial: Membuat Tombol yang Bisa Mengubah Warna Halaman

Tujuan latihan ini: Membuat tombol yang bisa mengubah teks judul dan warna latar belakang (background) halaman secara acak (random).

---

## Langkah 1: Persiapan
1.  Buka folder `02-dom-manipulation`.
2.  Buka file `index.js`.
3.  Buka `index.html` di browser Anda (**F12 > Console**).

---

## Langkah 2: Menangkap Elemen
Gunakan `document.getElementById` untuk mengambil "target" yang akan dimanipulasi:

```javascript
const body = document.getElementById('mainBody');
const title = document.getElementById('mainTitle');
const button = document.getElementById('magicBtn');
```

---

## Langkah 3: Menyiapkan Logika Perubahan
Kita ingin mengubah warna dan teks. Tuliskan kode untuk menangkap klik tombol:

```javascript
button.addEventListener('click', function() {
    // 1. Ubah Teks Judul
    title.innerText = "DOM Berhasil Diubah! 🚀";
    
    // 2. Ubah Warna Judul
    title.style.color = "#3b82f6";
    
    // 3. Ubah Background Body
    body.style.backgroundColor = "#e2e8f0";
    
    console.log("Tombol telah diklik, DOM diperbarui!");
});
```

---

## Langkah 4: Menyimpan & Mencoba
1.  Simpan file `index.js` (**Ctrl + S**).
2.  Refresh browser (**F5**).
3.  Klik tombol "Klik Saya! ✨" dan lihat apa yang terjadi!

---

## Langkah 5: Eksperimen Menengah (Opsional)
Coba buat warna background berubah secara acak (random) setiap kali diklik:

```javascript
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
body.style.backgroundColor = randomColor;
```
Terapkan logika ini di dalam `addEventListener` Anda!
