// for (let index = 0; index < 5; index++) {
//     console.log('wokkwokow',index)

// }

const comments = [
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

//nested loop



//looping
// for
// map
// foreach
// while
// do while


// for dalam for // nested looop
//map dalam map // nested loop
// comments.map((item)=> {
//     console.log(item.name)
//     console.log(item.comment)
//     item.replies.map((replies)=> {
//         console.log('----------',replies.name)
//         console.log('-------------------',replies.comment)
//     })
// })


// for (let index = 0; index < 5; index++) {
//   console.log('wokkwokow',index)

// }

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


data.map((item)=> {
  console.log(item.name)
})
for (let index = 0; index < data.length; index++) {
  console.log(data[index].name)
}


//data yang sudah terdefine sampai berapa perulangan.
//biasa static