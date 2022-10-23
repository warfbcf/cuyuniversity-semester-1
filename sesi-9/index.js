// const mahasiswa = [
//   {
//     nama: "muhammad ridha",
//     alamat: "paal lima",
//     usia: 20,
//     semester: "1"
//   },
//   {
//     nama: "ridha",
//     alamat: "paal empat",
//     usia: 22,
//     semester: "5"
//   }
// ]

// function getDetailData() {
  // mahasiswa.map(function (result, i) {
  //   console.table(result);
  // });
  // mahasiswa.forEach(result => {
  //   console.log(result);
  // });
  // console.log(`data yang anda cari adalah ${mahasiswa}`);
// }

// standard function
// function getDetailHuman() {
//   i += 1;
//   if (i > 5) {
//     console.log("lebih dari 5x diklik")
//   } else {
//     console.log("jatah klik masih ada");
//   }
// }

// arrow function
// const getDetailHuman2 = () => {
//   i += 1;
//   i > 5 ? console.log("lebih dari 2x bro human2") : console.log("jatah klik masih ada human2");
// }

class Hewan {
  warna
  keahlian
  constructor(nama) {
    this.nama = nama
  }

  set newColor(color) { // setter diisi dari luar class default
    this.warna = color
  }
  
  set newSkill(skill) {
    this.keahlian = skill
  }

  get detail() {
    return `Hi saya ${this.nama}, saya berwarna ${this.warna}, dan keahlian saya ${this.keahlian}`
  }
}

const kucing = new Hewan('jojo')
kucing.newColor = "orange"
kucing.newSkill = "menggonggong"

// console.log(kucing.keahlian)
console.log(kucing.detail)