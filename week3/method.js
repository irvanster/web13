const posts = {
    data: [
        {title: 'Elon Musk beli twitter', content: 'lorem'},
        {title: 'Windows 12 bakal launching'},
    ],
    add: function(newData) {
        this.data.unshift(newData)
        return "Data berhasil di input"
    },
    delete: function() {
        this.data.shift()
        return "data berhasil dihapus"
    }
}



// const posts = {
//     data: [
//         {title: 'Elon Musk beli twitter'},
//         {title: 'Windows 12 bakal launching'},
//     ],
//     add: (newData)=>{
//         this.data.unshift(newData) // ga work😅
//         return "Data berhasil di input"


//     },
//     delete: ()=> {
//         this.data.shift()
//         return "data berhasil dihapus"
//     }
// }



console.log(posts.data)
console.log(posts.add({title: 'Seminggu Harga Beras Kualitas Medium I di Jawa Tengah Naik 3,25%', content: 'ad'}))
console.table(posts.data)
console.log(posts.delete({title: 'Seminggu Harga Beras Kualitas Medium I di Jawa Tengah Naik 3,25%'}))
console.table(posts.data)

