/**
 * 💡 Kode Contoh: Jawaban dari Latihan Tahap 1
 * 
 * Gunakan ini jika Anda ingin mencocokkan hasil kerja Anda.
 */

// Langkah 2: Membuat Variabel
const namaSiswa = "Antigravity (Siswa)";
let nilaiUjian = 85; 

// Menggunakan let karena nilai berkala diubah (misal di bawah ini)
nilaiUjian = 90; 

// Langkah 3: Menggunakan if-else untuk statusLulus
let statusLulus;

if (nilaiUjian >= 75) {
    statusLulus = "LULUS ✅";
} else {
    statusLulus = "TIDAK LULUS ❌";
}

// Langkah 4: Tampilkan hasil via console.log
console.log("=== HASIL LATIHAN 1 ===");
console.log("Nama:", namaSiswa);
console.log("Nilai Ujian:", nilaiUjian);
console.log("Status:", statusLulus);

// Eksperimen Tambahan: Logika && (AND)
let kehadiran = 95;
let syaratKehadiran = 80;

if (nilaiUjian >= 75 && kehadiran >= syaratKehadiran) {
    console.log("Hasil Akhir: Anda layak mendapatkan Sertifikat! 🎓");
} else {
    console.log("Hasil Akhir: Coba lagi di ujian berikutnya.");
}
