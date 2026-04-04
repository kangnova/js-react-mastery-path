# ⚡ Penjelasan: Modern JavaScript (ES6+)

ES6+ (ECMAScript 2015 dan seterusnya) membawa perubahan besar pada cara kita menulis JavaScript. Hampir seluruh kode React menggunakan fitur-fitur baru ini.

---

## 1. Arrow Functions `() => {}`
Cara yang lebih singkat dan bersih untuk menulis fungsi. Sangat sering digunakan di React Components dan Hooks.

```javascript
// Cara Lama
function sapa(nama) {
    return "Halo " + nama;
}

// ES6 (Arrow Function)
const sapa = (nama) => `Halo ${nama}`;
```

---

## 2. Template Literals (Backticks ``)
Memungkinkan kita memasukkan variabel ke dalam string dengan lebih mudah menggunakan `${variabel}`.

---

## 3. Destructuring
Mengambil data dari Object atau Array dengan cepat tanpa harus mengetik nama object berulang-ulang.

```javascript
const user = { nama: "Budi", umur: 25 };
const { nama, umur } = user; // Eksklusif mengambil nama dan umur
```

---

## 4. Spread & Rest Operator (`...`)
- **Spread**: Memecah atau menyalin isi Array/Object.
- **Rest**: Mengumpulkan sisa elemen menjadi sebuah Array.

```javascript
const hobi = ["Membaca", "Ngoding"];
const hobiBaru = [...hobi, "Lari"]; // Menyalin hobi lama dan menambah baru
```

---

## 5. Async / Await (Asyncronous)
Digunakan untuk menangani proses yang memakan waktu (seperti mengambil data dari internet) agar kode tetap "menunggu" sampai data selesai diambil tanpa membekukan browser.

---

## 🖥️ Mengapa Ini Penting untuk React?
Di React, Anda akan sering melakukan hal-hal berikut:
- Membuat komponen dengan **Arrow Functions**.
- Mengambil data dari API dengan **Async/Await**.
- Mengirim data antar komponen menggunakan **Destructuring** (Props).
- Memperbarui State menggunakan **Spread Operator**.
