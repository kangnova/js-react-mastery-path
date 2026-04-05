# 📝 Tutorial: Membangun Modern Profile Card dengan Tailwind CSS

Tujuan latihan ini: Memahami cara menggunakan **Utility Classes** untuk membangun antarmuka yang terlihat sangat premium.

---

## Langkah 1: Persiapan
1.  Buka folder `03-tailwind-practice`.
2.  Buka file `index.html`.
3.  Cari elemen `<div id="exerciseArea">` (baris 16).

---

## Langkah 2: Membuat Kontainer Card
Hapus isi teks contoh di dalam `exerciseArea` dan ganti dengan:

```html
<div class="bg-white rounded-3xl shadow-2xl p-8 overflow-hidden transition-all hover:shadow-blue-200/50">
    <!-- Konten akan ada di sini -->
</div>
```

---

## Langkah 3: Menambahkan Avatar & Nama
Di dalam `div` tadi, tambahkan:

```html
<div class="flex flex-col items-center">
    <!-- Avatar (Bisa ganti Image) -->
    <div class="w-32 h-32 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full mb-6 border-4 border-white ring-4 ring-blue-50 shadow-lg"></div>
    
    <h2 class="text-2xl font-bold text-gray-800">Antigravity Dev</h2>
    <p class="text-blue-500 font-medium tracking-wide">FULLSTACK DEVELOPER</p>
</div>
```

---

## Langkah 4: Menambahkan Statistik & Tombol
Di bawah Nama, tambahkan:

```html
<div class="flex justify-around bg-gray-50 rounded-2xl p-4 my-6 w-full border border-gray-100">
    <div class="text-center">
        <span class="block font-bold text-gray-800">1.2K</span>
        <span class="text-xs text-gray-400 uppercase">Followers</span>
    </div>
    <div class="text-center">
        <span class="block font-bold text-gray-800">45</span>
        <span class="text-xs text-gray-400 uppercase">Projects</span>
    </div>
</div>

<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-xl shadow-blue-200">
    Follow Me
</button>
```

---

## Langkah 5: Simpan & Lihat Hasilnya
1.  Simpan file `index.html` (**Ctrl + S**).
2.  Refresh browser (**F5**).
3.  Perhatikan bagaimana bayangan (shadow) dan transisi bekerja saat Anda mencoba hover ke card atau tombol!

---

## Langkah 6: Eksperimen Tambahan
Coba ganti `bg-blue-600` menjadi `bg-emerald-500` atau warna lain di dokumentasi Tailwind. Anda dapat mengubah seluruh warna tema hanya dalam hitungan detik!
