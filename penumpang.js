// logic tambah penumpang
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong maka tambahkan penumpang di awal array dan return
  if (penumpang.length == 0) {
    penumpang.unshift(namaPenumpang);
    return penumpang;
  } else {
    // telusuri setiap tempat duduk penumpang
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang yang naik sama maka tampilkan alert
      if (penumpang[i] == namaPenumpang) {
        alert(penumpang[i] + " sudah berada di dalam angkot");
        return penumpang;
      }
    }

    // telusuri setiap tempat duduk penumpang
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong maka tambahkan penumpang terbaru di kursi tersebut
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }

      // jika kursi penuh, tetap tambahkan penumpang
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

// logic hapus penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // cek apakah semua penumpang undefined
  var undef = penumpang.every(function (e) {
    return e == undefined;
  });

  // jika angkot kosong maka tampilkan alert
  if (penumpang.length == 0 || undef == true) {
    alert("angkot masih kosong");
    return penumpang;
  } else {
    // telusuri setiap tempat duduk penumpang
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai maka hapus penumpang
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      }

      // jika tidak ada nama penumpang yang sesuai maka tampilkan alert
      else if (i == penumpang.length - 1) {
        alert(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }
};

// START
// deklarasi penumpang
var penumpang = [];

// pengulangan
var ulangi = true;
while (ulangi) {
  // initial question
  var tanya = confirm(
    "tekan OK jika ingin menambah penumpang\ntekan BATAL jika ingin menghapus penumpang"
  );

  // user mengisi nama penumpang
  var namaPenumpang = prompt("masukkan nama penumpang");

  // user wajib mengisi nama penumpang
  while (namaPenumpang == "" || namaPenumpang == null) {
    namaPenumpang = prompt("anda harus memasukkan nama penumpang");
  }

  //   fungsi utama
  if (tanya) {
    tambahPenumpang(namaPenumpang.toLowerCase(), penumpang);
  } else {
    hapusPenumpang(namaPenumpang.toLowerCase(), penumpang);
  }

  console.log(penumpang);

  // ulangi?
  ulangi = confirm("apakah anda ingin mengulangi lagi?");
}
// END
