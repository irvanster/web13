const person ={
    fullName: 'Ari Wibowo',
    gender: 'laki-laki',
    alamat: {
        jalan: 'kejora',
        kecamatan: 'anggrek',
        kabupaten: 'Mawar'
    },
    data: [
        {type: 'posts', data: [
            {title: 'Microsoft diakuisis apple'},
            {title: 'Apple Akuisisi Microsoft'},
        ]},
        {type: 'comments', data: [
            {name: 'Ariel', comment: 'gila!'},
            {name: 'Ariel', comment: 'gila!'},
        ]},
    ]
}


// console.log(person.alamat.kecamatan)

    // const [dataPosts, dataComments, dataProfile] = person.data
    // dataPosts.data.map((item)=> {
    //     console.log(item.title)
    // })

// const {alamat:{jalan, kecamatan, kabupaten}, fullName, gender} = person
// const {kecamatan,kabupaten, jalan} = person.alamat
// console.log(jalan, kecamatan, kabupaten)
// (
//     <card>
//         <title>{fullName}</title>
//         <subtitle>{gender}</subtitle>
//         <body>
//         {jalan} {kecamatan} {kabupaten}
//         </body>
//     </card>

// )





function addNewData({title, body, createdAt=new Date().toISOString()}) {
    // const {title, body, createdAt} = params
    console.log(title, body, createdAt)
    
}



addNewData({
    title: 'micorosft diakuisisi',
    body: 'oawkoako',
})














