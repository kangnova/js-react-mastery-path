# 📝 Tutorial: Membuat Sistem Cek Nilai Sederhana

Latihan ini akan membantu Anda memahami cara kerja variabel, tipe data, dan pengkondisian (`if-else`).

---

## Langkah 1: Persiapan
1.  Buka folder `01-logic-and-variables` di VS Code Anda.
2.  Buka file `index.js`. File ini saat ini masih kosong atau berisi kerangka.

---

## Langkah 2: Membuat Variabel
Mari kita buat variabel untuk nama siswa dan nilainya. Ketik kode berikut di `index.js`:

```javascript
const namaSiswa = "Antigravity"; // Coba ganti dengan nama Anda
let nilaiUjian = 85;             // Nilai bisa berubah jika ingin dites
```

---

## Langkah 3: Menggunakan Logika `if-else`
Kita ingin mengecek apakah siswa tersebut lulus atau tidak. Gunakan pengkondisian:

```javascript
let statusLulus;

if (nilaiUjian >= 75) {
    statusLulus = true;
} else {
    statusLulus = false;
}

console.log("Nama Siswa:", namaSiswa);
console.log("Nilai:", nilaiUjian);
console.log("Status Lulus:", statusLulus);
```

---

## Langkah 4: Menjalankan di Browser
1.  Simpan file `index.js` (**Ctrl + S**).
2.  Buka `index.html` di browser (Klik Kanan > Open with Browser).
3.  Buka **Developer Tools (F12)** > **Console**.
4.  Lihat apakah nama, nilai, dan status lulus Anda muncul di sana.

---

## Langkah 5: Eksperimen Tambahan
Coba gunakan operator logika `&&`:
-   Tambahkan variabel `kehadiran = 90`.
-   Cek apakah `nilaiUjian >= 75` DAN `kehadiran >= 80`.
-   Lihat hasilnya di Console!
