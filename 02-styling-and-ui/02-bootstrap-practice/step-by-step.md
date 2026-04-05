# 📝 Tutorial: Membangun Hero Section & Feature Cards dengan Bootstrap 5

Tujuan latihan ini: Memahami cara menggunakan **Grid System** dan **Komponen UI** tanpa menulis file CSS baru.

---

## Langkah 1: Persiapan
1.  Buka folder `02-bootstrap-practice`.
2.  Buka file `index.html`.
3.  Cari bagian `<!-- Placeholder untuk Latihan -->` (baris 41).

---

## Langkah 2: Membuat Hero Section (Jumbotron)
Copas kode ini di bawah `exerciseArea`:

```html
<section class="py-5 text-center container-fluid bg-light border-bottom">
    <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Selamat Datang di JS Mastery</h1>
            <p class="lead text-muted">Pelajari pengembangan web modern dengan cepat menggunakan framework CSS paling populer di dunia.</p>
            <p>
                <a href="#" class="btn btn-primary my-2 shadow-sm">Mulai Sekarang</a>
                <a href="#" class="btn btn-outline-secondary my-2">Pelajari Lebih Lanjut</a>
            </p>
        </div>
    </div>
</section>
```

---

## Langkah 3: Membuat Grid Feature Cards
Sekarang kita buat 3 kolom yang berisi kartu informasi:

```html
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
    <!-- Card 1 -->
    <div class="col">
        <div class="card shadow-sm h-100">
            <div class="card-body">
                <h5 class="card-title text-primary">Responsive Design</h5>
                <p class="card-text text-secondary">Tampilan website Anda akan otomatis menyesuaikan layar HP, Tablet, maupun Desktop.</p>
            </div>
        </div>
    </div>
    
    <!-- Card 2 -->
    <div class="col">
        <div class="card shadow-sm h-100">
            <div class="card-body border-top border-primary border-4">
                <h5 class="card-title text-success">Pre-built Components</h5>
                <p class="card-text text-secondary">Gunakan Navbar, Modal, dan Button siap pakai tanpa harus koding CSS dari nol.</p>
            </div>
        </div>
    </div>

    <!-- Card 3 -->
    <div class="col">
        <div class="card bg-primary text-white shadow h-100">
            <div class="card-body">
                <h5 class="card-title">Utility-First Classes</h5>
                <p class="card-text opacity-75">Gunakan class seperti m-5, p-3, text-center untuk pengaturan styling yang sangat cepat.</p>
            </div>
        </div>
    </div>
</div>
```

---

## Langkah 4: Simpan & Lihat Hasilnya
1.  Simpan file `index.html` (**Ctrl + S**).
2.  Refresh browser (**F5**).
3.  Coba kecilkan ukuran browser Anda. Perhatikan bagaimana 3 kolom tadi berubah menjadi 1 kolom secara otomatis di layar kecil!

---

## Langkah 5: Eksperimen Tambahan
Coba ganti warna tombol dari `btn-primary` menjadi `btn-danger` atau `btn-warning`. Lihat perubahannya seketika!
