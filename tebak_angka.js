var ulangi = true;

// pengulangan ulangi
while (ulangi) {
  // deklarasi kesempatan
  var kesempatan = 3;
  alert("tebak angka dari 0-10 \nkamu mempunyai " + kesempatan + " kesempatan");

  // pilihan comp
  var comp = Math.round(Math.random() * 10);
  console.log(comp);

  while (kesempatan !== 0) {
    // pilihan player
    var player = parseInt(prompt("masukkan angka tebakan"));

    // tidak boleh selain angka atau negatif atau lebih dari 10
    while (isNaN(player) || player < 0 || player > 10) {
      player = parseInt(prompt("anda harus memasukkan angka dari 0-10"));
    }

    // kurangi kesempatan
    kesempatan -= 1;

    // rules - 3 if yang berbeda tetapi membuat 1 alur
    if (player == comp) {
      alert("anda benar");
      break;
    } else if (kesempatan !== 0) {
      alert(
        player > comp
          ? "terlalu TINGGI\nayo masih ada " + kesempatan + " kesempatan"
          : "terlalu RENDAH\nayo masih ada " + kesempatan + " kesempatan"
      );
    } else {
      alert("kesempatan anda habis");
      alert("jawabannya adalah " + comp + "\nanda KALAH");
    }
  }

  alert("terima kasih sudah bermain");
  //ulangi?
  ulangi = confirm("ulangi?");
}
