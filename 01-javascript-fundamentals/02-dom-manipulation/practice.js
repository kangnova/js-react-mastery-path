/** 
 * 💡 Kode Contoh: Jawaban dari Latihan Tahap 2
 * 
 * Gunakan ini sebagai referensi kunci Anda.
 */

// 1. Menangkap Elemen
const body = document.getElementById('mainBody');
const title = document.getElementById('mainTitle');
const button = document.getElementById('magicBtn');

// 2. Menambahkan Event Listener (Klik)
button.addEventListener('click', function() {
    
    // Logika Mengubah Teks
    title.innerText = "DOM Berhasil Diubah! 🚀";
    
    // Logika Mengubah Gaya (Style)
    title.style.color = "#3b82f6";
    
    // Eksperimen Menengah: Mengubah Warna Background Secara Acak (Random)
    const randomHex = Math.floor(Math.random()*16777215).toString(16);
    const randomColor = '#' + randomHex;
    
    body.style.backgroundColor = randomColor;
    
    // Tampilkan Status di Console
    console.log("Warna Latar Belakang Baru:", randomColor);
    console.log("DOM updated successfully!");
});

/** 
 * Tips: 
 * - Gunakan console.dir(title) untuk melihat semua properti yang bisa dimanipulasi dari sebuah elemen.
 * - Anda juga bisa menggunakan element.classList.toggle('class-name') untuk mengubah tampilan menggunakan Class CSS.
 */
