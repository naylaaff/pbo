try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  console.log(mahasiswa[5].toUpperCase());
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {
  console.log("Proses selesai.");
}

try {
  console.log(cekUsia(16));
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message);
}

// Definisi kelas error khusus
class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

// Fungsi untuk validasi nama
function cekNama(nama) {
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek!");
  }
  return `Nama valid: ${nama}`;
}

// Fungsi untuk cek usia
function cekUsia(usia) {
  if (usia < 18) {
    try {
      console.log(cekNama("Jo")); // ini akan error karena "Jo" < 3
    } catch (error) {
      if (error instanceof ValidasiError) {
        console.log("Terjadi kesalahan validasi: " + error.message);
      } else {
        console.log("Kesalahan lain: " + error.message);
      }
    }
    throw new Error("Maaf, Anda belum cukup umur!");
  }
  return "Selamat datang!";
}
