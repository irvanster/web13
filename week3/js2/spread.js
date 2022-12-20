const dataProfile = {
    fullName: "Ariel",
    umur: 23,
    gender: 'laki-laki',
    alamat: {
        jalan: 'kejora',
        kecamatan: 'anggrek',
        kabupaten: 'Mawar'
    },
}
const {umur, alamat} = dataProfile

const updateProfile = {
    fullName: 'Yunita',
    umur,
    alamat,
}

const hobbies1 = ['climbing','coding']
const hobbies2 = ['masak','minum']

// const hobbies = hobbies1.concat(hobbies2)
const hobbies = [...hobbies1, ...hobbies2]
console.log(hobbies)

console.log(updateProfile)