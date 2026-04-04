/** 
 * 💡 Kode Contoh: Jawaban dari Latihan Tahap 3
 * 
 * Gunakan ini sebagai referensi kunci Anda.
 */

// 1. Data Simulasi
const userData = [
    { id: 1, nama: "Budi Santoso", hobi: ["Ngoding", "Membaca"], role: "Admin" },
    { id: 2, nama: "Siti Aminah", hobi: ["Design", "Lari"], role: "Editor" },
    { id: 3, nama: "Antigravity", hobi: ["Membaca", "Ngoding"], role: "Moderator" }
];

// 2. Arrow Function & Template Literals
const gabungHobi = (hobiArray) => hobiArray.join(", ");

const tampilkanUser = (user) => {
    // Destructuring: Mengambil data tertentu saja
    const { nama, hobi, role } = user;
    
    // Mencetak output terformat (Template Literals)
    console.log(`[USER] ${nama.toUpperCase()} | Role: ${role} | Hobi: ${gabungHobi(hobi)}`);
};

// 3. Async / Await (Simulasi Fetch Data dari API)
const ambilDataStatus = async () => {
    console.log("Memulai simulasi pengambilan data dari server...");
    
    // Menunggu simulasi pengambilan data selama 1 detik
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Data berhasil diambil! ✅");
    
    // Menampilkan data user satu per satu
    userData.forEach(tampilkanUser);
    
    // 4. Spread Operator: Menambah properti baru pada user pertama
    const userBaru = { ...userData[0], status: "Online" };
    console.log("--- Contoh Penggunaan Spread Operator ---");
    console.log("User Baru (Original + Status):", userBaru);
};

// Eksekusi fungsi asinkron
ambilDataStatus();

/** 
 * Penting: 
 * - Async/Await adalah kunci saat Anda nanti bekerja dengan API di React (useEffect).
 * - Destructuring sangat memudahkan Anda mengambil 'props' di React Component.
 */
