function Angkot(supir, track, penumpang, kas) {
  this.supir = supir;
  this.track = track;
  this.penumpang = penumpang;
  this.kas = kas;

  //   function penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length == 0) {
      this.penumpang.unshift(namaPenumpang);
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          alert(this.penumpang[i] + " sudah berada di dalam angkot");
          return this.penumpang;
        }
      }

      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  //   function penumpang turun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    var undef = this.penumpang.every(function (e) {
      return e == undefined;
    });

    if (this.penumpang.length == 0 || undef == true) {
      alert("angkot masih kosong");
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          alert(namaPenumpang + " tidak ada di dalam angkot");
          return this.penumpang;
        }
      }
    }
  };
}

var angkot1 = new Angkot("rafli", ["a", "b"], [], 0);
// ketik pada console di browser
// angkot1.penumpangNaik("...");
// angkot1.penumpangTurun("...", 5000);

var angkot2 = new Angkot("muzammil", ["c", "d"], [], 0);
// ketik pada console di browser
// angkot2.penumpangNaik("...");
// angkot2.penumpangTurun("...", 5000);
