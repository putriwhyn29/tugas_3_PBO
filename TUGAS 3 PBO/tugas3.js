// class utama
class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} m.`;
    }
}

// subclass Kapal Penumpang
class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

// Subclass Tiket Kapal
class TiketKapal extends KapalPenumpang {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang, hargaTiket) {
        super(nama, jenis, panjang, lebar, kapasitasPenumpang);
        this.hargaTiket = hargaTiket;
    }

    hitungTotalPenjualan(penumpang) {
        return `Total penjualan tiket adalah: Rp${penumpang * this.hargaTiket}`;
    }

    infoKapal() {
        return `${super.infoKapal()} Harga tiket per orang adalah Rp${this.hargaTiket}.`;
    }
}

// subclass Kecepatan Kapal
class KecepatanKapal extends Kapal {
    constructor(nama, jenis, panjang, lebar, kecepatan) {
        super(nama, jenis, panjang, lebar);
        this.kecepatan = kecepatan; // dalam km/jam
    }

    waktuPerjalanan(jarak) {
        const waktu = jarak / this.kecepatan; // waktu = jarak / kecepatan
        return `Perkiraan waktu perjalanan untuk menempuh jarak ${jarak} km adalah ${waktu.toFixed(2)} jam.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kecepatan maksimum ${this.kecepatan} km/jam.`;
    }
}

const kapalFerry = new KapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600);
console.log(kapalFerry.infoKapal());

const tiketFerry = new TiketKapal("Budiono Siregar", "Ferry", 200, 100, 600, 50000);
console.log(tiketFerry.infoKapal());
console.log(tiketFerry.hitungTotalPenjualan(400));

const kapalCepat = new KecepatanKapal("Budiono Express", "Kapal Cepat", 150, 50, 80);
console.log(kapalCepat.infoKapal());
console.log(kapalCepat.waktuPerjalanan(200));
