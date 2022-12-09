const data = [
    {
      name: "RYAN",
      comment: "AOKWOWKOW",
      replies: [
        { name: "Arif", comment: "wah iya " },
        { name: "Arif", comment: "wah iya " },
        { name: "Agung", comment: "wah iya " },
        { name: "Hapsah", comment: "wah iya " },
      ],
    },
    {
      name: "Adriel",
      comment: "GIla Sumpah kerennn!!!",
      replies: [
        { name: "Hapsah", comment: "wah iya yayaaa " },
      ],
    },
  ];


let i = 0

while (i < data.length) {
    console.log(data[i].comment)
    i++
}

do {
    console.log(data[i].comment)
    i++
} while (i < data.length);

//penggunaannya itu ngga spesifisik, limitasi.
//kita ngga tau data yang kita punya itu berapa, dinamis.