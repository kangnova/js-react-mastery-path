# 📝 Tutorial: Membuat Card Dashboard Modern dengan CSS

Tujuan latihan ini: Memahami **Box Model** (jarak antar elemen) dan **Flexbox** (menata isi card agar rapi).

---

## Langkah 1: Persiapan
1.  Buka folder `01-css-fundamentals`.
2.  Buka file `style.css`.
3.  Buka `index.html` di browser Anda.

---

## Langkah 2: Mengatur Kontainer Fleksibel
Kita ingin membuat elemen berjejer ke samping (`row`). Masukkan kode berikut ke dalam `style.css`:

```css
.flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f7fafc;
    padding: 20px;
    border-radius: 12px;
}

.flex-item {
    background-color: #4299e1;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
}
```

---

## Langkah 3: Membuat Layout Card (Box Model)
Sekarang kita buat card yang lebih kompleks. Pelajari penggunaan padding dan margin:

```css
.card {
    width: 300px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    overflow: hidden;
    transition: box-shadow 0.3s;
}

.card:hover {
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}

.card-image {
    height: 150px;
    background-color: #cbd5e0;
}

.card-content {
    padding: 20px; /* Box Model: Padding */
}

.card-btn {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #2b6cb0;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 15px; /* Box Model: Margin */
}
```

---

## Langkah 4: Simpan & Lihat Hasilnya
1.  Simpan file `style.css` (**Ctrl + S**).
2.  Refresh browser (**F5**).
3.  Gunakan **Inspect Element (F12)** untuk melihat bagaimana **Padding** (hijau) dan **Margin** (oranye) bekerja!

---

## Langkah 5: Eksperimen Tambahan
Coba ubah `flex-direction: column;` pada `.flex-container` untuk melihat bagaimana elemen tersusun ke bawah.
