const sumarize = (num1, num2)=> {
    return num1+num2
}

const schoolList = [
    {name: 'SMP MAHARDIKA'},
    {name: 'SMA MAHARDIKA'},
    {name: 'UNIVERSITY MAHARDIKA'}
]

function name(params) {
    this
}
schoolList.map(function (item){
    console.log(item.name)
})
//arrow function
schoolList.map((item)=> {
    console.log(item.name)
})

console.log(sumarize(50,10))


// const posts = {
//     data: {
//         id: 5,
//         title: 'Elon musk akuisisi twitter',
//         body: 'awokwkoakwa'
//     },
//     add: function(params) {
//         return "tambah data berhasil"+ this.data.id
//     },
//     delete: ()=> {
//         return "tambah data berhasil"+ this.data.id
//     }
// }