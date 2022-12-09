// const biodata = {}

const namaLengkap = 'Ari Wibowo' //string
const umur = 21 //number
const isMarried = false //boolean
const children = null //null
const gelar = undefined //undefined

//non-primitif
const biodata = {
    nama: 'Arie Wibowo',
    umur: 21,
    isMarried: true,
    children: null,
    gelar: undefined,
    alamat: {
        jalan: 'jl AOKOKWKWO',
        kelurahan: 'APA',
        kecamatan: 'APAAAA',
        kota: 'API',
    },
    hobbies: ['mancing', 'sosmed', 'rebahan'], //array
    sekolah: [
        {namaSekolah: 'SMK TARUNA BANGSA', jurusan: 'TKJ'},
        {namaSekolah: 'UNIVERSITAS APALAH', jurusan: 'TI'},
    ], //array of object (non)

}
// console.log(biodata.nama) //Arie Wibowo
// console.log(biodata.alamat.jalan) //alamat
// console.log(biodata.sekolah[0]) //sekolah urutan pertama (0)
// console.log(biodata.sekolah[0].namaSekolah) //sekolah urutan pertama (0) dan nama sekolah aja

// biodata.sekolah.map((sekolah, index)=> {
//     console.log(index, sekolah.jurusan)
// })
// biodata.hobbies.map((hobie)=> {
//     console.log(hobie)
// })

//berlaku untuk tipedata primitif
// console.log(typeof biodata.sekolah)


function cariJodoh(name) {
    if(typeof name !="string") {
        console.log('Kamu Robot, kamu bukan manusia.')
    }else {
        let jodoh =['Ayu','Dewi','Ratna','Sari']
        let randomValue = jodoh[Math.floor(jodoh.length * Math.random())];
        console.log(`${name} kamu berjodoh dengan ${randomValue}`)
    }
}

cariJodoh(21)

