# 📝 Tutorial: Mengolah Data Pengguna dengan ES6+ (Fetch & Destructure)

Tujuan latihan ini: Mengambil data pengguna secara asinkron (`async/await`), mengambil bagian data tertentu saja (`destructuring`), dan menampilkannya di halaman menggunakan Template Literals.

---

## Langkah 1: Persiapan
1.  Buka folder `03-es6-plus`.
2.  Buka file `index.js`.
3.  Buka `index.html` di browser Anda (**F12 > Console**).

---

## Langkah 2: Membuat Arrow Function (Simulasi Fetch)
Kita akan membuat fungsi untuk mengambil data sederhana dari sebuah Array:

```javascript
const userData = [
    { id: 1, nama: "Budi Santoso", hobi: ["Ngoding", "Membaca"], role: "Admin" },
    { id: 2, nama: "Siti Aminah", hobi: ["Design", "Lari"], role: "Editor" }
];

// Arrow Function untuk menyatukan hobi
const gabungHobi = (hobiArray) => hobiArray.join(", ");
```

---

## Langkah 3: Menggunakan Destructuring & Template Literals
Setiap data pengguna akan kita olah. Ketik kode berikut di `index.js`:

```javascript
const tampilkanUser = (user) => {
    // 1. Destructuring: Mengambil nama, hobi, dan role saja
    const { nama, hobi, role } = user;
    
    // 2. Template Literals: Mencetak pesan yang rapi
    console.log(`Pengguna: ${nama} (${role}), Hobi: ${gabungHobi(hobi)}`);
};
```

---

## Langkah 4: Async / Await (Simulasi Delay)
Seolah-olah data diambil dari server.

```javascript
const ambilDataStatus = async () => {
    console.log("Memulai pengambilan data...");
    
    // Menunggu simulasi pengambilan data selama 1 detik
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Data berhasil diambil! ✅");
    userData.forEach(tampilkanUser);
};

ambilDataStatus();
```

---

## Langkah 5: Menyimpan & Mencoba
1.  Simpan file `index.js` (**Ctrl + S**).
2.  Refresh browser (**F5**).
3.  Lihat di **Console** apakah data muncul secara bertahap (setelah 1 detik)!

---

## Langkah 6: Eksperimen Tambahan (Spread)
Coba tambahkan properti baru ke setiap user tanpa mengubah data aslinya:

```javascript
const userBaru = { ...userData[0], status: "Aktif" };
console.log("User Baru:", userBaru);
```
Terapkan logika ini di dalam `index.js` Anda!
