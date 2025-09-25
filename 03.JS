// 1. Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan, fakultas, ipk) {
    this.nama = nama;       // Attribute
    this.nim = nim;
    this.jurusan = jurusan;
    this.fakultas = fakultas;
    this.ipk = ipk;
  }

  // Method untuk menampilkan info dasar mahasiswa
  displayInfo() {
    console.log(
      `Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Fakultas: ${this.fakultas}, IPK: ${this.ipk}`
    );
  }
}

// 2. Class Anak Pertama (S1)
class MahasiswaS1 extends Mahasiswa {
  constructor(nama, nim, jurusan, fakultas, ipk, skripsi) {
    super(nama, nim, jurusan, fakultas, ipk); // panggil constructor induk
    this.skripsi = skripsi;
  }

  // Method tambahan
  displaySkripsi() {
    console.log(`Mahasiswa S1 ini sedang mengerjakan skripsi: "${this.skripsi}"`);
  }
}

// 2. Class Anak Kedua (S2)
class MahasiswaS2 extends Mahasiswa {
  constructor(nama, nim, jurusan, fakultas, ipk, tesis) {
    super(nama, nim, jurusan, fakultas, ipk);
    this.tesis = tesis;
  }

  // Method tambahan
  displayTesis() {
    console.log(`Mahasiswa S2 ini sedang menulis tesis berjudul: "${this.tesis}"`);
  }
}

// 3. Object dari class induk dan anak
const mhs1 = new Mahasiswa("gojo", "202001", "Informatika", "FTI", 3.45);
const mhs2 = new MahasiswaS1("kagenou", "202002", "Sistem Informasi", "FTI", 3.80, "Sistem Antrian Rumah Sakit");
const mhs3 = new MahasiswaS2("akame", "202003", "Teknik Elektro", "FT", 3.60, "AI untuk Energi Terbarukan");

// 4. Memanggil method
mhs1.displayInfo();
mhs2.displayInfo();
mhs2.displaySkripsi();
mhs3.displayInfo();
mhs3.displayTesis();
